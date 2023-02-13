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
