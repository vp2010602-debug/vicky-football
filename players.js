const PLAYERS = [
  {
    "name": "Alisson Becker",
    "country": "Brazil",
    "pos": "GK",
    "rating": 90,
    "base": 350,
    "emoji": "🧤"
  },
  {
    "name": "Thibaut Courtois",
    "country": "Belgium",
    "pos": "GK",
    "rating": 90,
    "base": 350,
    "emoji": "🧤"
  },
  {
    "name": "Gianluigi Donnarumma",
    "country": "Italy",
    "pos": "GK",
    "rating": 89,
    "base": 320,
    "emoji": "🧤"
  },
  {
    "name": "Emiliano Martinez",
    "country": "Argentina",
    "pos": "GK",
    "rating": 88,
    "base": 300,
    "emoji": "🧤"
  },
  {
    "name": "Ederson",
    "country": "Brazil",
    "pos": "GK",
    "rating": 88,
    "base": 300,
    "emoji": "🧤"
  },
  {
    "name": "Marc-Andre ter Stegen",
    "country": "Germany",
    "pos": "GK",
    "rating": 88,
    "base": 300,
    "emoji": "🧤"
  },
  {
    "name": "Mike Maignan",
    "country": "France",
    "pos": "GK",
    "rating": 87,
    "base": 280,
    "emoji": "🧤"
  },
  {
    "name": "David Raya",
    "country": "Spain",
    "pos": "GK",
    "rating": 85,
    "base": 220,
    "emoji": "🧤"
  },
  {
    "name": "Jordan Pickford",
    "country": "England",
    "pos": "GK",
    "rating": 84,
    "base": 200,
    "emoji": "🧤"
  },
  {
    "name": "Yann Sommer",
    "country": "Switzerland",
    "pos": "GK",
    "rating": 84,
    "base": 200,
    "emoji": "🧤"
  },
  {
    "name": "Dominik Livakovic",
    "country": "Croatia",
    "pos": "GK",
    "rating": 83,
    "base": 180,
    "emoji": "🧤"
  },
  {
    "name": "Gregor Kobel",
    "country": "Switzerland",
    "pos": "GK",
    "rating": 86,
    "base": 240,
    "emoji": "🧤"
  },
  {
    "name": "Guglielmo Vicario",
    "country": "Italy",
    "pos": "GK",
    "rating": 84,
    "base": 200,
    "emoji": "🧤"
  },
  {
    "name": "Unai Simon",
    "country": "Spain",
    "pos": "GK",
    "rating": 84,
    "base": 200,
    "emoji": "🧤"
  },
  {
    "name": "Giorgi Mamardashvili",
    "country": "Georgia",
    "pos": "GK",
    "rating": 85,
    "base": 220,
    "emoji": "🧤"
  },
  {
    "name": "Virgil van Dijk",
    "country": "Netherlands",
    "pos": "CB",
    "rating": 90,
    "base": 380,
    "emoji": "🛡️"
  },
  {
    "name": "William Saliba",
    "country": "France",
    "pos": "CB",
    "rating": 88,
    "base": 330,
    "emoji": "🛡️"
  },
  {
    "name": "Ruben Dias",
    "country": "Portugal",
    "pos": "CB",
    "rating": 89,
    "base": 350,
    "emoji": "🛡️"
  },
  {
    "name": "Josko Gvardiol",
    "country": "Croatia",
    "pos": "CB",
    "rating": 88,
    "base": 330,
    "emoji": "🛡️"
  },
  {
    "name": "Alessandro Bastoni",
    "country": "Italy",
    "pos": "CB",
    "rating": 87,
    "base": 300,
    "emoji": "🛡️"
  },
  {
    "name": "Ronald Araujo",
    "country": "Uruguay",
    "pos": "CB",
    "rating": 88,
    "base": 330,
    "emoji": "🛡️"
  },
  {
    "name": "Achraf Hakimi",
    "country": "Morocco",
    "pos": "RB",
    "rating": 87,
    "base": 300,
    "emoji": "🛡️"
  },
  {
    "name": "Theo Hernandez",
    "country": "France",
    "pos": "LB",
    "rating": 87,
    "base": 300,
    "emoji": "🛡️"
  },
  {
    "name": "Alphonso Davies",
    "country": "Canada",
    "pos": "LB",
    "rating": 87,
    "base": 300,
    "emoji": "🛡️"
  },
  {
    "name": "Trent Alexander-Arnold",
    "country": "England",
    "pos": "RB",
    "rating": 87,
    "base": 300,
    "emoji": "🛡️"
  },
  {
    "name": "Joao Cancelo",
    "country": "Portugal",
    "pos": "RB",
    "rating": 86,
    "base": 270,
    "emoji": "🛡️"
  },
  {
    "name": "Jules Kounde",
    "country": "France",
    "pos": "RB",
    "rating": 86,
    "base": 270,
    "emoji": "🛡️"
  },
  {
    "name": "Gabriel Magalhaes",
    "country": "Brazil",
    "pos": "CB",
    "rating": 87,
    "base": 300,
    "emoji": "🛡️"
  },
  {
    "name": "Ibrahima Konate",
    "country": "France",
    "pos": "CB",
    "rating": 85,
    "base": 240,
    "emoji": "🛡️"
  },
  {
    "name": "Gleison Bremer",
    "country": "Brazil",
    "pos": "CB",
    "rating": 86,
    "base": 270,
    "emoji": "🛡️"
  },
  {
    "name": "Matthijs de Ligt",
    "country": "Netherlands",
    "pos": "CB",
    "rating": 86,
    "base": 270,
    "emoji": "🛡️"
  },
  {
    "name": "Kim Min-jae",
    "country": "South Korea",
    "pos": "CB",
    "rating": 86,
    "base": 270,
    "emoji": "🛡️"
  },
  {
    "name": "Eder Militao",
    "country": "Brazil",
    "pos": "CB",
    "rating": 86,
    "base": 270,
    "emoji": "🛡️"
  },
  {
    "name": "Pau Cubarsi",
    "country": "Spain",
    "pos": "CB",
    "rating": 84,
    "base": 210,
    "emoji": "🛡️"
  },
  {
    "name": "Riccardo Calafiori",
    "country": "Italy",
    "pos": "CB",
    "rating": 84,
    "base": 210,
    "emoji": "🛡️"
  },
  {
    "name": "Federico Dimarco",
    "country": "Italy",
    "pos": "LB",
    "rating": 85,
    "base": 240,
    "emoji": "🛡️"
  },
  {
    "name": "Jeremie Frimpong",
    "country": "Netherlands",
    "pos": "RB",
    "rating": 85,
    "base": 240,
    "emoji": "🛡️"
  },
  {
    "name": "Andrew Robertson",
    "country": "Scotland",
    "pos": "LB",
    "rating": 85,
    "base": 240,
    "emoji": "🛡️"
  },
  {
    "name": "Kyle Walker",
    "country": "England",
    "pos": "RB",
    "rating": 85,
    "base": 240,
    "emoji": "🛡️"
  },
  {
    "name": "John Stones",
    "country": "England",
    "pos": "CB",
    "rating": 86,
    "base": 270,
    "emoji": "🛡️"
  },
  {
    "name": "Nathan Ake",
    "country": "Netherlands",
    "pos": "CB",
    "rating": 84,
    "base": 210,
    "emoji": "🛡️"
  },
  {
    "name": "Antonio Rudiger",
    "country": "Germany",
    "pos": "CB",
    "rating": 88,
    "base": 330,
    "emoji": "🛡️"
  },
  {
    "name": "Dayot Upamecano",
    "country": "France",
    "pos": "CB",
    "rating": 85,
    "base": 240,
    "emoji": "🛡️"
  },
  {
    "name": "Piero Hincapie",
    "country": "Ecuador",
    "pos": "CB",
    "rating": 84,
    "base": 210,
    "emoji": "🛡️"
  },
  {
    "name": "Denzel Dumfries",
    "country": "Netherlands",
    "pos": "RB",
    "rating": 84,
    "base": 210,
    "emoji": "🛡️"
  },
  {
    "name": "Marc Cucurella",
    "country": "Spain",
    "pos": "LB",
    "rating": 84,
    "base": 210,
    "emoji": "🛡️"
  },
  {
    "name": "Dani Carvajal",
    "country": "Spain",
    "pos": "RB",
    "rating": 86,
    "base": 270,
    "emoji": "🛡️"
  },
  {
    "name": "Alejandro Grimaldo",
    "country": "Spain",
    "pos": "LB",
    "rating": 86,
    "base": 270,
    "emoji": "🛡️"
  },
  {
    "name": "Ben White",
    "country": "England",
    "pos": "RB",
    "rating": 85,
    "base": 240,
    "emoji": "🛡️"
  },
  {
    "name": "Fikayo Tomori",
    "country": "England",
    "pos": "CB",
    "rating": 84,
    "base": 210,
    "emoji": "🛡️"
  },
  {
    "name": "Milan Skriniar",
    "country": "Slovakia",
    "pos": "CB",
    "rating": 85,
    "base": 240,
    "emoji": "🛡️"
  },
  {
    "name": "Aymeric Laporte",
    "country": "Spain",
    "pos": "CB",
    "rating": 85,
    "base": 240,
    "emoji": "🛡️"
  },
  {
    "name": "Cristian Romero",
    "country": "Argentina",
    "pos": "CB",
    "rating": 86,
    "base": 270,
    "emoji": "🛡️"
  },
  {
    "name": "Nicolas Otamendi",
    "country": "Argentina",
    "pos": "CB",
    "rating": 83,
    "base": 180,
    "emoji": "🛡️"
  },
  {
    "name": "Jurrien Timber",
    "country": "Netherlands",
    "pos": "RB",
    "rating": 84,
    "base": 210,
    "emoji": "🛡️"
  },
  {
    "name": "Diogo Dalot",
    "country": "Portugal",
    "pos": "RB",
    "rating": 83,
    "base": 180,
    "emoji": "🛡️"
  },
  {
    "name": "Nuno Mendes",
    "country": "Portugal",
    "pos": "LB",
    "rating": 85,
    "base": 240,
    "emoji": "🛡️"
  },
  {
    "name": "Lutsharel Geertruida",
    "country": "Netherlands",
    "pos": "RB",
    "rating": 84,
    "base": 210,
    "emoji": "🛡️"
  },
  {
    "name": "Nico Schlotterbeck",
    "country": "Germany",
    "pos": "CB",
    "rating": 85,
    "base": 240,
    "emoji": "🛡️"
  },
  {
    "name": "Manuel Akanji",
    "country": "Switzerland",
    "pos": "CB",
    "rating": 85,
    "base": 240,
    "emoji": "🛡️"
  },
  {
    "name": "Rodri",
    "country": "Spain",
    "pos": "CDM",
    "rating": 91,
    "base": 450,
    "emoji": "🎯"
  },
  {
    "name": "Jude Bellingham",
    "country": "England",
    "pos": "CM",
    "rating": 91,
    "base": 450,
    "emoji": "🎯"
  },
  {
    "name": "Pedri",
    "country": "Spain",
    "pos": "CM",
    "rating": 87,
    "base": 300,
    "emoji": "🎯"
  },
  {
    "name": "Gavi",
    "country": "Spain",
    "pos": "CM",
    "rating": 86,
    "base": 270,
    "emoji": "🎯"
  },
  {
    "name": "Kevin De Bruyne",
    "country": "Belgium",
    "pos": "CM",
    "rating": 91,
    "base": 450,
    "emoji": "🎯"
  },
  {
    "name": "Jamal Musiala",
    "country": "Germany",
    "pos": "CAM",
    "rating": 88,
    "base": 340,
    "emoji": "🎯"
  },
  {
    "name": "Florian Wirtz",
    "country": "Germany",
    "pos": "CAM",
    "rating": 88,
    "base": 340,
    "emoji": "🎯"
  },
  {
    "name": "Bruno Fernandes",
    "country": "Portugal",
    "pos": "CAM",
    "rating": 88,
    "base": 340,
    "emoji": "🎯"
  },
  {
    "name": "Bernardo Silva",
    "country": "Portugal",
    "pos": "CM",
    "rating": 88,
    "base": 340,
    "emoji": "🎯"
  },
  {
    "name": "Declan Rice",
    "country": "England",
    "pos": "CDM",
    "rating": 88,
    "base": 340,
    "emoji": "🎯"
  },
  {
    "name": "Aurelien Tchouameni",
    "country": "France",
    "pos": "CDM",
    "rating": 86,
    "base": 270,
    "emoji": "🎯"
  },
  {
    "name": "Eduardo Camavinga",
    "country": "France",
    "pos": "CM",
    "rating": 87,
    "base": 300,
    "emoji": "🎯"
  },
  {
    "name": "Federico Valverde",
    "country": "Uruguay",
    "pos": "CM",
    "rating": 88,
    "base": 340,
    "emoji": "🎯"
  },
  {
    "name": "Nicolo Barella",
    "country": "Italy",
    "pos": "CM",
    "rating": 87,
    "base": 300,
    "emoji": "🎯"
  },
  {
    "name": "Martin Odegaard",
    "country": "Norway",
    "pos": "CAM",
    "rating": 89,
    "base": 380,
    "emoji": "🎯"
  },
  {
    "name": "Cole Palmer",
    "country": "England",
    "pos": "CAM",
    "rating": 88,
    "base": 340,
    "emoji": "🎯"
  },
  {
    "name": "Phil Foden",
    "country": "England",
    "pos": "CAM",
    "rating": 88,
    "base": 340,
    "emoji": "🎯"
  },
  {
    "name": "James Maddison",
    "country": "England",
    "pos": "CAM",
    "rating": 84,
    "base": 210,
    "emoji": "🎯"
  },
  {
    "name": "Vitinha",
    "country": "Portugal",
    "pos": "CM",
    "rating": 87,
    "base": 300,
    "emoji": "🎯"
  },
  {
    "name": "Joao Neves",
    "country": "Portugal",
    "pos": "CM",
    "rating": 85,
    "base": 240,
    "emoji": "🎯"
  },
  {
    "name": "Tijjani Reijnders",
    "country": "Netherlands",
    "pos": "CM",
    "rating": 85,
    "base": 240,
    "emoji": "🎯"
  },
  {
    "name": "Alexis Mac Allister",
    "country": "Argentina",
    "pos": "CM",
    "rating": 87,
    "base": 300,
    "emoji": "🎯"
  },
  {
    "name": "Enzo Fernandez",
    "country": "Argentina",
    "pos": "CM",
    "rating": 86,
    "base": 270,
    "emoji": "🎯"
  },
  {
    "name": "Marcel Sabitzer",
    "country": "Austria",
    "pos": "CM",
    "rating": 84,
    "base": 210,
    "emoji": "🎯"
  },
  {
    "name": "Joshua Kimmich",
    "country": "Germany",
    "pos": "CDM",
    "rating": 88,
    "base": 340,
    "emoji": "🎯"
  },
  {
    "name": "Ilkay Gundogan",
    "country": "Germany",
    "pos": "CM",
    "rating": 87,
    "base": 300,
    "emoji": "🎯"
  },
  {
    "name": "Xavi Simons",
    "country": "Netherlands",
    "pos": "CAM",
    "rating": 85,
    "base": 240,
    "emoji": "🎯"
  },
  {
    "name": "Youri Tielemans",
    "country": "Belgium",
    "pos": "CM",
    "rating": 84,
    "base": 210,
    "emoji": "🎯"
  },
  {
    "name": "Teun Koopmeiners",
    "country": "Netherlands",
    "pos": "CM",
    "rating": 84,
    "base": 210,
    "emoji": "🎯"
  },
  {
    "name": "Mikel Merino",
    "country": "Spain",
    "pos": "CM",
    "rating": 84,
    "base": 210,
    "emoji": "🎯"
  },
  {
    "name": "Warren Zaire-Emery",
    "country": "France",
    "pos": "CM",
    "rating": 84,
    "base": 210,
    "emoji": "🎯"
  },
  {
    "name": "Adrien Rabiot",
    "country": "France",
    "pos": "CM",
    "rating": 84,
    "base": 210,
    "emoji": "🎯"
  },
  {
    "name": "Kobbie Mainoo",
    "country": "England",
    "pos": "CM",
    "rating": 82,
    "base": 150,
    "emoji": "🎯"
  },
  {
    "name": "Conor Gallagher",
    "country": "England",
    "pos": "CM",
    "rating": 84,
    "base": 210,
    "emoji": "🎯"
  },
  {
    "name": "Lucas Paqueta",
    "country": "Brazil",
    "pos": "CAM",
    "rating": 85,
    "base": 240,
    "emoji": "🎯"
  },
  {
    "name": "Bruno Guimaraes",
    "country": "Brazil",
    "pos": "CM",
    "rating": 87,
    "base": 300,
    "emoji": "🎯"
  },
  {
    "name": "Scott McTominay",
    "country": "Scotland",
    "pos": "CM",
    "rating": 83,
    "base": 180,
    "emoji": "🎯"
  },
  {
    "name": "Christian Eriksen",
    "country": "Denmark",
    "pos": "CM",
    "rating": 83,
    "base": 180,
    "emoji": "🎯"
  },
  {
    "name": "Hakan Calhanoglu",
    "country": "Turkey",
    "pos": "CDM",
    "rating": 86,
    "base": 270,
    "emoji": "🎯"
  },
  {
    "name": "Piotr Zielinski",
    "country": "Poland",
    "pos": "CM",
    "rating": 84,
    "base": 210,
    "emoji": "🎯"
  },
  {
    "name": "Manuel Locatelli",
    "country": "Italy",
    "pos": "CDM",
    "rating": 83,
    "base": 180,
    "emoji": "🎯"
  },
  {
    "name": "Lorenzo Pellegrini",
    "country": "Italy",
    "pos": "CAM",
    "rating": 83,
    "base": 180,
    "emoji": "🎯"
  },
  {
    "name": "Thomas Partey",
    "country": "Ghana",
    "pos": "CDM",
    "rating": 83,
    "base": 180,
    "emoji": "🎯"
  },
  {
    "name": "Koke",
    "country": "Spain",
    "pos": "CM",
    "rating": 84,
    "base": 210,
    "emoji": "🎯"
  },
  {
    "name": "Dani Olmo",
    "country": "Spain",
    "pos": "CAM",
    "rating": 86,
    "base": 270,
    "emoji": "🎯"
  },
  {
    "name": "Brais Mendez",
    "country": "Spain",
    "pos": "CAM",
    "rating": 83,
    "base": 180,
    "emoji": "🎯"
  },
  {
    "name": "Giovani Lo Celso",
    "country": "Argentina",
    "pos": "CM",
    "rating": 83,
    "base": 180,
    "emoji": "🎯"
  },
  {
    "name": "Angelo Stiller",
    "country": "Germany",
    "pos": "CDM",
    "rating": 83,
    "base": 180,
    "emoji": "🎯"
  },
  {
    "name": "Rayan Cherki",
    "country": "France",
    "pos": "CAM",
    "rating": 83,
    "base": 180,
    "emoji": "🎯"
  },
  {
    "name": "Eberechi Eze",
    "country": "England",
    "pos": "CAM",
    "rating": 84,
    "base": 210,
    "emoji": "🎯"
  },
  {
    "name": "Lionel Messi",
    "country": "Argentina",
    "pos": "RW",
    "rating": 90,
    "base": 420,
    "emoji": "⚽"
  },
  {
    "name": "Cristiano Ronaldo",
    "country": "Portugal",
    "pos": "ST",
    "rating": 88,
    "base": 350,
    "emoji": "⚽"
  },
  {
    "name": "Kylian Mbappe",
    "country": "France",
    "pos": "ST",
    "rating": 91,
    "base": 460,
    "emoji": "⚽"
  },
  {
    "name": "Erling Haaland",
    "country": "Norway",
    "pos": "ST",
    "rating": 91,
    "base": 460,
    "emoji": "⚽"
  },
  {
    "name": "Vinicius Junior",
    "country": "Brazil",
    "pos": "LW",
    "rating": 91,
    "base": 460,
    "emoji": "⚽"
  },
  {
    "name": "Mohamed Salah",
    "country": "Egypt",
    "pos": "RW",
    "rating": 89,
    "base": 380,
    "emoji": "⚽"
  },
  {
    "name": "Neymar Jr",
    "country": "Brazil",
    "pos": "LW",
    "rating": 87,
    "base": 310,
    "emoji": "⚽"
  },
  {
    "name": "Harry Kane",
    "country": "England",
    "pos": "ST",
    "rating": 90,
    "base": 420,
    "emoji": "⚽"
  },
  {
    "name": "Lautaro Martinez",
    "country": "Argentina",
    "pos": "ST",
    "rating": 89,
    "base": 380,
    "emoji": "⚽"
  },
  {
    "name": "Victor Osimhen",
    "country": "Nigeria",
    "pos": "ST",
    "rating": 87,
    "base": 310,
    "emoji": "⚽"
  },
  {
    "name": "Bukayo Saka",
    "country": "England",
    "pos": "RW",
    "rating": 88,
    "base": 340,
    "emoji": "⚽"
  },
  {
    "name": "Lamine Yamal",
    "country": "Spain",
    "pos": "RW",
    "rating": 86,
    "base": 280,
    "emoji": "⚽"
  },
  {
    "name": "Rafael Leao",
    "country": "Portugal",
    "pos": "LW",
    "rating": 86,
    "base": 280,
    "emoji": "⚽"
  },
  {
    "name": "Son Heung-min",
    "country": "South Korea",
    "pos": "LW",
    "rating": 87,
    "base": 310,
    "emoji": "⚽"
  },
  {
    "name": "Khvicha Kvaratskhelia",
    "country": "Georgia",
    "pos": "LW",
    "rating": 86,
    "base": 280,
    "emoji": "⚽"
  },
  {
    "name": "Rodrygo",
    "country": "Brazil",
    "pos": "RW",
    "rating": 88,
    "base": 340,
    "emoji": "⚽"
  },
  {
    "name": "Raphinha",
    "country": "Brazil",
    "pos": "RW",
    "rating": 87,
    "base": 310,
    "emoji": "⚽"
  },
  {
    "name": "Julian Alvarez",
    "country": "Argentina",
    "pos": "ST",
    "rating": 87,
    "base": 310,
    "emoji": "⚽"
  },
  {
    "name": "Antoine Griezmann",
    "country": "France",
    "pos": "CF",
    "rating": 88,
    "base": 340,
    "emoji": "⚽"
  },
  {
    "name": "Alexander Isak",
    "country": "Sweden",
    "pos": "ST",
    "rating": 88,
    "base": 340,
    "emoji": "⚽"
  },
  {
    "name": "Viktor Gyokeres",
    "country": "Sweden",
    "pos": "ST",
    "rating": 87,
    "base": 310,
    "emoji": "⚽"
  },
  {
    "name": "Nico Williams",
    "country": "Spain",
    "pos": "LW",
    "rating": 86,
    "base": 280,
    "emoji": "⚽"
  },
  {
    "name": "Luis Diaz",
    "country": "Colombia",
    "pos": "LW",
    "rating": 86,
    "base": 280,
    "emoji": "⚽"
  },
  {
    "name": "Cody Gakpo",
    "country": "Netherlands",
    "pos": "LW",
    "rating": 84,
    "base": 220,
    "emoji": "⚽"
  },
  {
    "name": "Ousmane Dembele",
    "country": "France",
    "pos": "RW",
    "rating": 86,
    "base": 280,
    "emoji": "⚽"
  },
  {
    "name": "Michael Olise",
    "country": "France",
    "pos": "RW",
    "rating": 85,
    "base": 250,
    "emoji": "⚽"
  },
  {
    "name": "Endrick",
    "country": "Brazil",
    "pos": "ST",
    "rating": 84,
    "base": 220,
    "emoji": "⚽"
  },
  {
    "name": "Joao Felix",
    "country": "Portugal",
    "pos": "CF",
    "rating": 84,
    "base": 220,
    "emoji": "⚽"
  },
  {
    "name": "Darwin Nunez",
    "country": "Uruguay",
    "pos": "ST",
    "rating": 84,
    "base": 220,
    "emoji": "⚽"
  },
  {
    "name": "Alvaro Morata",
    "country": "Spain",
    "pos": "ST",
    "rating": 83,
    "base": 190,
    "emoji": "⚽"
  },
  {
    "name": "Marcus Thuram",
    "country": "France",
    "pos": "ST",
    "rating": 84,
    "base": 220,
    "emoji": "⚽"
  },
  {
    "name": "Artem Dovbyk",
    "country": "Ukraine",
    "pos": "ST",
    "rating": 84,
    "base": 220,
    "emoji": "⚽"
  },
  {
    "name": "Mateo Retegui",
    "country": "Italy",
    "pos": "ST",
    "rating": 84,
    "base": 220,
    "emoji": "⚽"
  },
  {
    "name": "Ollie Watkins",
    "country": "England",
    "pos": "ST",
    "rating": 85,
    "base": 250,
    "emoji": "⚽"
  },
  {
    "name": "Marcus Rashford",
    "country": "England",
    "pos": "LW",
    "rating": 85,
    "base": 250,
    "emoji": "⚽"
  },
  {
    "name": "Jadon Sancho",
    "country": "England",
    "pos": "RW",
    "rating": 84,
    "base": 220,
    "emoji": "⚽"
  },
  {
    "name": "Federico Chiesa",
    "country": "Italy",
    "pos": "RW",
    "rating": 84,
    "base": 220,
    "emoji": "⚽"
  },
  {
    "name": "Karim Adeyemi",
    "country": "Germany",
    "pos": "LW",
    "rating": 83,
    "base": 190,
    "emoji": "⚽"
  },
  {
    "name": "Omar Marmoush",
    "country": "Egypt",
    "pos": "ST",
    "rating": 85,
    "base": 250,
    "emoji": "⚽"
  },
  {
    "name": "Christian Pulisic",
    "country": "USA",
    "pos": "RW",
    "rating": 84,
    "base": 220,
    "emoji": "⚽"
  }
];