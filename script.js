const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Mumbai Indians",
  sport: "cricket",
  year: 2008,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Mark Boucher",
    matches: 7,
  },
  players: [
    {
      name: "Rohit Sharma",
      position: "Batter",
      number: 1,
      isCaptain: false,
      nickname: "Hitman",
    },
    {
      name: "Dewald Brevis",
      position: "Batter",
      number: 2,
      isCaptain: false,
      nickname: "AB, baby" ,
    },
     {
      name: "Surya kuymar Yadav",
      position: "Batter",
      number: 3,
      isCaptain: false,
      nickname: "Mr. 360",
    },
    {
      name: "Ishan Kisan",
      position: "Wicketkeeper , Batter",
      number: 4,
      isCaptain: false,
      nickname: "Pocket Dynamo",
    },
    {
      name: "Hardik Desai",
      position: "Wicketkeeper, Batter",
      number: 5,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "N. Tilak Varma",
      position: "Batter",
      number: 6,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Tim David",
      position: "Batter",
      number: 7,
      isCaptain: false,
      nickname: "Davy",
    },
    {
      name: "Vishnu Vinod",
      position: "Wicketkeeper, Batter",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Hardik Pandya",
      position: "All rounder",
      number: 9,
      isCaptain: true,
      nickname: "Kung fu Pandya",
    },
    {
      name: "Arjun Tendulkar",
      position: "All-rounder",
      number: 10,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Mohammad Navi",
      position: "All-rounder",
      number: 11,
      isCaptain: false,
      nickname: "Mr. President",
    },
    {
      name: "Romario Shepherd",
      position: "All-rounder",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Shams Mulani",
      position: "All-rounder",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Nehal Wadhera",
      position: "All-rounder",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Gerald Coetzee",
      position: "All-rounder",
      number: 15,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Anshul Kamboj",
      position: "All-rounder",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Naman Dhir",
      position: "All-rounder",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Shivalik Sharma",
      position: "All-rounder",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Kwena Maphaka",
      position: "Bowler",
      number: 19,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Jasprit Bumrah",
      position: "Bowler",
      number: 20,
      isCaptain: false,
      nickname: "Jassi",
    },
    {
      name: "Piyush Chawla",
      position: "Bowler",
      number: 21,
      isCaptain: false,
      nickname: "Paras",
    },
    {
      name: "Kumar Kartikeya Singh",
      position: "Bowler",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Luke Wood",
      position: "Bowler",
      number: 23,
      isCaptain: false,
      nickname: null,
    }
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) =>
        `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "Batter":
      setPlayerCards(players.filter((player) => player.position === "Batter"));
      break;
    case "Wicketkeeper, Batter":
      setPlayerCards(
        players.filter((player) => player.position === "Wicketkeeper, Batter")
      );
      break;
    case "All-rounder":
      setPlayerCards(
        players.filter((player) => player.position === "All-rounder")
      );
      break;
    case "Bowler":
      setPlayerCards(
        players.filter((player) => player.position === "Bowler")
      );
      break;

default:
setPlayerCards();

  }
});
