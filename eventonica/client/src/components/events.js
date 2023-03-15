import { useState, useEffect } from "react";
import EventCard from "./event";
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

	return (
		<div>
			<CardGroup className="Events">
				{events.map((event) => (
					<EventCard
						key={event.id}
						title={event.title}
						location={event.location}
						time={event.eventtime}
					/>
				))}
			</CardGroup>
			<AddEvent />
		</div>
	);
};

export default Events;
