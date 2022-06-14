// Arrays are mutable objects in JavaScript

a = [1, 2, 43, 5];
// Performs a shallow copy
b = a;
b.push(10000);
console.log(a);
console.log(b);

// Performs a deep copy
c = structuredClone(a);
c.pop(); // The change is only made within the array c.
console.log(c);
console.log(a);

// Some useful array methods: push, pop, shift, unshift, concat, include, indexOf, reverse

// Slice with + index
sliceArray = ["Black", "Yellow", "Green", "Red"];
// deepCopy = sliceArray.slice() // Copies a new Array
sliced = sliceArray.slice(2) // from index 2 to the end
console.log(sliced)

/////////////////////////////////////////////////////

// Splice - used to insert, delete or replace from array