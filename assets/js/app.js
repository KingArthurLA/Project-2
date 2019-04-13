// Global Variables:
var selectedTeamVal;
var selectedTeamText;

$("#leagueSelection").on('change', function () {
  // jQuery
  var selectedVal = $(this).find(':selected').val();
  var selectedText = $(this).find(':selected').text();

  console.log(selectedText)
  console.log(selectedVal)
  if (selectedText === "NFL") {
    $("#teamSelection").empty()
    nfl_teams()
  }
  else if (selectedText === "NHL") {
    $("#teamSelection").empty()
    nhl_teams()
  }
  else if (selectedText === "MLB") {
    $("#teamSelection").empty()
    mlb_teams()
  }
  else if (selectedText === "NBA") {
    $("#teamSelection").empty()
    nba_teams()
  }

})

$("#teamSelection").on('change', function () {
  // jQuery
  selectedTeamVal = $(this).find(':selected').val();
  selectedTeamText = $(this).find(':selected').text();

  console.log(selectedTeamText)
  console.log(selectedTeamVal)

})


function getGameData() {
  // var year = document.getElementById("year").value;
  // var game = document.getElementById("game").value;
  var url = "https://api.mysportsfeeds.com/v1.0/pull/" + game + "/" + year + "/full_game_schedule.json"
  $.ajax
    ({
      type: "GET",
      url: "https://api.mysportsfeeds.com/v1.0/pull/nhl/2017-2018-regular/full_game_schedule.json",
      dataType: 'json',
      async: false,
      headers: {

        "Authorization": "Basic " + btoa("b69e1225-b643-44e2-be88-eb221b" + ":" + "ucla19")
      },
      success: function (data) {
        var datatab = document.getElementById("data")
        datatab.innerHTML = JSON.stringify(data);
      }
    });

}

function callSportsFunction(data) {
  if (data == "NFL")
    nflDailyUpdate();
  else if (data == "NBA")
    nbaDailyUpdate();
  else if (data == "MLB")
    mlbDailyUpdate();
  else if (data == "NHL")
    nhlDailyUpdate();
}

function nhlDailyUpdate() {
  // var year = document.getElementById("year").value;
  // var game = document.getElementById("game").value;
  // var url = "https://api.mysportsfeeds.com/v1.0/pull/" + game + "/" + year + "/full_game_schedule.json"
  $.ajax
    ({
      type: "GET",
      url: "https://api.mysportsfeeds.com/v1.0/pull/nhl/2018-2019-regular/daily_game_schedule.json?fordate=20190404",
      dataType: 'json',
      async: false,
      headers: {

        "Authorization": "Basic " + btoa("b69e1225-b643-44e2-be88-eb221b" + ":" + "ucla19")
      },
      success: function (data) {
        var datatab = document.getElementById("data")
        datatab.innerHTML = JSON.stringify(data);
      }
    });

}

function nflDailyUpdate() {
  // var year = document.getElementById("year").value;
  // var game = document.getElementById("game").value;
  // var url = "https://api.mysportsfeeds.com/v1.0/pull/" + game + "/" + year + "/full_game_schedule.json"
  $.ajax
    ({
      type: "GET",
      url: "https://api.mysportsfeeds.com/v1.0/pull/nfl/2019-playoff/daily_game_schedule.json?fordate=20190112",
      dataType: 'json',
      async: false,
      headers: {

        "Authorization": "Basic " + btoa("b69e1225-b643-44e2-be88-eb221b" + ":" + "ucla19")
      },
      success: function (data) {
        var datatab = document.getElementById("data")
        datatab.innerHTML = JSON.stringify(data);
      }
    });
}

function nbaDailyUpdate() {
  // var year = document.getElementById("year").value;
  // var game = document.getElementById("game").value;
  // var url = "https://api.mysportsfeeds.com/v1.0/pull/" + game + "/" + year + "/full_game_schedule.json"
  $.ajax
    ({
      type: "GET",
      url: "https://api.mysportsfeeds.com/v1.0/pull/nba/2018-2019-regular/daily_game_schedule.json?fordate=20181229",
      dataType: 'json',
      async: false,
      headers: {

        "Authorization": "Basic " + btoa("b69e1225-b643-44e2-be88-eb221b" + ":" + "ucla19")
      },
      success: function (data) {
        var datatab = document.getElementById("data")
        datatab.innerHTML = JSON.stringify(data);
      }
    });
}

function mlbDailyUpdate() {
  // var year = document.getElementById("year").value;
  // var game = document.getElementById("game").value;
  // var url = "https://api.mysportsfeeds.com/v1.0/pull/" + game + "/" + year + "/full_game_schedule.json"
  $.ajax
    ({
      type: "GET",
      url: "https://api.mysportsfeeds.com/v1.0/pull/mlb/2019-regular/daily_game_schedule.json?fordate=20181110",
      dataType: 'json',
      async: false,
      headers: {

        "Authorization": "Basic " + btoa("b69e1225-b643-44e2-be88-eb221b" + ":" + "ucla19")
      },
      success: function (data) {
        var datatab = document.getElementById("data")
        datatab.innerHTML = JSON.stringify(data);
      }
    });
}


function test() {
  // var year = document.getElementById("year").value;
  // var game = document.getElementById("game").value;
  // var url = "https://api.mysportsfeeds.com/v1.0/pull/"+game+"/"+year+"/overall_team_standings.json?team=bucks"
  $.ajax
    ({
      type: "GET",
      url: "https://api.mysportsfeeds.com/v1.0/pull/nba/2018-2019-regular/overall_team_standings.json",
      dataType: 'json',
      async: false,
      headers: {

        "Authorization": "Basic " + btoa("b69e1225-b643-44e2-be88-eb221b" + ":" + "ucla19")
      },
      success: function (data) {
        var datatab = document.getElementById("data")

        console.log(data);

        for (var i = 0; i < data.overallteamstandings.teamstandingsentry.length; i++) {
          var team = document.createElement("p")
          // var team = $("<p></p>")
          var name = data.overallteamstandings.teamstandingsentry[i].team.Name;
          // team.text(data.overallteamstandings.teamstandingsentry[i].team.Name)
          team.innerHTML = name;
          console.log(team);
          datatab.append(team);
          // datatab.innerHTML = JSON.stringify(data.overallteamstandings.teamstandingsentry[i].team.Name);

        }



        // datatab.innerHTML = JSON.stringify(data.overallteamstandings.teamstandingsentry[0].team.Name);

      }
    });
}

function nba_teams() {

  $.ajax
    ({
      type: "GET",
      url: "https://api.mysportsfeeds.com/v1.0/pull/nba/2018-2019-regular/overall_team_standings.json",
      dataType: 'json',
      async: false,
      headers: {

        "Authorization": "Basic " + btoa("b69e1225-b643-44e2-be88-eb221b" + ":" + "ucla19")
      },
      success: function (data) {
        var datatab = document.getElementById("data")

        console.log(data);

        for (var i = 0; i < data.overallteamstandings.teamstandingsentry.length; i++) {
          var team = document.createElement("option")
          // var team = $("<option></option>")
          var name = data.overallteamstandings.teamstandingsentry[i].team.Name;
          // team.text(data.overallteamstandings.teamstandingsentry[i].team.Name)
          team.innerHTML = name;
          console.log(team);
          $("#teamSelection").append(team);
          // datatab.innerHTML = JSON.stringify(data.overallteamstandings.teamstandingsentry[i].team.Name);

        }



        // datatab.innerHTML = JSON.stringify(data.overallteamstandings.teamstandingsentry[0].team.Name);

      }
    });
}


function nhl_teams() {

  $.ajax
    ({
      type: "GET",
      url: "https://api.mysportsfeeds.com/v1.0/pull/nhl/2018-2019-regular/overall_team_standings.json",
      dataType: 'json',
      async: false,
      headers: {

        "Authorization": "Basic " + btoa("b69e1225-b643-44e2-be88-eb221b" + ":" + "ucla19")
      },
      success: function (data) {
        var datatab = document.getElementById("data")

        console.log(data);

        for (var i = 0; i < data.overallteamstandings.teamstandingsentry.length; i++) {
          var team = document.createElement("option")
          // var team = $("<option></option>")
          var name = data.overallteamstandings.teamstandingsentry[i].team.Name;
          // team.text(data.overallteamstandings.teamstandingsentry[i].team.Name)
          team.innerHTML = name;
          console.log(team);
          $("#teamSelection").append(team);
          // datatab.innerHTML = JSON.stringify(data.overallteamstandings.teamstandingsentry[i].team.Name);

        }



        // datatab.innerHTML = JSON.stringify(data.overallteamstandings.teamstandingsentry[0].team.Name);

      }
    });
}

function mlb_teams() {

  $.ajax
    ({
      type: "GET",
      url: "https://api.mysportsfeeds.com/v1.0/pull/mlb/2019-regular/overall_team_standings.json",
      dataType: 'json',
      async: false,
      headers: {

        "Authorization": "Basic " + btoa("b69e1225-b643-44e2-be88-eb221b" + ":" + "ucla19")
      },
      success: function (data) {
        var datatab = document.getElementById("data")

        console.log(data);

        for (var i = 0; i < data.overallteamstandings.teamstandingsentry.length; i++) {
          var team = document.createElement("p")
          // var team = $("<p></p>")
          var name = data.overallteamstandings.teamstandingsentry[i].team.Name;
          // team.text(data.overallteamstandings.teamstandingsentry[i].team.Name)
          team.innerHTML = name;
          console.log(team);
          datatab.append(team);
          // datatab.innerHTML = JSON.stringify(data.overallteamstandings.teamstandingsentry[i].team.Name);

        }



        // datatab.innerHTML = JSON.stringify(data.overallteamstandings.teamstandingsentry[0].team.Name);

      }
    });
}




// curl -X "GET" "https://api.mysportsfeeds.com/v1.0/pull/nhl/2018-2019-regular/daily_game_schedule.json?fordate=20190404" -u "b69e1225-b643-44e2-be88-eb221b:ucla19" --compress


// function nhlDailyUpdate() {
//     //

//     $.ajax
// ({
//   type: "GET",
//   url: "https://api.mysportsfeeds.com/v1.0/pull/nhl/2018-2019-regular/daily_game_schedule.json?fordate=20190404,
//   dataType: 'json',
//   async: false,
//   headers: {

//     "Authorization": "Basic " + btoa("b69e1225-b643-44e2-be88-eb221b"+":"+ "ucla19")
//   },
//   success: function (data){
//     alert(data.fullgameschedule.lastUpdatedOn); 
//   }
// });}


function nfl_teams() {

  $.ajax
    ({
      type: "GET",
      url: "https://api.mysportsfeeds.com/v1.0/pull/nfl/2018-regular/overall_team_standings.json",
      dataType: 'json',
      async: false,
      headers: {

        "Authorization": "Basic " + btoa("b69e1225-b643-44e2-be88-eb221b" + ":" + "ucla19")
      },
      success: function (data) {
        var datatab = document.getElementById("data")

        console.log(data);

        for (var i = 0; i < data.overallteamstandings.teamstandingsentry.length; i++) {
          var team = document.createElement("option")
          // var team = $("<option></option>")
          var name = data.overallteamstandings.teamstandingsentry[i].team.Name;
          // team.text(data.overallteamstandings.teamstandingsentry[i].team.Name)
          team.innerHTML = name;
          console.log(team);
          $("#teamSelection").append(team);
          // datatab.innerHTML = JSON.stringify(data.overallteamstandings.teamstandingsentry[i].team.Name);

        }



        // datatab.innerHTML = JSON.stringify(data.overallteamstandings.teamstandingsentry[0].team.Name);

      }
    });
}

function mlb_teams() {

  $.ajax
    ({
      type: "GET",
      url: "https://api.mysportsfeeds.com/v1.0/pull/mlb/2019-regular/overall_team_standings.json",
      dataType: 'json',
      async: false,
      headers: {

        "Authorization": "Basic " + btoa("b69e1225-b643-44e2-be88-eb221b" + ":" + "ucla19")
      },
      success: function (data) {
        var datatab = document.getElementById("data")

        console.log(data);

        for (var i = 0; i < data.overallteamstandings.teamstandingsentry.length; i++) {
          var team = document.createElement("option")
          // var team = $("<option></option>")
          var name = data.overallteamstandings.teamstandingsentry[i].team.Name;
          // team.text(data.overallteamstandings.teamstandingsentry[i].team.Name)
          team.innerHTML = name;
          console.log(team);
          $("#teamSelection").append(team);
          // datatab.innerHTML = JSON.stringify(data.overallteamstandings.teamstandingsentry[i].team.Name);

        }



        // datatab.innerHTML = JSON.stringify(data.overallteamstandings.teamstandingsentry[0].team.Name);

      }
    });
}

$("#sportSelection").submit(function () {
  if (selectedTeamText === "Oilers") {
    window.open('https://www.nhl.com/oilers', "_target");
  }
})


