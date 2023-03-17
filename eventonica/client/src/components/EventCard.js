import Card from "react-bootstrap/Card";
import Moment from "react-moment";
import { useState } from "react";
import DeleteEvent from "./DeleteEvent";
const EventCard = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const handleFavoriteClick = () => {
		setIsFavorite((prevVal) => !prevVal);
	};

	// console.log({ isFavorite });
	const favorite = <i className="fa-solid fa-heart"> </i>;
	const isNotFavorite = <i className="fa-regular fa-heart"></i>;

	return (
		// <Card style={{ width: "18rem" }}>
		// 	<Card.Body>
		// 		<Card.Title>
		// 			{props.title}
		// 			<div style={{ backgroundColor: "green" }}>
		// 				<span onClick={handleFavoriteClick}>
		// 					{" "}
		// 					{isFavorite ? favorite : isNotFavorite}
		// 				</span>
		// 			</div>
		// 		</Card.Title>
		// 		<Card.Subtitle className="mb-2 text-muted">
		// 			Date:{" "}
		// 			{!props.time ? (
		// 				"TBD"
		// 			) : (
		// 				<Moment format={"DD/MM/YYYY"}>{props.time}</Moment>
		// 			)}
		// 		</Card.Subtitle>
		// 		<Card.Text>{props.location}</Card.Text>
		// 		<Card.Text>{props.status}</Card.Text>
		// 		<DeleteEvent
		// 			deleteFromDB={props.deleteFromDB}
		// 			eventId={props.eventId}
		// 		/>
		// 	</Card.Body>
		// </Card>

		<div className="card w-96 bg-base-100 shadow-xl">
			{/* <figure>
				<img
					src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
				/>
			</figure> */}

			<div className="card-body">
				<h2 className="card-title">{props.title} </h2>
				<div style={{ backgroundColor: "green" }}>
					<span onClick={handleFavoriteClick}>
						{" "}
						{isFavorite ? favorite : isNotFavorite}
					</span>
				</div>
				<p>Where: {props.location}</p>
				<p>
					When:{" "}
					{!props.time ? (
						"TBD"
					) : (
						<Moment format={"DD/MM/YYYY"}>{props.time}</Moment>
					)}
				</p>
				<div>Status: {props.status}</div>
				<div className="card-actions justify-end">
					<DeleteEvent
						deleteFromDB={props.deleteFromDB}
						eventId={props.eventId}
					/>
				</div>
			</div>
		</div>
	);
};

export default EventCard;