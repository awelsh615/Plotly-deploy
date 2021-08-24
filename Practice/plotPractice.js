// console.log(cityGrowths); check if linked correctly

// sort the cities
let sortedCities = cityGrowths.sort((a,b) => a.population - b.population).reverse();

// select the top 5 cities
let topSevenCities = sortedCities.slice(0,7);

// create an array of the top 5 city names and pop increase
// parseInt to transform string to integers
// let topFiveCityNames = topFiveCities.map(city => city.City);
// let topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

  //Skill Drill: Create a bar chart of the 7 largest cities by population
let cityNames = topSevenCities.map(city => city.City)
let cityPopulation = topSevenCities.map(city => parseInt(city.population));

let trace1 = {
    x: cityNames,
    y: cityPopulation,
    type: "bar"
};
let data1 = [trace1]; //enclosing data in an array for plotly formatting
let layout1 = {
    title: "Most Populated Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population"}
};
Plotly.newPlot("pop-plot", data1, layout1);

// // Create a bar chart with the two arrays
// let trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
//   };
//   let data = [trace]; //enclosing data in an array for plotly sformatting
//   let layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: { title: "City" },
//     yaxis: { title: "Population Growth, 2016-2017"}
//   };
//   Plotly.newPlot("bar-plot", data, layout); //"bar-plot" to match the div id in index.html

