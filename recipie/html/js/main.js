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

// u li
let body = document.getElementsByTagName("body");
let instructions = [
	"Preheat oven to 350 degrees F (175 degrees C) and Grease an 8 inch square pan.",

	"In a large bowl, blend melted butter, sugar and vanilla.",
	"Beat in eggs one at a time.",
	"Combine the flour, cocoa, baking powder and salt. Graduallyblend into the egg mixture.",
	"Spread the batter into the prepared pan",
	"Bake in preheated oven for 40 to 45 minutes, or until brownies begin to pull away from the sides of the pan",
	"Let brownies cool, then cut into squares. Enjoy!",
];
let ul = document.createElement("ul");
ul.className = "directions";

for (let i = 0; i < instructions.length; i++) {
	let newListItem = document.createElement("li");
	let newCheckmark = document.createElement("input");
	newCheckmark.setAttribute("type", "checkbox");
	newListItem.innerHTML = instructions[i];
	newListItem.appendChild(newCheckmark);
	ul.appendChild(newListItem);
}

body[0].appendChild(ul);
