$(document).ready( function() {
	var playerWins = 0;
	var playerLosses = 0;

	var computerNumber = 0;
	var playerScore = 0;

	var redCrystalNumber = 0;
	var blueCrystalNumber = 0;
	var yellowCrystalNumber = 0;
	var greenCrystalNumber = 0;

	/*create function to generate number between a high number and a low number*/
	function numberGen(lowestNumber, highestNumber) {
		var low = lowestNumber;
		var high = highestNumber;

		var randomNumber = Math.floor(Math.random() * (high - low)) + low;

		return randomNumber;
	}

	/*create a function to reset all generated numbers - except user score and wins and losses*/

	function newNumbers() {
		/*Generate new numbers*/
		computerNumber = numberGen(19, 120);

		redCrystalNumber = numberGen(1, 12);
		blueCrystalNumber = numberGen(1, 12);
		yellowCrystalNumber = numberGen(1, 12);
		greenCrystalNumber = numberGen(1, 12);

		playerScore = 0;

		/*Update numbers on html*/
		$("#computerNumberContainer > h2").html(computerNumber);
		$("#playerScoreContainer > h2").html(playerScore);
	}

	/*create a function to create a new game - resets everything*/
	function newGame() {
		/*Generate new numbers*/
		playerWins = 0;
		playerLosses = 0;

		newNumbers();

		/*Update numbers on html*/
		$("#wins").html(playerWins);
		$("#losses").html(playerLosses);
	}
	
	/*create a function which creates a new round - resets everything except wins and losses*/
	function newRound() {
		newNumbers();
	}

	/*create function to check if round has been won or lost*/
	function winLossCheck() {
		if (playerScore == computerNumber) {
			playerWins++;
			newRound();

			$("#outcomeMessage").html("You won!");
			$("#wins").html(playerWins);
		} else if (playerScore > computerNumber) {
			playerLosses++;
			newRound();

			$("#outcomeMessage").html("You lost!");
			$("#losses").html(playerLosses);
		} else {
			$("#outcomeMessage").html("");
		}


	}

	/*Creates new game on load*/
	newGame();

	/*Add jewel numbers to player score when clicked*/
	$("#redCrystalContainer").click(function(event) {
		playerScore += redCrystalNumber;
		$("#playerScoreContainer > h2").html(playerScore);

		winLossCheck();
	});
	$("#blueCrystalContainer").click(function(event) {
		playerScore += blueCrystalNumber;
		$("#playerScoreContainer > h2").html(playerScore);

		winLossCheck();
	});
	$("#yellowCrystalContainer").click(function(event) {
		playerScore += yellowCrystalNumber;
		$("#playerScoreContainer > h2").html(playerScore);

		winLossCheck();
	});
	$("#greenCrystalContainer").click(function(event) {
		playerScore += greenCrystalNumber;
		$("#playerScoreContainer > h2").html(playerScore);

		winLossCheck();
	});
});