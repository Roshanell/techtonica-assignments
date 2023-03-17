import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

//     {id: 1, title: 'Women in Tech Techtonica Panel', location: 'Overland Park Convention Center'},
// props from the parent
const AddEvent = (props, { handleModalClick }) => {
	// create a state for the new event that holds an empty object
	const [event, setEvent] = useState({
		title: "",
		location: "",
		eventtime: "",
		status: "",
		description: "",
	});

	const handleTitleChange = (e) => {
		e.preventDefault();
		let newTitle = e.target.value;
		setEvent((event) => ({ ...event, title: newTitle }));
	};

	const handleDateChange = (e) => {
		e.preventDefault();
		let newDate = e.target.value;
		setEvent((event) => ({ ...event, eventtime: newDate }));
	};
	// const handleCategoryChange = (e) => {
	// 	e.preventDefault();
	// 	let newCategory = e.target.value;
	// 	setEvent((event) => ({ event, category: newCategory }));
	// };

	// const handleDescriptionChange = (e) => {
	// 	e.preventDefault();
	// 	let newDescription = e.target.value;
	// 	setEvent((event) => ({ ...event, description: newDescription }));
	// };

	const handleLocationChange = (e) => {
		e.preventDefault();
		let newLocation = e.target.value;
		setEvent((event) => ({ ...event, location: newLocation }));
	};

	const handleStatusChange = (e) => {
		e.preventDefault();
		let newStatus = e.target.value;
		setEvent((event) => ({ ...event, status: newStatus }));
	};
	const handleDescriptionChange = (e) => {
		e.preventDefault();
		let newDescription = e.target.value;
		setEvent((event) => ({ ...event, description: newDescription }));
		console.log(event.description);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setEvent(event);
		//getting this info from the parent;
		//event callback the data
		props.postRequest(event);
		// setEvent("");
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Row className="mb-3">
				<Form.Group as={Col} controlId="formGridTitle">
					<Form.Label>Event Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter a title of Event"
						required
						value={event.title}
						onChange={handleTitleChange}
					/>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridLocation">
					<Form.Label>Event Date</Form.Label>
					<Form.Control
						type="date"
						placeholder="Enter a date"
						required
						value={event.eventtime}
						onChange={handleDateChange}
					/>
				</Form.Group>
			</Row>

			{/* <Form.Group className="mb-3" controlId="formGridCategory">
				<Form.Label>Category</Form.Label>
				<Form.Control
					placeholder="
				Enter a Category"
					type="text"
					required
					value={event.category}
					onchange={handleCategoryChange}
				/>
			</Form.Group> */}

			<Form.Group as={Col} className="mb-3" controlId="formGridDescription">
				<Form.Label>Description</Form.Label>
				<Form.Control
					placeholder="Enter a brief description"
					type="text"
					required
					value={event.description}
					onChange={handleDescriptionChange}
				/>
			</Form.Group>

			<Row className="mb-3">
				<Form.Group as={Col} controlId="formGridLocation">
					<Form.Label>Location</Form.Label>
					<Form.Control
						placeholder="City, State"
						type="text"
						required
						value={event.location}
						onChange={handleLocationChange}
					/>
				</Form.Group>

				{/* <Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Owners</Form.Label>
					<Form.Control placeholder="Enter Event Owner" />
				</Form.Group> */}

				<Form.Group as={Col} controlId="formGridState">
					<Form.Label>Status</Form.Label>

					<select value={event.status} onChange={handleStatusChange} required>
						<option>Choose...</option>
						<option>Went</option>
						<option>Going</option>
						<option>Interested</option>
					</select>
				</Form.Group>
			</Row>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default AddEvent;
