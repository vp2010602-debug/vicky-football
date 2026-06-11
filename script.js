/* Paste your Firebase config here. Keep databaseURL line. */
const firebaseConfig = {
  apiKey: "AIzaSyAXqB9_pYZsensijZuFqW7cHMW6mRrob6M",
  authDomain: "football-auction-arena.firebaseapp.com",
  databaseURL: "https://football-auction-arena-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "football-auction-arena",
  storageBucket: "football-auction-arena.firebasestorage.app",
  messagingSenderId: "573090943311",
  appId: "1:573090943311:web:dbc4019a02eb55d9e2f53a",
  measurementId: "G-BGN6SWJEY6"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();


const SQUAD_MAX = 15;
const RULES = {GK:{min:2,max:3}, DEF:{min:4,max:6}, MID:{min:4,max:6}, FWD:{min:2,max:5}};
const MIN_BASE_LEFT = 100; // 1 Cr reserved per remaining empty squad slot

let roomCode = localStorage.getItem("faa_room") || "";
let myId = localStorage.getItem("faa_id") || ("p_" + Math.random().toString(36).slice(2,10));
let myName = localStorage.getItem("faa_name") || "";
let isHost = localStorage.getItem("faa_host") === "yes";
let room = null, timerInterval = null, autoSoldKey = "";
localStorage.setItem("faa_id", myId);

function $(id){return document.getElementById(id)}
function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active")}
function money(lakhs){return (lakhs/100).toFixed(2)+" Cr"}
function showCreate(){show("createScreen")} function showJoin(){show("joinScreen")} function goHome(){show("home")}
function makeCode(){return Math.random().toString(36).slice(2,8).toUpperCase()}
function shuffle(arr){return arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1])}
function group(pos){if(pos==="GK")return"GK"; if(["CB","LB","RB"].includes(pos))return"DEF"; if(["CM","CDM","CAM"].includes(pos))return"MID"; return"FWD"}
function squadArr(u){return Object.values(u?.squad||{})}
function counts(u){let c={GK:0,DEF:0,MID:0,FWD:0}; squadArr(u).forEach(p=>c[group(p.pos)]++); return c}
function squadComplete(u){let c=counts(u), n=squadArr(u).length; return n>=11 && c.GK>=1 && c.DEF>=3 && c.MID>=3 && c.FWD>=1}
function fullSquadComplete(u){let c=counts(u), n=squadArr(u).length; return n>=SQUAD_MAX && Object.keys(RULES).every(k=>c[k]>=RULES[k].min)}
function bestXI(u){let s=squadArr(u).sort((a,b)=>b.rating-a.rating);let need={GK:1,DEF:3,MID:3,FWD:1};let xi=[];for(const g of Object.keys(need)){for(const p of s.filter(x=>group(x.pos)===g).slice(0,need[g]))xi.push(p)};for(const p of s){if(xi.length>=11)break;if(!xi.includes(p))xi.push(p)}return xi.slice(0,11)}
function finalScore(u){let xi=bestXI(u), score=xi.reduce((a,p)=>a+p.rating,0); if(squadComplete(u))score+=25; if(fullSquadComplete(u))score+=50; score+=Math.floor((u.purse||0)/1000); return score}

async function createRoom(){
  const name=$("hostName").value.trim(); 
  const team=$("hostTeam").value.trim() || name + " FC";
  const logo=$("hostLogo").value.trim() || "⚽";
  if(!name)return alert("Enter your name macha");
  roomCode=makeCode(); myName=name; isHost=true;
  localStorage.setItem("faa_room",roomCode); localStorage.setItem("faa_name",myName); localStorage.setItem("faa_host","yes");
  const budget=Number($("budgetSelect").value), timer=Number($("timerSelect").value), pin=$("hostPin").value.trim()||"1234";
  await db.ref("rooms/"+roomCode).set({createdAt:Date.now(),status:"lobby",hostId:myId,hostPin:pin,budget,timer,index:0,currentBid:0,highestBidderId:"",highestBidderName:"",sold:{},unsold:{},history:{},players:shuffle(PLAYERS)});
  await db.ref(`rooms/${roomCode}/users/${myId}`).set({name:myName,team:team,logo:logo,purse:budget,squad:{},score:0,joinedAt:Date.now()});
  listenRoom(); show("lobby");
}

async function joinRoom(){
  const name=$("joinName").value.trim(), team=$("joinTeam").value.trim() || name + " FC", logo=$("joinLogo").value.trim() || "⚽", code=$("roomCodeInput").value.trim().toUpperCase();
  if(!name||!code)return alert("Enter name and room code");
  const snap=await db.ref("rooms/"+code).get(); if(!snap.exists())return alert("Room not found");
  roomCode=code; myName=name; isHost=false; localStorage.setItem("faa_room",roomCode); localStorage.setItem("faa_name",myName); localStorage.setItem("faa_host","no");
  const data=snap.val(), userCount=data.users?Object.keys(data.users).length:0; if(userCount>=8)return alert("Room full. Maximum 8 players.");
  await db.ref(`rooms/${roomCode}/users/${myId}`).set({name:myName,team:team,logo:logo,purse:data.budget||10000,squad:{},score:0,joinedAt:Date.now()});
  listenRoom(); show(data.status==="auction"?"auction":"lobby");
}

function listenRoom(){
  if(!roomCode)return;
  $("roomCodeText").textContent=roomCode; $("auctionRoomCode").textContent=roomCode;
  db.ref("rooms/"+roomCode).on("value",snap=>{if(!snap.exists())return; room=snap.val(); isHost=room.hostId===myId; render();});
}

function render(){
  if(!room)return;
  renderLobby(); renderAuction();
  if(room.status==="lobby")show("lobby"); if(room.status==="auction")show("auction"); if(room.status==="ended"){renderResults();show("results")}
}

function renderLobby(){
  const users=room.users||{};
  $("lobbyPlayers").innerHTML=Object.entries(users).map(([id,u])=>`<div class="person"><b>${u.logo || "⚽"} ${u.team || u.name}${id===room.hostId?" 👑":""}</b><span>${money(u.purse||room.budget)}</span></div>`).join("");
  $("hostLobbyControls").classList.toggle("hidden",!isHost);
}
function renderAuction(){
  const users=room.users||{}, me=users[myId]; if(me){$("myPurse").textContent=money(me.purse);$("mySquadCount").textContent=squadArr(me).length+"/"+SQUAD_MAX}
  const p=room.players?.[room.index]; if(!p)return;
  $("playerRating").textContent=p.rating; $("playerPhoto").textContent=p.emoji||"⚽"; $("playerName").textContent=p.name;
  $("playerMeta").textContent=`${p.country} • ${p.pos} • ${group(p.pos)}`; $("basePrice").textContent=money(p.base);
  $("currentBid").textContent=money(room.currentBid||p.base); $("highestBidder").textContent=room.highestBidderName?`Highest: ${room.highestBidderName}`:"No bids yet";
  $("hostControls").classList.toggle("hidden",!isHost);
  $("liveBidders").innerHTML=Object.entries(users).map(([id,u])=>`<div class="person"><b>${u.name}</b><span>${squadArr(u).length}/15 • ${money(u.purse)}</span></div>`).join("");
  renderMySquad(me); renderRules(me); renderSold(); renderHistory(); updateTimer(); bidStatus(me,p);
}
function renderMySquad(me){
  const s=squadArr(me);
  $("mySquad").innerHTML=s.length?s.map(x=>`<div class="squadItem"><span>${x.emoji||"⚽"} ${x.name} (${x.pos})</span><b>${money(x.price)}</b></div>`).join(""):`<p class="hint">No players bought yet.</p>`;
}
function renderRules(me){
  const c=counts(me), n=squadArr(me).length;
  $("squadRules").innerHTML=Object.keys(RULES).map(k=>`<div class="rule ${c[k]>=RULES[k].min?'ok':'bad'}"><b>${k}</b><span>${c[k]} / min ${RULES[k].min}</span></div>`).join("")+`<div class="rule ${n>=SQUAD_MAX?'ok':'bad'}"><b>Total</b><span>${n}/15</span></div>`;
}
function renderSold(){
  const sold=Object.values(room.sold||{}).slice(-12).reverse();
  $("soldTable").innerHTML=sold.length?sold.map(p=>`<div class="squadItem"><span>${p.emoji||"⚽"} ${p.name} → ${p.owner}</span><b>${money(p.price)}</b></div>`).join(""):`<p class="hint">No sold players yet.</p>`;
}
function renderHistory(){
  const h=Object.values(room.history||{}).slice(-15).reverse();
  $("historyLog").innerHTML=h.length?h.map(x=>`<div class="log">${x.text}</div>`).join(""):`<p class="hint">Auction history will appear here.</p>`;
}
function bidStatus(me,p){
  let msg=""; if(!me)return;
  const n=squadArr(me).length, c=counts(me), g=group(p.pos);
  if(n>=SQUAD_MAX) msg="Squad full. You cannot bid.";
  else if(c[g]>=RULES[g].max) msg=`Maximum ${g} players reached.`;
  $("bidWarning").textContent=msg;
}
function canBid(me,p,nextBid){
  if(!me)return "You are not in room";
  const n=squadArr(me).length, c=counts(me), g=group(p.pos);
  if(n>=SQUAD_MAX)return "Squad full";
  if(c[g]>=RULES[g].max)return `Maximum ${g} players reached`;
  const remainingSlots=SQUAD_MAX-(n+1);
  if(me.purse-nextBid < remainingSlots*MIN_BASE_LEFT) return "Keep enough purse for remaining squad slots";
  if(nextBid>me.purse)return "Not enough purse";
  return "";
}

async function startAuction(){
  if(!isHost)return; const userCount=Object.keys(room.users||{}).length; if(userCount<2 && !confirm("Only 1 player in lobby. Start anyway?"))return;
  const p=room.players[0]; await db.ref("rooms/"+roomCode).update({status:"auction",index:0,currentBid:p.base,highestBidderId:"",highestBidderName:"",bidEndAt:Date.now()+(room.timer||30)*1000});
  addHistory("Auction started");
}
async function placeBid(addLakhs){
  if(!room||room.status!=="auction")return alert("Auction not active");
  const me=(room.users||{})[myId], p=room.players[room.index], nextBid=Math.max(room.currentBid||p.base,p.base)+Number(addLakhs);
  const err=canBid(me,p,nextBid); if(err)return alert(err);
  await db.ref("rooms/"+roomCode).update({currentBid:nextBid,highestBidderId:myId,highestBidderName:myName,bidEndAt:Date.now()+15000});
  addHistory(`${myName} bid ${money(nextBid)} for ${p.name}`);
}
function customBid(){const v=Number($("customBid").value); if(!v||v<=0)return alert("Enter lakhs amount"); placeBid(v); $("customBid").value=""}

async function addHistory(text){ if(!roomCode)return; await db.ref(`rooms/${roomCode}/history`).push({text,time:Date.now()}); }

async function sellPlayer(){
  if(!isHost)return; const bidder=room.highestBidderId, p=room.players[room.index]; if(!bidder)return alert("No bidder. Use Unsold.");
  const price=room.currentBid||p.base, u=room.users[bidder]; if(!u||u.purse<price)return alert("Bidder has insufficient purse.");
  const playerObj={...p,price}; const updates={};
  updates[`users/${bidder}/purse`]=u.purse-price; updates[`users/${bidder}/squad/${room.index}`]=playerObj; updates[`sold/${room.index}`]={...playerObj,owner:u.name};
  await nextPlayerUpdates(updates); await db.ref("rooms/"+roomCode).update(updates); addHistory(`${p.name} sold to ${u.name} for ${money(price)}`);
}
async function unsoldPlayer(){
  if(!isHost)return; const p=room.players[room.index]; const updates={}; updates[`unsold/${room.index}`]=p;
  await nextPlayerUpdates(updates); await db.ref("rooms/"+roomCode).update(updates); addHistory(`${p.name} went unsold`);
}
async function nextPlayerUpdates(updates){
  const nextIndex=room.index+1;
  if(nextIndex>=room.players.length){updates.status="ended";return}
  const np=room.players[nextIndex]; updates.index=nextIndex; updates.currentBid=np.base; updates.highestBidderId=""; updates.highestBidderName=""; updates.bidEndAt=Date.now()+(room.timer||30)*1000;
}
async function endAuction(){if(confirm("End auction now?")){await db.ref("rooms/"+roomCode).update({status:"ended"});addHistory("Auction ended")}}

/* Auto-sell when timer reaches zero. Only host device performs it. */
function updateTimer(){
  clearInterval(timerInterval);
  timerInterval=setInterval(async()=>{
    if(!room||room.status!=="auction")return;
    const left=Math.max(0,Math.ceil(((room.bidEndAt||Date.now())-Date.now())/1000)); $("timerText").textContent=left+"s";
    const key=room.index+"_"+(room.bidEndAt||0);
    if(left<=0 && isHost && autoSoldKey!==key){autoSoldKey=key; room.highestBidderId ? await sellPlayer() : await unsoldPlayer();}
  },300);
}

function renderResults(){
  buildFormationScreen();
  const users=Object.values(room.users||{}).map(u=>({...u,final:finalScore(u),xi:bestXI(u)})).sort((a,b)=>b.final-a.final);
  $("leaderboard").innerHTML=users.map((u,i)=>{
    const c=counts(u), squad=squadArr(u);
    return `<div class="rank">
      <h3>${i+1}. ${u.name} ${i===0?"🏆":""}</h3>
      <div class="score">Final Score: ${u.final} • Best XI Rating: ${u.xi.reduce((a,p)=>a+p.rating,0)} • Purse Left: ${money(u.purse||0)}</div>
      <p><b>Squad:</b> ${squad.map(p=>p.name).join(", ")||"No players"}</p>
      <p><b>Best XI:</b> ${u.xi.map(p=>`${p.name} (${p.pos})`).join(", ")||"Not enough players"}</p>
      <p class="${fullSquadComplete(u)?'green':'red'}">Rules: GK ${c.GK}, DEF ${c.DEF}, MID ${c.MID}, FWD ${c.FWD}, Total ${squad.length}/15</p>
    </div>`;
  }).join("");
}
function copyRoomCode(){navigator.clipboard.writeText(roomCode);alert("Room code copied: "+roomCode)}
function leaveRoom(){localStorage.removeItem("faa_room");localStorage.removeItem("faa_host");roomCode="";room=null;goHome()}
let selectedXIPlayer = null;
let manualXI = {};

const FORMATIONS = {
  "433": [["GK"],["DEF","DEF","DEF","DEF"],["MID","MID","MID"],["FWD","FWD","FWD"]],
  "442": [["GK"],["DEF","DEF","DEF","DEF"],["MID","MID","MID","MID"],["FWD","FWD"]],
  "352": [["GK"],["DEF","DEF","DEF"],["MID","MID","MID","MID","MID"],["FWD","FWD"]]
};

function buildFormationScreen(){
  if(!room || !room.users || !room.users[myId]) return;

  const me = room.users[myId];
  const squad = squadArr(me);

  $("formationSquad").innerHTML = squad.map((p,i)=>`
    <div class="squadItem pickPlayer" onclick="selectXIPlayer('${i}')">
      <span>${p.emoji || "⚽"} ${p.name} (${p.pos})</span>
      <b>${p.rating}</b>
    </div>
  `).join("");

  renderFormationPitch();
}

function changeFormation(){
  manualXI = {};
  renderFormationPitch();
}

function renderFormationPitch(){
  const formation = $("formationSelect")?.value || "433";
  const rows = FORMATIONS[formation];

  $("formationPitch").innerHTML = rows.map((row,rowIndex)=>`
    <div class="pitchRow">
      ${row.map((slotType,slotIndex)=>{
        const key = rowIndex + "_" + slotIndex;
        const p = manualXI[key];
        return `
          <div class="slot ${p ? "filled" : ""}" onclick="assignToSlot('${key}','${slotType}')">
            ${p ? `${p.emoji || "⚽"}<br>${p.name}<br><b>${p.rating}</b>` : slotType}
          </div>
        `;
      }).join("")}
    </div>
  `).join("");
}

function selectXIPlayer(index){
  const me = room.users[myId];
  selectedXIPlayer = squadArr(me)[index];

  document.querySelectorAll(".pickPlayer").forEach(x=>x.classList.remove("selected"));
  document.querySelectorAll(".pickPlayer")[index].classList.add("selected");
}

function assignToSlot(key, slotType){
  if(!selectedXIPlayer) return alert("First select a player from your squad");

  const pGroup = group(selectedXIPlayer.pos);

  if(pGroup !== slotType){
    return alert(`This slot needs ${slotType}, but selected player is ${pGroup}`);
  }

  for(const k in manualXI){
    if(manualXI[k].name === selectedXIPlayer.name){
      delete manualXI[k];
    }
  }

  manualXI[key] = selectedXIPlayer;
  renderFormationPitch();
}

async function saveManualXI(){
  const xi = Object.values(manualXI);

  if(xi.length !== 11){
    return alert("Select exactly 11 players macha");
  }

  const rating = xi.reduce((sum,p)=>sum + p.rating,0);

  await db.ref(`rooms/${roomCode}/users/${myId}/manualXI`).set(xi);
  await db.ref(`rooms/${roomCode}/users/${myId}/manualXIRating`).set(rating);

  alert("Formation saved successfully 🔥");
}
localStorage.removeItem("faa_room");
localStorage.removeItem("faa_host");
localStorage.removeItem("faa_name");

show("home");
