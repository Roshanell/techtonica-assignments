import Card from "react-bootstrap/Card";
import Moment from "react-moment";
import { useState } from "react";

const EventCard = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const handleFavoriteClick = () => {
		setIsFavorite((prevVal) => !prevVal);
	};
	console.log({ isFavorite });
	const favorite = <i className="fa-solid fa-heart"> </i>;
	const isNotFavorite = <i className="fa-regular fa-heart"></i>;
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title>
					{props.title}
					<div style={{ backgroundColor: "green" }}>
						<span onClick={handleFavoriteClick}>
							{" "}
							{isFavorite ? favorite : isNotFavorite}
						</span>
					</div>
				</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					Date:{" "}
					{!props.time ? (
						"TBD"
					) : (
						<Moment format={"DD/MM/YYYY"}>{props.time}</Moment>
					)}
				</Card.Subtitle>
				<Card.Text>{props.location}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default EventCard;
