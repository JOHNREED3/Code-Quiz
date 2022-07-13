// Declared variables
var timerEl = document.getElementById("countdown");
var highscoreEl = document.getElementById("highscore");
var questionsEl = document.getElementById("questions");
var submitBtnEl = document.querySelector("#start-quiz");

var questionNumber = 0;
var penalty = 10;

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

	askQuestions(questionNumber);
};

// button activated
submitBtnEl.addEventListener("click", countdown);

// display questions

var askQuestions = function (questionNumber) {
	//Clear existing data
	questions.innerHTML = "";

	// for loop to display questions
	for (var i = 0; i < quizQuestions.length; i++) {
		var userQuestionEl = quizQuestions[questionNumber].question;
		var userChoicesEl = quizQuestions[questionNumber].choices;
		questions.textContent = userQuestionEl;
		questionNumber++;

		for (i = 0; i < userChoicesEl.length; i++) {
			listItemEl = document.createElement("li");
			listItemEl.textContent = userChoicesEl[i];
			answerSection.appendChild(listItemEl);
			listItemEl.addEventListener("click", compare);
		}
	}
};

// Compare choice with correct answer
function compare(event) {
	var element = event.target;

	if (element.matches("li")) {
		var createDiv = document.createElement("div");
		createDiv.setAttribute("id", "createDiv");

		if (element.textContent == quizQuestions[questionNumber].answer) {
			createDiv.textContent = "Correct!";
		}
	}

	questionNumber++;
}
if (questionNumber >= quizQuestions.length) {
	quizComplete();
	createDiv.textContent = "End of quiz!";
} else {
	render(questionNumber);
}
