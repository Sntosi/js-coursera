//A set is a collection of unique values.

//To build a new set, you can use the Set constructor
//new Set();

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

//output
//{'apple', 'pear', 'plum'}