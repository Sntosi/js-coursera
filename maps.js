// A map can feel very similar to an object in JS.

// However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

//To make a new Map, you can use the Map constructor:
//new Map();

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

// Here's the console output:  
// Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

// to get a specific value, you need to use the get() method. For example:  
//bestBoxers.get(1); // 'The Champion'