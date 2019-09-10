/* VARIABLES */
var raceStart = false;
var players = [];
var stopwatches = [];
var Interval;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var miliseconds = document.getElementById("miliseconds");
var table = document.getElementById("users");
var m = 0;
var s = 0;
var ms = 0;

/* --------------------------------------------------------------------------------------
    CONSTRUCTORS
-------------------------------------------------------------------------------------- */
/* constructor for new player */
function player(name) {
  this.name = "";
  this.laps = 0;
  this.lastLap = { min: 0, sec: 0, msec: 0 };
  this.bestlap = { min: 0, sec: 0, msec: 0 };
  this.worstlap = { min: 0, sec: 0, msec: 0 };
}
/* end constructor */

/* constructor for new stopwatch */
function stopwatch() {
  this.min = 0;
  this.sec = 0;
  this.msec = 0;
}
/* end constructor */

/* --------------------------------------------------------------------------------------
    FUNCTIONS - players
-------------------------------------------------------------------------------------- */
/* Create a new player when we click the add button */
function NewPlayer() {
  var name = document.getElementById("player").value;
  console.log(name);
  var Nplayer = new player();
  var watch = new stopwatch();

  Nplayer.name = name;

  /* Push all the arrays */
  stopwatches.push({ min: watch.min, sec: watch.sec, msec: watch.msec });

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
  /* end Push  */
  listplayers();
}
/* end function*/

/* List all players */
function listplayers() {
  table.innerHTML = "<td></td><td></td><td></td><td></td><td></td>";
  for (var i = 0; i < players.length; i++) {
    table.innerHTML +=
      "<tr><td><button class='btn btn-warning' onClick='getTimes(" +
      i +
      ")'> " +
      players[i].name +
      "</button></td>" +
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

/* --------------------------------------------------------------------------------------
    FUNCTIONS - Timers
-------------------------------------------------------------------------------------- */
/*  Function where the clock is ticking. */
function timer() {
  ms++;
  if (ms > 99) {
    ms = 0;
    s++;
    if (s > 59) {
      s = 0;
      m++;
    }
  }
  /* Show in template */
  if (m <= 9) {
    minutes.innerHTML = "0" + m;
  } else {
    minutes.innerHTML = m;
  }

  if (s <= 9) {
    seconds.innerHTML = "0" + s;
  } else {
    seconds.innerHTML = s;
  }

  if (ms <= 9) {
    miliseconds.innerHTML = "0" + ms;
  } else {
    miliseconds.innerHTML = ms;
  }
  /* end show */
  /* adding time to array */
  stopwatches.forEach(function(element) {
    element.msec++;
    if (element.msec > 99) {
      element.msec = 0;
      element.sec += 1;
      if (element.sec > 59) {
        element.sec = 0;
        element.min += 1;
      }
    }
  });
} /* end function */

/* Get times of a player */
function getTimes(player) {
  console.log("stopwatch: ", stopwatches[player]);
  /* add time to the player */
  players[player].lastlap.min = stopwatches[player].min;
  players[player].lastlap.sec = stopwatches[player].sec;
  players[player].lastlap.msec = stopwatches[player].msec;
  /* reseting the stopwatch of that player */
  stopwatches[player].min = 0;
  stopwatches[player].sec = 0;
  stopwatches[player].msec = 0;
  console.log(players[player]);
  getLap(player);
} /* end function */

/*  get number of laps */
function getLap(player) {
  players[player].laps++;
  getBestLap(player);
  getWorstLap(player);
  showResults();
} /* end function */

/* Get the best lap time */
function getBestLap(player) {
  if (players[player].laps == 1) {
    players[player].bestlap.min = players[player].lastlap.min;
    players[player].bestlap.sec = players[player].lastlap.sec;
    players[player].bestlap.msec = players[player].lastlap.msec;
  } else {
    if (players[player].bestlap.min > players[player].lastlap.min) {
      players[player].bestlap.min = players[player].lastlap.min;
      players[player].bestlap.sec = players[player].lastlap.sec;
      players[player].bestlap.msec = players[player].lastlap.msec;
    } else if (players[player].bestlap.min == players[player].lastlap.min) {
      if (players[player].bestlap.sec > players[player].lastlap.sec) {
        players[player].bestlap.sec = players[player].lastlap.sec;
        players[player].bestlap.msec = players[player].lastlap.msec;
      } else if (players[player].bestlap.sec == players[player].lastlap.sec) {
        if (players[player].bestlap.msec > players[player].lastlap.msec) {
          players[player].bestlap.msec = players[player].lastlap.msec;
        }
      }
    }
  }
  console.log(players[player].bestlap);
} /* end function */

/* get worst lap time */
function getWorstLap(player) {
  if (players[player].laps == 1) {
    players[player].worstlap.min = players[player].lastlap.min;
    players[player].worstlap.sec = players[player].lastlap.sec;
    players[player].worstlap.msec = players[player].lastlap.msec;
  } else {
    if (players[player].worstlap.min < players[player].lastlap.min) {
      players[player].worstlap.min = players[player].lastlap.min;
      players[player].worstlap.sec = players[player].lastlap.sec;
      players[player].worstlap.msec = players[player].lastlap.msec;
    } else if (players[player].worstlap.min == players[player].lastlap.min) {
      if (players[player].worstlap.sec < players[player].lastlap.sec) {
        players[player].worstlap.sec = players[player].lastlap.sec;
        players[player].worstlap.msec = players[player].lastlap.msec;
      } else if (players[player].worstlap.sec == players[player].lastlap.sec) {
        if (players[player].worstlap.msec < players[player].lastlap.msec) {
          players[player].worstlap.msec = players[player].lastlap.msec;
        }
      }
    }
  }
  console.log(players[player].worstlap);
} /* end function */
/* --------------------------------------------------------------------------------------
    FUNCTIONS - Show Results
-------------------------------------------------------------------------------------- */
function showResults() {
  for (var i = 0; i < players.length; i++) {
    if (i == 0) {
      table.innerHTML =
        "<tr><td><button class='btn btn-warning' onClick='getTimes(" +
        i +
        ")'> " +
        players[i].name +
        "</button></td>" +
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
    } else {
      table.innerHTML +=
        "<tr><td><button class='btn btn-warning' onClick='getTimes(" +
        i +
        ")'> " +
        players[i].name +
        "</button></td>" +
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
}

/* --------------------------------------------------------------------------------------
    FUNCTIONS - Start/End
-------------------------------------------------------------------------------------- */
function start() {
  var timers = [players.length];
  if (players.length == 0) {
    alert("plase create players");
  } else {
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    miliseconds.innerHTML = "00";
    ms = 0;
    s = 0;
    m = 0;
    raceStart = true;
    clearInterval(Interval);
    Interval = setInterval(timer, 10);
  }
}

function end() {
  if (raceStart) {
    clearInterval(Interval);
  } else {
    alert("The race haven't start");
  }
}
