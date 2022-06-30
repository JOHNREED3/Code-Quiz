var timerEl = document.getElementById("countdown");
var highscoreEl = document.getElementById("highscore");
var questionsEl = document.querySelector("questions");

function countdown() {
	// Timer that counts down from 75
	var timeLeft = 75;

	// Use the setInterval() method to call a function to be exectured every 1000 milliseconds
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

	// Display questions and answers
	var runQuestions = function () {
		for (var i = 0; i < quizQuestions.length; ++i) {
			questionsEl.textContent("Bird");
		}
	};
	runQuestions();
}

quizQuestions = [
	"Commonly used data types DO NOT include:",
	"The condition in an if / else statement is enclosed with ______.",
	"Arrays in JavaScript can be used to store _______.",
	"String values must be enclosed within ______ when being assigned to variables.",
	"A very useful tool used during development and debugging for printing content to the debugger is: ",
];

countdown();
