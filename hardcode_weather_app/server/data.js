const coord = {
	coord: {
		lon: -95.3633,
		lat: 29.7633,
	},
	weather: [
		{
			id: 701,
			main: "Mist",
			description: "mist",
			icon: "50n",
		},
	],
	base: "stations",
	main: {
		temp: 295.49,
		feels_like: 296.05,
		temp_min: 294.77,
		temp_max: 296.15,
		pressure: 1009,
		humidity: 87,
	},
	visibility: 8047,
	wind: {
		speed: 6.69,
		deg: 140,
		gust: 9.26,
	},
	clouds: {
		all: 100,
	},
	dt: 1677643132,
	sys: {
		type: 2,
		id: 2001415,
		country: "US",
		sunrise: 1677588523,
		sunset: 1677629980,
	},
	timezone: -21600,
	id: 4699066,
	name: "Houston",
	cod: 200,
};

module.exports = coord;
