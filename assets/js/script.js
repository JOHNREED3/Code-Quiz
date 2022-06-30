var timerEl = document.getElementById("countdown");
var highscoreEl = document.getElementById("highscore");
var submitbtnEl = document.querySelector("#start-quiz");

submitbtnEl.addEventListener("click", function () {
	location.href = "./questions.html";
});
