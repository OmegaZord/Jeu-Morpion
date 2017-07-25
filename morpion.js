			var currentPlayer = 1;
			var casecoches = 0;
			var pseudoJ1 = "X";
			var pseudoJ2 = "O";

			function load()
			{
				var j1Temp = prompt("Entrez votre pseudo (Joueur1): ");
				var j2Temp = prompt("Entrez votre pseudo (Joueur2): ");
				
				if(j1Temp != null)
				{
					pseudoJ1 = j1Temp;
				}
				if(j2Temp != null)
				{
					pseudoJ2 = j2Temp;
				}
				
				document.getElementById("psj1").innerHTML = pseudoJ1;
				document.getElementById("psj2").innerHTML = pseudoJ2;
			}
			
			function caseclick(caseid)
			{
				if(document.getElementById(caseid).innerHTML == "")
				{
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
					casecoches ++;
				}
				
				if(casecoches == 9)
				{
					var node = document.createElement("LI");
					var winner = "";
					
					if(determineWinner() == "X")
					{
						winner = pseudoJ1;
					}
					else if(determineWinner() == "O")
					{
						winner = pseudoJ2;
					}
					else
					{
						winner = "Personne";
					}
					var textnode = document.createTextNode("Le gagnant est " + winner);
					node.appendChild(textnode);
					document.getElementById("victoires").appendChild(node);
					
					document.getElementById("nmbGame").innerHTML = parseInt(document.getElementById("nmbGame").innerHTML) + 1;
				}
			}
			
			function determineWinner()
			{
				var case1 = document.getElementById("case1").innerHTML;
				var case2 = document.getElementById("case2").innerHTML;
				var case3 = document.getElementById("case3").innerHTML;
				var case4 = document.getElementById("case4").innerHTML;
				var case5 = document.getElementById("case5").innerHTML;
				var case6 = document.getElementById("case6").innerHTML;
				var case7 = document.getElementById("case7").innerHTML;
				var case8 = document.getElementById("case8").innerHTML;
				var case9 = document.getElementById("case9").innerHTML;
				
				if(case1 == case2 && case2 == case3)
				{
					document.getElementById("lignehaut").style.visibility = "visible";
					return case1;
				}
				else if(case4 == case5 && case5 == case6)
				{
					return case4;
				}
				else if(case7 == case8 && case8 == case9)
				{
					return case7;
				}
				
				else if(case1 == case4 && case4 == case7)
				{
					document.getElementById("lignegauche").style.visibility = "visible";
					return case1;
				}
				else if(case2 == case5 && case5 == case8)
				{
					return case2;
				}
				else if(case3 == case6 && case6 == case9)
				{
					return case3;
				}
				
				else if(case1 == case5 && case5 == case9)
				{
					return case1;
				}
				else if(case3 == case5 && case5 == case7)
				{
					return case3;
				}
				else 
				{
					return "Personne";
				}
			}
			
			function reset()
			{
				document.getElementById("case1").innerHTML = "";
				document.getElementById("case2").innerHTML = "";
				document.getElementById("case3").innerHTML = "";
				document.getElementById("case4").innerHTML = "";
				document.getElementById("case5").innerHTML = "";
				document.getElementById("case6").innerHTML = "";
				document.getElementById("case7").innerHTML = "";
				document.getElementById("case8").innerHTML = "";
				document.getElementById("case9").innerHTML = "";
				
				casecoches = 0;
				currentPlayer = 1;
				document.getElementById("lignehaut").style.visibility = "hidden";
				document.getElementById("lignegauche").style.visibility = "hidden";
			}
			
			function changeStyle()
			{
				var selector = document.getElementById("selectStyle");
				
				if(selector.options[selector.selectedIndex].value == "styleRouge")
				{
					document.getElementById("case1").style.background= "red";
					document.getElementById("case2").style.background= "red";
					document.getElementById("case3").style.background= "red";
					document.getElementById("case4").style.background= "red";
					document.getElementById("case5").style.background= "red";
					document.getElementById("case6").style.background= "red";
					document.getElementById("case7").style.background= "red";
					document.getElementById("case8").style.background= "red";
					document.getElementById("case9").style.background= "red";
				}
			}