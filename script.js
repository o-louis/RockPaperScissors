var Constants = {
	status: {
		TIE: "TIE",
		WIN: "WIN",
		LOST: "LOST"
	},
	action: {
		ROCK: "Rock",
		PAPER: "Paper",
		SCISSORS: "Scissors"
	}
};


function getRandomChoice(buttons) {
	var random = Math.floor(Math.random() * buttons.length);
	return buttons[random].innerHTML;
}

function checkWinner(player, computer) {
	var container = document.getElementsByTagName('h3')[0];
	var result;

	if (player === computer) {
		result = Constants.status.TIE;
	} else if ((player === Constants.action.ROCK && computer === Constants.action.SCISSORS) || 
				(player === Constants.action.PAPER && computer === Constants.action.ROCK) ||
				(player === Constants.action.SCISSORS && computer === Constants.action.PAPER)) {
		result = Constants.status.WIN;
	} else {
		result = Constants.status.LOST;
	}

	container.innerHTML = result;
}

function displayAction(player, computer)  {
	document.getElementById('player').innerHTML = player.toUpperCase();
	document.getElementById('computer').innerHTML = computer.toUpperCase();
}

window.onload = function() {
	var buttons = document.getElementsByTagName('button');

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function() {
			var player = this.innerHTML;
			var computer = getRandomChoice(buttons);

			checkWinner(player, computer);
			displayAction(player, computer);
		});
	}
};