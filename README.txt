FOOTBALL AUCTION ARENA PRO

WHAT IS ADDED
- 2 to 8 players
- 100 Cr purse
- Bidding in lakhs
- 15-player squad limit
- Position rules:
  GK min 2 max 3
  DEF min 4 max 6
  MID min 4 max 6
  FWD min 2 max 5
- Auto sell / unsold when timer ends
- Sold players table
- Auction history
- Best XI generator
- Final leaderboard with:
  Best XI rating
  Complete squad bonus
  Full 15-player squad bonus
  Remaining purse bonus

FILES
index.html
style.css
players.js
script.js
README.txt

SETUP
1. Extract ZIP.
2. Your Firebase config is already added from your screenshot.
3. Open index.html to test.
4. For friends to join, upload these 4 files to GitHub:
   index.html, style.css, players.js, script.js
5. Enable GitHub Pages:
   GitHub repo -> Settings -> Pages -> Deploy from branch -> main -> /root

FIREBASE RULES FOR TESTING
{
  "rules": {
    ".read": true,
    ".write": true
  }
}

NOTE
After testing with friends, change Firebase rules later for safety.
