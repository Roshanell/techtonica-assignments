import { useState } from "react";
import memesData from "./memesData";

function Meme() {
	// declare state of the  memeImage to empty string
	const [memeImage, setMemeImage] = useState("");

	function getRandomImage() {
		console.log("clicked");
		//generate a random number (x)
		const memesArr = memesData.data.memes;
		let randomNum = [Math.floor(Math.random() * memesArr.length) + 1];
		console.log(randomNum);
		// generate a random url
		const randomUrl = memesArr[randomNum].url;
		console.log(randomUrl);

		// update memeImage
		setMemeImage(randomUrl);
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
				<div>
					<img src={memeImage} />
				</div>
			</main>
		</div>
	);
}

export default Meme;
