// Default Argument
function rollDie(num = 6) {
    return Math.floor(Math.random() * num) + 1;
}

// Spread: Spreading each elements of an array as an argument
console.log(Math.max(...[1, 5, 23, 6,23, 132,5, 54])); 
/*Same as*/
console.log(Math.max(1, 5, 23, 6,23, 132,5, 54));

// Other usages of 'Spread'
let odds = [1, 3, 5, 7];
const oddsCopy = [...odds]; // [1, 3, 5, 7]
let evens = [2, 4, 6, 8];
const evenCopy = [...evens, ...odds]; // [2, 4, 6, 8, 1, 3, 5, 7]

// Spread with 'Objects'
let obj1 = {name: "ali", age: "12"};
let obj2 = {fName: "Rambo", age: "100"};
let objMixed = {...obj1, ...obj2}; //{name: 'ali', age: '100', fName: 'Rambo'}
let objExtra = {...obj1, city: "Kabul"} // {name: 'ali', age: '12', city: 'Kabul'}
let objArrWithIndex = {..."HELLO"}; // {0: 'H', 1: 'E', 2: 'L', 3: 'L', 4: 'O'}