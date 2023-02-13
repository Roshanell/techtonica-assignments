let newValue;

// default mode
let mode = "easy";
let randomNumber = Math.floor(Math.random() * 10);

console.log(randomNumber, "new num");
// generate random number for mode
function getNewRandomNumber() {
	if (mode === "easy") {
		console.log(mode);
		return Math.floor(Math.random() * 5);
	} else if (mode === "medium") {
		return Math.floor(Math.random() * 10);
	} else {
		return Math.floor(Math.random() * 15);
	}
}

const submitButton = document.querySelector("#submitButton");
const easyButton = document.querySelector("#levelOne");
const mediumButton = document.querySelector("#levelTwo");
const hardButton = document.querySelector("#levelThree");

submitButton.addEventListener("click", submitAnswer);
easyButton.addEventListener("click", easyLevel);
mediumButton.addEventListener("click", mediumLevel);
hardButton.addEventListener("click", hardLevel);

//score functionality
let humanScore = 0;
let computerScore = 0;
const humanScoreArea = document.getElementById("humanScoreArea");
const computerScoreArea = document.getElementById("computerScoreArea");
humanScoreArea.innerHTML = humanScore;
computerScoreArea.innerHTML = computerScore;
