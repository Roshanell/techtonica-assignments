const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dataWeather = require("./data");

const app = express();

const PORT = 8085;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get("/", (req, res) => {
	res.json({ message: "Hello from My template ExpressJS using and API Key" });
});

// creates an endpoint for the route /api/weather
app.get("/api/weather/", (req, res) => {
	const city = req.query.cityName;
	//console.log(city);
	const apiKey = process.env.API_KEY;
	console.log(apiKey);
	const params = new URLSearchParams({
		q: city,
		appid: apiKey,
		units: "Metric",
	});
	//const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
	console.log(url);
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			//console.log(data);
			res.send({ data });
		})
		.catch((err) => {
			console.log(err);
		});
});

// console.log that your server is up and running
app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
