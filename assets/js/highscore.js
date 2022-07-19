function addScore() {}

// Retreives local stroage
var scores = localStorage.getItem("scores");
scores = JSON.parse(scores);

if (scores !== null) {
	for (var i = 0; i < scores.length; i++) {
		var createLi = document.createElement("li");
		createLi.textContent = scores[i].initials + " " + scores[i].score;
		scoreBoard.appendChild(createLi);
	}
}
