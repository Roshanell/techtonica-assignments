import "./App.css";
import Events from "./components/events";
import SideBar from "./components/Sidebar";

function App() {
	return (
		<div className="App">
			{/* <h1>Techtonica 2023 events</h1> */}
			<SideBar />
			<button>Create</button>
			{/* <Events />	 */}
		</div>
	);
}

export default App;
