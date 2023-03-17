import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import CardGroup from "react-bootstrap/CardGroup";
import AddEvent from "./AddEvent";

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

	// // create a array full of events statuses
	let eventStatuses = ["interested", "going", "went"];
	// // use group by toseperate each status into a group

	// const groupByCategory = eventStatuses.groupBy((event) => {
	// 	return event.status;
	// });
	// // console.log(groupByCategory);

	// // not showing for some reason
	// console.log(groupByCategory);

	return (
		<div className="grid grid-cols-3 gap-14">
			{eventStatuses.map((status) => (
				<CardGroup className="Events">
					{events.map(
						(event) => {
							if (event.status === status) {
								return (
									<EventCard
										key={event.id}
										title={event.title}
										location={event.location}
										time={event.eventtime}
										deleteFromDB={deleteFromDB}
										eventId={event.id}
										status={event.status}
									/>
								);
							}
							// event.status === "interested" && <div>{event.status}</div>;
							// event.status === status && (
							// );
						}
						// <EventCard
						// 	key={event.id}
						// 	title={event.title}
						// 	location={event.location}
						// 	time={event.eventtime}
						// 	deleteFromDB={deleteFromDB}
						// 	eventId={event.id}
						// 	status={event.status}
						// />
						//  <DeleteEvent />
					)}
				</CardGroup>
			))}

			{/* getting this data from post req to add event comp - parent to child */}
			<AddEvent postRequest={postRequest} />
		</div>
	);
};

export default Events;
