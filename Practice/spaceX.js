const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(receivedData => console.log(receivedData));

// d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

let data = d3.json(url).then(receivedData=> console.log(receivedData));

let latitudes = data.map(lat => lat.location.latitude);

console.log(latitudes);
