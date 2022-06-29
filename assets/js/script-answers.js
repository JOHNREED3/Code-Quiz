var timerEl = document.getElementById("countdown");
var highscoreEl = document.getElementById("highscore");

function countdown() {
	// Timer that counts down from 75
	var timeLeft = 75;

	// Use the setInterval() method to call a functin to be exectured every 1000 milliseconds
	var timeInterval = setInterval(function () {
		// timer countdown to zero
		if (timeLeft >= 1) {
			timerEl.textContent = "Time: " + timeLeft;
			timeLeft--;
			console.log(timeLeft);
		} else if (timeLeft === 0) {
			timerEl.textContent = "Time: 0";
			clearInterval(timeInterval);
		}
	}, 1000);
}

countdown();
