import memesData from "./memesData";

function Meme() {
	function getRandomImage() {
		console.log("clicked");
		//generate a random number (x)
		const memesArr = memesData.data.memes;
		let randomNum = [Math.floor(Math.random() * memesArr.length) + 1];
		console.log(randomNum);
		//after clicked use that number to grab the x image out of the arr
        //obj with url
        let url = memesArr[randomNum].url
        console.log(url)
		// create an image section

		// disply it in the image section
	}
	return (
		<div>
			<main>
				<div className="inputArea">
					<input className="wordInputSection" placeholder="Enter Text Here " />
					<input
						className="wordInputSection rightInputSection"
						placeholder="Enter Text Here "
					/>
				</div>
				<div className="buttonContainer">
					<button onClick={getRandomImage}>
						<img src="https://i.imgur.com/x5xcJNa.png" className="imageIcon" />
						Generate a new meme image{" "}
					</button>
				</div>
			</main>
		</div>
	);
}

export default Meme;
