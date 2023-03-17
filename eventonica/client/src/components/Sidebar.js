import Events from "./events";

const SideBar = () => {
	return (
		<div>
			<div className="navbar bg-base-100">
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

			{/* popout modal */}
			<div className="drawer">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					<div className="grid grid-cols-3 gap-14">
						<div>Interested</div>
						<div>Going</div>
						<div>Went</div>
					</div>
					<Events />
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 bg-base-100 text-base-content">
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