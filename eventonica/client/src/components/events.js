import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import CardGroup from "react-bootstrap/CardGroup";
import AddEvent from "./AddEvent";

const Events = ({ events, setEvents }) => {
	// // create a array full of events statuses
	let eventStatuses = ["interested", "going", "went"];
	// state for filter method

	useEffect(() => {
		fetch("http://localhost:8080/api/events")
			.then((response) => response.json())
			.then((events) => {
				setEvents(events);
				console.log("Events fetched...", events);
			});
	}, []);

	const deleteFromDB = async (eventId) => {
		console.log(eventId);
		try {
			const deleteFromDB = await fetch(
				`http://localhost:8080/api/events/${eventId}`,

				{ method: "DELETE" }
			);
			const updatedEvents = events.filter((event) => event.id !== eventId);
			setEvents(updatedEvents);
		} catch (err) {
			console.log(err.message);
		}
	};
	const postRequest = (newEvent) => {
		//console.log("From the parent", newEvent);
		return fetch("http://localhost:8080/api/events", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
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

	return (
		<div className="grid grid-cols-3 gap-14">
			{eventStatuses.map((status) => (
				// mapping over the event status arr which contains diff statuses
				// card group will be identified by the it's status.
				<CardGroup key={status} className="Events flex flex-col">
					{events.map((event) => {
						if (event.status.toLowerCase() === status) {
							return (
								<EventCard
									// each event card will be identified by its event id taken from the db
									key={event.id}
									title={event.title}
									location={event.location}
									time={event.eventtime}
									deleteFromDB={deleteFromDB}
									eventId={event.id}
									status={event.status}
									description={event.description}
								/>
							);
						}
					})}
				</CardGroup>
			))}

			{/* getting this data from post req to add event comp - parent to child */}
			<AddEvent postRequest={postRequest} />
		</div>
	);
};

export default Events;
