			var currentPlayer = 1;
			var pseudoJ1 = "X";
			var pseudoJ2 = "O";
			var iaPlayer = false;
			var gameOver = false;
			var tabCase = [
				["case1", false, "a"], 
				["case2", false, "b"], 
				["case3", false, "c"], 
				["case4", false, "d"], 
				["case5", false, "e"], 
				["case6", false, "f"], 
				["case7", false, "g"], 
				["case8", false, "h"], 
				["case9", false, "i"]
			];

			function load()
			{
				var j1Temp = prompt("Entrez votre pseudo (Joueur1): ");
				if(j1Temp != null && j1Temp != "")
				{
					pseudoJ1 = j1Temp;
				}
				
				if(confirm("Souhaitez-vous jouer contre une IA?"))
				{
					iaPlayer = true;
					pseudoJ2 = "IA";
				}
				else
				{
					var j2Temp = prompt("Entrez votre pseudo (Joueur2): ");
					if(j2Temp != null && j2Temp != "")
					{
						pseudoJ2 = j2Temp;
					}
				}
				
				document.getElementById("psj1").innerHTML = pseudoJ1;
				document.getElementById("psj2").innerHTML = pseudoJ2;
				
				//style de départ après chargement
				var selector = document.getElementById("selectStyle");
				selector.value = "styleDefault";
			}
			
			function caseclick(caseid)
			{
				if(gameOver == false)
				{			
					var numeroCase = parseInt(caseid.slice(4, 6)) -1;
					
					if(tabCase[numeroCase][1] == false)
					{
						tabCase[numeroCase][1]= true;
						tabCase[numeroCase][2]= currentPlayer;
						
						if(currentPlayer == 1)
						{
							document.getElementById(caseid).innerHTML = "X";
							currentPlayer = 2;
						}
						else if(currentPlayer == 2)
						{
							document.getElementById(caseid).innerHTML = "O";
							currentPlayer = 1;
						}
					}
					
					var win = checkWinner();
				
					
					if(win != null)
					{
						gameOver = true;
						
						var node = document.createElement("LI");
						var textnode = "";
						
						//win et pseudo inversé parceque la win à lieu dans le tour de l'autre joueur
						if(win == 1)
						{
							textnode = document.createTextNode("Le gagnant est " + pseudoJ2);
							node.appendChild(textnode);
							node.classList.add("list-group-item");
							node.classList.add("list-group-item-danger");
						}
						else if(win == 2)
						{
							textnode = document.createTextNode("Le gagnant est " + pseudoJ1);
							node.appendChild(textnode);
							node.classList.add("list-group-item");
							node.classList.add("list-group-item-success");
						}
					
						document.getElementById("victoires").appendChild(node);
						
						document.getElementById("nmbGame").innerHTML = parseInt(document.getElementById("nmbGame").innerHTML) + 1;
						
						//reset();
					}
					
					if(gameOver == false && win == null && iaPlayer == true && currentPlayer == 2)
					{
						IAChoice();
					}
				}
			}
			
			function checkWinner()
			{
				//Vérifications horizontales
				if(tabCase[0][2] == tabCase[1][2]  && tabCase[1][2] == tabCase[2][2])
				{
					console.log("1");
					
					colorWinGrid(0, 1, 2);
						
					return currentPlayer;
				}
				if(tabCase[3][2] == tabCase[4][2]  && tabCase[4][2] == tabCase[5][2])
				{
					console.log("2");
					
					colorWinGrid(3, 4, 5);
						
					return currentPlayer;
				}
				if(tabCase[6][2] == tabCase[7][2] && tabCase[7][2] == tabCase[8][2])
				{
					console.log("3");
					
					colorWinGrid(6, 7, 8);
						
					return currentPlayer;
				}
				//Vérifications verticales
				if(tabCase[0][2] == tabCase[3][2] && tabCase[3][2] == tabCase[6][2])
				{
					console.log("4");
					
					colorWinGrid(0, 3, 6);
						
					return currentPlayer;
				}
				if(tabCase[1][2] == tabCase[4][2]  && tabCase[4][2] == tabCase[7][2])
				{
					console.log("5");
					
					colorWinGrid(1, 4, 7);
						
					return currentPlayer;
				}
				if(tabCase[2][2] == tabCase[5][2] && tabCase[5][2] == tabCase[8][2])
				{
					console.log("6");
					
					colorWinGrid(2, 5, 8);
						
					return currentPlayer;
				}
				//Vérifications diagonales
				if(tabCase[0][2] == tabCase[4][2] && tabCase[4][2] == tabCase[8][2])
				{
					console.log("7");
					
					colorWinGrid(0, 4, 8);
						
					return currentPlayer;
				}
				if(tabCase[2][2] == tabCase[4][2] && tabCase[4][2] == tabCase[6][2])
				{
					console.log("8");
					
					colorWinGrid(2, 4, 6);
						
					return currentPlayer;
				}
				return null;
			}
			
			function reset()
			{
				//Vider la grille
				var casesGrille = document.getElementsByClassName("caseMorpion");
				
				for(var i =0; i<9; i++)
				{
					casesGrille[i].innerHTML = "";
				}
				
				//Reinitialiser le tableau
				tabCase = [
				["case1", false, "a"], 
				["case2", false, "b"], 
				["case3", false, "c"], 
				["case4", false, "d"], 
				["case5", false, "e"], 
				["case6", false, "f"], 
				["case7", false, "g"], 
				["case8", false, "h"], 
				["case9", false, "i"]
				];
				
				//Le joueur 1 commence
				currentPlayer = 1;
				
				//Revenir au style de départ
				var selector = document.getElementById("selectStyle");
				selector.value = "styleDefault";
				
				changeStyle();
				
				gameOver = false;
			}
			
			function changeStyle()
			{
				var selector = document.getElementById("selectStyle");

				if(selector.options[selector.selectedIndex].value == "styleDefault")
				{
					var casesGrille = document.getElementsByClassName("caseMorpion");
					
					for(var i =0; i<9; i++)
					{
						casesGrille[i].style.background = "white";
						casesGrille[i].style.border = "5px solid black";
						casesGrille[i].style.color = "black";
					}
				}
				else if(selector.options[selector.selectedIndex].value == "styleBleu")
				{
					var casesGrille = document.getElementsByClassName("caseMorpion");
					
					for(var i =0; i<9; i++)
					{
						casesGrille[i].style.background = "blue";
						casesGrille[i].style.border = "5px solid red";
						casesGrille[i].style.color = "white";
					}
				}
				else if(selector.options[selector.selectedIndex].value == "styleRouge")
				{
					var casesGrille = document.getElementsByClassName("caseMorpion");
					
					for(var i =0; i<9; i++)
					{
						casesGrille[i].style.background = "red";
						casesGrille[i].style.border = "5px solid white";
						casesGrille[i].style.color = "black";
					}
				}
				else if(selector.options[selector.selectedIndex].value == "styleVert")
				{
					var casesGrille = document.getElementsByClassName("caseMorpion");
					
					for(var i =0; i<9; i++)
					{
						casesGrille[i].style.background = "green";
						casesGrille[i].style.border = "5px solid yellow";
						casesGrille[i].style.color = "white";
					}
				}
				else if(selector.options[selector.selectedIndex].value == "styleJaune")
				{
					var casesGrille = document.getElementsByClassName("caseMorpion");
					
					for(var i =0; i<9; i++)
					{
						casesGrille[i].style.background = "yellow";
						casesGrille[i].style.border = "5px solid green";
						casesGrille[i].style.color = "black";
					}
				}
			}
			
			function colorWinGrid(case1, case2, case3)
			{
				var casesGrille = document.getElementsByClassName("caseMorpion");
				
				casesGrille[case1].style.background = "Salmon";
				casesGrille[case2].style.background = "Salmon";
				casesGrille[case3].style.background = "Salmon";
			}

			function IAChoice()
			{
				var tabCaseEmpty = [];
				
				for(var i =0; i<9; i++)
				{
					if(tabCase[i][1] == false)
					{
						tabCaseEmpty.push(tabCase[i]);
					}
				}
				
				var testIA = tabCaseEmpty[Math.floor(Math.random() * tabCaseEmpty.length)];
				
				caseclick(testIA[0]);
			}