// Expands an iterable (like an array or string) into individual elements or an object into individual key-value pairs


// Convert a string to an array using the spread operator
// Given a string, it's easy to spread it out into separate array items:
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']