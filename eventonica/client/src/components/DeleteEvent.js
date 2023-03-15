const DeleteEvent = ({ deleteFromDB, eventId }) => {
	const message = "test";
	const handleSetDelete = () => {
		console.log("Im clicked");
		deleteFromDB(eventId);
		
	};
	//const handleDeleteClick = () => {};

	return (
		<div>
			<button className="btn btn-danger" onClick={handleSetDelete}>
				Delete
			</button>
		</div>
	);
};

export default DeleteEvent;

// createa button
// generate an id for each button or somehow get the button id from the parent events
//
