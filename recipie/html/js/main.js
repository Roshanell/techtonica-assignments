//objective: change theme from dark to light mode -
// create  button - done
// add event listener to button -done
// change background if clicked
// change html theme with inner text ?

let themeChangerButton = document.querySelector(".theme-btn");
themeChangerButton.addEventListener("click", toLightMode);

function toLightMode() {
	alert("Clicked!");

	const card = document.querySelector("#card");
	card.dataset.theme = "light";
}
