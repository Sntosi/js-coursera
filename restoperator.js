//Collects multiple elements into a single array. 


// Recall that the push() and pop() methods are used to add and remove items from the end of an array.
//Join arrays, objects using the rest operator
//Using the spread operator, it's easy to concatenate arrays:
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array


//output:
//['apple', 'pear', 'plum', 'blueberry', 'strawberry']
