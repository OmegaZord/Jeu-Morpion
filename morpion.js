			var currentPlayer = 1;
			var casecoches = 0;

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
					
					alert("Le gagnant est " + determineWinner() + " - Partie terminée");
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
					return case1;
				}
				if(case4 == case5 && case5 == case6)
				{
					return case4;
				}
				if(case7 == case8 && case8 == case9)
				{
					return case7;
				}
				
				if(case1 == case4 && case4 == case7)
				{
					return case1;
				}
				if(case2 == case5 && case5 == case8)
				{
					return case2;
				}
				if(case3 == case6 && case6 == case9)
				{
					return case3;
				}
				
				if(case1 == case5 && case5 == case9)
				{
					return case1;
				}
				if(case3 == case5 && case5 == case7)
				{
					return case3;
				}
			}