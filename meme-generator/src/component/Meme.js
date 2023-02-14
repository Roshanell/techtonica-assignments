function Meme() {
	return (
		<div>
			<form>
				<div className="inputArea">
					<input className="wordInputSection" placeholder="Enter Text Here " />
					<input
						className="wordInputSection rightInputSection"
						placeholder="Enter Text Here "
					/>
				</div>
				<div className="buttonContainer">
					<button>
						<img src="https://i.imgur.com/x5xcJNa.png" className="imageIcon" />
							Generate a new meme image{" "}
					</button>
				</div>
			</form>
		</div>
	);
}

export default Meme;
