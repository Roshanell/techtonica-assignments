import Events from "./events";
import { useEffect, useState } from "react";

const SideBar = () => {
	const [events, setEvents] = useState([]);
	// set an input value to this state; when you have an input alwways set value to state
	const [globalSearchText, setGlobalSearchText] = useState("");
	// setting the default value of filtered lists to be a default array
	const [filteredEvents, setFilteredEvents] = useState([]);
	// function to handle on change
	const filterBySearch = () => {
		// create a new variable that contain the array of events. we filter the events
		let newFilteredEvents = [...events].filter((event) =>
			// we grab the object of values
			Object.values(event)
				// joined the strings together to create a string
				.join("")
				// turned the string to lowercase
				.toLowerCase()
				// checked to see if it includes globalssearchg
				.includes(globalSearchText.toLowerCase())
		);

		setFilteredEvents(newFilteredEvents);
	};

	useEffect(() => filterBySearch(), [events, globalSearchText]);
	return (
		<div className="w-full">
			<div className="navbar ">
				<div className="flex-1">
					<label htmlFor="my-drawer" className="btn btn-primary drawer-button">
						Techtonica 2023 Events
					</label>
				</div>
				<div className="flex-none gap-2">
					<div className="form-control">
						<input
							type="text"
							placeholder="Search"
							className="input input-bordered"
							//tracks changes in the input
							onChange={(e) => setGlobalSearchText(e.target.value)}
						/>
					</div>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img
									src="https://i.imgur.com/AeZqRNP.png"
									alt="techtonica logo"
								/>
							</div>
						</label>
					</div>
				</div>
			</div>

			<div className="drawer">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					<div className="grid grid-cols-3 gap-14 status-column">
						<div>Interested</div>
						<div>Going</div>
						<div>Went</div>
					</div>
					<Events
						events={events}
						setEvents={setEvents}
						filteredEvents={filteredEvents}
						setFilteredEvents={setFilteredEvents}
					/>
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 text-base-content bg-white text-black">
						<li>
							<a>Sidebar Item 1</a>
						</li>
						<li>
							<a>Sidebar Item 2</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
