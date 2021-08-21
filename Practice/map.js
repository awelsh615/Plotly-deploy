// Capitalize all letters in an array of words
let words = ["these", "words", "need", "capitalized"];

let caps = words.map(word => word.toUpperCase())

console.log(caps);

// Square each number in an array of numbers
let numbers = [1,2,3,4];
let squared = numbers.map(number => number*number);

console.log(squared);

// Numbers in an array are doubled
let numbers = [1,2,3,4,5];
let doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

// Numbers in an array are doubled (arrow function version)
let numbers = [1,2,3,4,5];
let doubled = numbers.map(num => num*2);
console.log(doubled);

//Skill drill: add 5 to numbers in an array
let numbers = [0,2,4,6,8];
let plusFive = numbers.map(num => num + 5);
console.log(plusFive);

// Skill Drill: Extract population from a list
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var population = cities.map(city => city.population);
console.log(population);