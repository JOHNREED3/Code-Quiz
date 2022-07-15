// Declared variables
var timerEl = document.getElementById("countdown");
var highscoreEl = document.getElementById("highscore");
var questionsEl = document.getElementById("questions");
var submitBtnEl = document.querySelector("#start-quiz");

var questionNumber = 0;
var timeInterval = 0;
var penalty = 10;
var time = 75;

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

// button activated
submitBtnEl.addEventListener("click", function () {
	if (timeInterval === 0) {
		timeInterval = setInterval(function () {
			time--;
			timerEl.textContent = "Time: " + time;

			if (time <= 0 || questionNumber > quizQuestions.length) {
				clearInterval(timeInterval);
				quizComplete();
			}
		}, 1000);
	}
	askQuestions(questionNumber);
});

// display questions
var askQuestions = function (questionNumber) {
	//Clear existing data
	questions.innerHTML = "";
	answerSection.innerHTML = "";

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
	console.log(element);

	if (element.matches("li")) {
		var createDiv = document.createElement("div");
		container.appendChild(createDiv);
		createDiv.setAttribute("id", "createDiv");

		if (element.textContent == quizQuestions[questionNumber].answer) {
			createDiv.textContent = "Correct!";
		} else {
			time = time - penalty;
			createDiv.textContent = "Wrong!";
		}
		timeout;
	}

	var timeout = setTimeout(function () {
		container.removeChild(createDiv);
	}, 600);

	questionNumber++;

	if (questionNumber == quizQuestions.length) {
		quizComplete();
	} else {
		askQuestions(questionNumber);
	}
}

function quizComplete(timeout) {
	clearInterval(timeInterval);
	timerEl.textContent = "Time: --";
	questions.innerHTML = "";
	answerSection.innerHTML = "";
	clearTimeout(timeout);
	createDiv.textContent = "";
	questions.textContent = "All Done!";
	answerSection.textContent = "Your final score is: " + time;
	recordScore();
}

function recordScore() {
	var enterScore = document.getElementById("createDiv");
	var initialsInput = document.createElement("input");
	initialsInput.setAttribute();

	enterScore.console.log(enterScore);
}
