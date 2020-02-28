/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];


	function viewStudentStats(id, toggle){	
		if(toggle == '1'){
			document.getElementById(id).style.visibility = "visible";
			document.getElementById(id).style.height = "auto";
				}
		else if(toggle == '0'){
			document.getElementById(id).style.visibility = "hidden";
			document.getElementById(id).style.height = "0px";
		}
	}	

	function changeColor(color){
	document.body.style.backgroundColor = color;
	}
	function loadStatsPage(){
		var table = document.getElementById("stats_table");
		var home_value;
		var away_value;
		var row_counter;
		var wins = 0;
		var loses = 0;
		for(row_counter = 2; row_counter < table.rows.length; row_counter++){
			home_value = table.rows[row_counter].cells[2].innerHTML;
			away_value = table.rows[row_counter].cells[3].innerHTML;
			home_value = parseInt(home_value);
			away_value = parseInt(away_value);
			if(home_value > away_value){
				table.rows[row_counter].cells[4].innerHTML = 'CU Boulder';	
				wins++;
			}
			else{
				table.rows[row_counter].cells[4].innerHTML = table.rows[row_counter].cells[1].innerHTML;		
				loses++;
			}
		document.getElementById("wins").innerHTML = wins;
		document.getElementById("losses").innerHTML = loses;
		}
	}

		function loadPlayersPage(){
			var list = document.getElementById("player_selector")
			for(let i = 0; i < players.length; i++){
				var a = document.createElement("a");
				var text = document.createTextNode("" + players[i].name);
				a.appendChild(text);
				a.title = "" + players[i].name;
				a.href = "#";
				a.onclick = function(){switchPlayers(i)};
				list.appendChild(a);
			}
			console.log(list)
		}
		function switchPlayers(playerNum){
			let player = players[playerNum];
			document.getElementById("p_year").innerHTML = player.year
			document.getElementById("p_major").innerHTML = player.major
			document.getElementById("g_played").innerHTML = player.games_played
			document.getElementById("player_img").innerHTML = player.img
			document.getElementById("p_yards").innerHTML = player.pass_yards
			document.getElementById("r_yards").innerHTML = player.rushing_yards
			document.getElementById("rec_yards").innerHTML = player.receiving_yards
			document.getElementById("avg_p_yards").innerHTML = (player.pass_yards / player.games_played)
			document.getElementById("avg_r_yards").innerHTML = (player.rushing_yards / player.games_played)
			document.getElementById("avg_rec_yards").innerHTML = (player.receiving_yards / player.games_played)
		}
