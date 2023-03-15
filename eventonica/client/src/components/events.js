import { useState, useEffect } from "react";
import EventCard from "./event";
import CardGroup from "react-bootstrap/CardGroup";
import AddEvent from "./AddEvent";
import DeleteEvent from "./DeleteEvent";

const Events = () => {
	const [events, setEvents] = useState([]);
	useEffect(() => {
		fetch("http://localhost:8080/api/events")
			.then((response) => response.json())
			.then((events) => {
				setEvents(events);
				console.log("Events fetched...", events);
			});
	}, []);
	// function deleteFromDB(eventId) {
	// 	// will modify events arr
	// 	// user clicks the delete button
	// 	console.log(eventId);

	// }

	const deleteFromDB = async (eventId) => {
		console.log(eventId);
		try {
			const deleteFromDB = await fetch(
				`http://localhost:8080/api/events/${eventId}`,

				{ method: "DELETE" }
			);
			const updatedEvents = events.filter((event) => event.id != eventId);
			setEvents(updatedEvents);
		} catch (err) {
			console.log(err.message);
		}
	};
	// data that will be passed to the child
	// look into heirarchy for data passing
	const postRequest = (newEvent) => {
		//console.log("From the parent", newEvent);
		return fetch("http://localhost:8080/api/events", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newEvent),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log("From the front", data);
				setEvents((events) => [...events, data]);
			});
	};

	const deleteRequest = () => {
		console.log(`deleted from parent`);
	};

	return (
		<div>
			<CardGroup className="Events">
				{events.map((event) => (
					<EventCard
						key={event.id}
						title={event.title}
						location={event.location}
						time={event.eventtime}
						deleteFromDB={deleteFromDB}
						eventId={event.id}
					/>
					//  <DeleteEvent />
				))}
			</CardGroup>

			{/* getting this data from post req to add event comp - parent to child */}
			<AddEvent postRequest={postRequest} />
		</div>
	);
};

export default Events;
