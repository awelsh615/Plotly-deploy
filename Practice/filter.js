// filter for even numbers
let numbers = [13,22,36,54,55];
let evenNumbers = numbers.filter(number => number % 2 == 0)
console.log(evenNumbers);

// filter for larger than 1
let numbers = [1,2,3,4,5];
let larger = numbers.filter(number => number >1)
console.log(larger);

// Skill drill filter for names starting with s
let words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
let swords = words.filter(word => word.startsWith('s'));
console.log(swords);

// Slive the first three elements of an array
let words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
let sliceWords = words.slice(0,3);
console.log(sliceWords);