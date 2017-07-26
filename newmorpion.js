			var currentPlayer = 1;
			var pseudoJ1 = "X";
			var pseudoJ2 = "O";
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
				var j2Temp = prompt("Entrez votre pseudo (Joueur2): ");
				
				if(j1Temp != null && j1Temp != "")
				{
					pseudoJ1 = j1Temp;
				}
				if(j2Temp != null && j2Temp != "")
				{
					pseudoJ2 = j2Temp;
				}
				
				document.getElementById("psj1").innerHTML = pseudoJ1;
				document.getElementById("psj2").innerHTML = pseudoJ2;
				
				//style de départ après chargement
				var selector = document.getElementById("selectStyle");
				selector.value = "styleDefault";
			}
			
			function caseclick(caseid)
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
					var node = document.createElement("LI");
					var textnode = "";
					
					//win et pseudo inversé parceque la win à lieu dans le tour de l'autre joueur
					if(win == 1)
					{
						textnode = document.createTextNode("Le gagnant est " + pseudoJ2);
					}
					else if(win == 2)
					{
						textnode = document.createTextNode("Le gagnant est " + pseudoJ1);
					}
					node.appendChild(textnode);
					document.getElementById("victoires").appendChild(node);
					
					document.getElementById("nmbGame").innerHTML = parseInt(document.getElementById("nmbGame").innerHTML) + 1;
					
					reset();
				}
			}
			
			function checkWinner()
			{
				
				//Vérifications horizontales
				if(tabCase[0][2] == tabCase[1][2]  && tabCase[1][2] == tabCase[2][2])
				{
					console.log("1");
					return currentPlayer;
				}
				if(tabCase[3][2] == tabCase[4][2]  && tabCase[4][2] == tabCase[5][2])
				{
					console.log("2");
					return currentPlayer;
				}
				if(tabCase[6][2] == tabCase[7][2] && tabCase[7][2] == tabCase[8][2])
				{
					console.log("3");
					return currentPlayer;
				}
				//Vérifications verticales
				if(tabCase[0][2] == tabCase[3][2] && tabCase[3][2] == tabCase[6][2])
				{
					console.log(tabCase[0][2] == tabCase[3][2]);
					console.log(tabCase[3][2] == tabCase[6][2]);
					console.log("4");
					return currentPlayer;
				}
				if(tabCase[1][2] == tabCase[4][2]  && tabCase[4][2] == tabCase[7][2])
				{
					console.log("5");
					return currentPlayer;
				}
				if(tabCase[2][2] == tabCase[5][2] && tabCase[5][2] == tabCase[8][2])
				{
					console.log("6");
					return currentPlayer;
				}
				//Vérifications diagonales
				if(tabCase[0][2] == tabCase[4][2] && tabCase[4][2] == tabCase[8][2])
				{
					console.log("7");
					return currentPlayer;
				}
				if(tabCase[2][2] == tabCase[4][2] && tabCase[4][2] == tabCase[6][2])
				{
					console.log("8");
					return currentPlayer;
				}
				return null;
			}
			
			function reset()
			{
				//Vider la grille
				var str = "";
				for(var i =0; i<9; i++)
				{
					str = tabCase[i][0];
					document.getElementById(str).innerHTML = "";
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