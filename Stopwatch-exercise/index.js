var players = [];

/* constructor */
function player(name) {
  this.name = "";
  this.laps = 0;
  this.lastLap = { min: 0, sec: 0, msec: 0 };
  this.bestlap = { min: 0, sec: 0, msec: 0 };
  this.worstlap = { min: 0, sec: 0, msec: 0 };
}
/* end constructor */

/* Create a new player when we click the add button */
function NewPlayer() {
  var name = document.getElementById("player").value;
  console.log(name);
  var Nplayer = new player();
  Nplayer.name = name;

  players.push({
    name: Nplayer.name,
    laps: Nplayer.laps,
    lastlap: {
      min: Nplayer.lastLap.min,
      sec: Nplayer.lastLap.sec,
      msec: Nplayer.lastLap.msec
    },
    bestlap: {
      min: Nplayer.bestlap.min,
      sec: Nplayer.bestlap.sec,
      msec: Nplayer.bestlap.msec
    },
    worstlap: {
      min: Nplayer.worstlap.min,
      sec: Nplayer.worstlap.sec,
      msec: Nplayer.worstlap.msec
    }
  });
  console.log(Nplayer);
  console.log(players);
  listplayers();
}
/* end function*/

/* List all players */
function listplayers() {
  var table = document.getElementById("users");
  table.innerHTML = "<td></td><td></td><td></td><td></td><td></td>";
  for (var i = 0; i < players.length; i++) {
    table.innerHTML +=
      "<tr><td>" +
      players[i].name +
      "</td>" +
      "<td>" +
      players[i].laps +
      "</td>" +
      "<td>" +
      players[i].lastlap.min +
      ":" +
      players[i].lastlap.sec +
      ":" +
      players[i].lastlap.msec +
      "</td>" +
      "<td>" +
      players[i].bestlap.min +
      ":" +
      players[i].bestlap.sec +
      ":" +
      players[i].bestlap.msec +
      "</td>" +
      "<td>" +
      players[i].worstlap.min +
      ":" +
      players[i].worstlap.sec +
      ":" +
      players[i].worstlap.msec +
      "</td></tr>";
  }
}
/* end Listing all players */
