var timerEl = document.getElementById("countdown");
var highscoreEl = document.getElementById("highscore");
var questionsEl = document.getElementById("questions");
var submitBtnEl = document.querySelector("#start-quiz");

quizQuestions = [
	{
		question: "Commonly used data types DO NOT include:",
		choices: ["strings", "booleans", "alerts", "numbers"],
		answer: "alerts",
	},
	{
		question:
			"The condition in an if / else statement is enclosed within ____.",
		choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
		answer: "parentheses",
	},
	{
		question: "Arrays in Javascript can be used to store ____.",
		choices: [
			"numbers and strings",
			"other arrays",
			"booleans",
			"all of the above",
		],
		answer: "all of the above",
	},
	{
		question:
			"String values must be enclosed within ____ when being assigned to variables.",
		choices: ["commas", "curly brackets", "quotes", "parenthesis"],
		answer: "quotes",
	},
	{
		question:
			"A very useful tool for used during development and debugging for printing content to the debugger is:",
		choices: ["Javascript", "terminal / bash", "for loops", "console log"],
		answer: "console log",
	},
];

// timer countdown
var countdown = function () {
	timerEl.textContent = time;
	// timer starts at 75
	var time = 75;

	// use interval to countdown clock
	var timeInterval = setInterval(function () {
		if (time >= 1) {
			timerEl.textContent = "Time: " + time;
			time--;
		} else if (time === 0) {
			timerEl.textContent = "Time: 0";
			clearInterval(timeInterval);
		}
	}, 1000);
};

// button activated
var buttonAction = function () {
	countdown();
};
var buttonListenEl = document.addEventListener.submitBtnEl("click", c);
