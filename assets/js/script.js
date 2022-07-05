var timerEl = document.getElementById("countdown");
var highscoreEl = document.getElementById("highscore");
var questionsEl = document.getElementById("questions");
var submitbtnEl = document.querySelector("#start-quiz");

quizQuestions = [
	{
		title: "Commonly used data types DO NOT include:",
		choices: ["strings", "booleans", "alerts", "numbers"],
		answer: "alerts",
	},
	{
		title: "The condition in an if / else statement is enclosed within ____.",
		choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
		answer: "parentheses",
	},
	{
		title: "Arrays in Javascript can be used to store ____.",
		choices: [
			"numbers and strings",
			"other arrays",
			"booleans",
			"all of the above",
		],
		answer: "all of the above",
	},
	{
		title:
			"String values must be enclosed within ____ when being assigned to variables.",
		choices: ["commas", "curly brackets", "quotes", "parenthesis"],
		answer: "quotes",
	},
	{
		title:
			"A very useful tool for used during development and debugging for printing content to the debugger is:",
		choices: ["Javascript", "terminal / bash", "for loops", "console log"],
		answer: "console log",
	},
];

// event listener for click on start quiz button
submitbtnEl.addEventListener("click", function () {
	location.href = "./questions.html";
});

function countdown() {
	// Timer that counts down from 75
	var timeLeft = 75;

	// Use the setInterval() method to call a function to be exectured every 1000 milliseconds
	var timeInterval = setInterval(function () {
		// timer countdown to zero
		if (timeLeft >= 1) {
			timerEl.textContent = "Time: " + timeLeft;
			timeLeft--;
		} else if (timeLeft === 0) {
			timerEl.textContent = "Time: 0";
			clearInterval(timeInterval);
		}
	}, 1000);

	// Display questions and answers
	var runQuestions = function () {
		for (var i = 0; i < quizQuestions.length; ++i) {
			questionsEl.textContent = quizQuestions.title[i];
		}
	};
	runQuestions();
}

countdown();
