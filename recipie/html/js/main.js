// change theme from dark to light mode - donw
// create  button - done
// add event listener to button -done
// change background if clicked
// change html theme with inner text ?
let themeChangerButton = document.querySelector(".theme-btn");
let themeChangerAttribute = document.documentElement.attributes.name;
console.log(themeChangerAttribute);
themeChangerButton.addEventListener("click", toLightMode);

function toLightMode() {
	alert("Clicked!");
	// themeChangerButton.innerText = "Changed to Light Mode";

	// if (themeChangerAttribute.innerText == "dark") {
	// 	themeChangerAttribute.innerText == "light";
	// } else {
	// 	themeChangerAttribute.innerText == "dark";
	// }

	// console.log(themeChangerElement)
	//document.querySelector("data-theme").innerText = "light"
}
