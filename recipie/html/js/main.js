// change theme from dark to light mode - donw
// create  button - done
// add event listener to button -done
// change background if clicked
// change html theme with inner text

let themeChangerButton = document.querySelector(".theme-btn");
themeChangerButton.addEventListener("click", toLightMode);
const card = document.querySelector("#card");

function toLightMode() {
	alert("Clicked!");
	themeChangerButton.innerText = "Changed to Light Mode";
	card.dataset.theme = "light";
	// create a toggle button between light and dark mode
}

// change height to 40 when hovering over

function bigBadge(x) {
	x.style.height = "40px";
	x.style.width = "90px";
}
function normalBadge(x) {
	x.style.height = "20px";
}
