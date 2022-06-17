// Default Argument
function rollDie(num = 6) {
    return Math.floor(Math.random() * num) + 1;
}
/*************************************************************/
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

/*************************************************************/
// Rest
function restDemo(...arg1) { // The 3 dotes will put all arguments in an array
    console.log(arg1);
    console.log(arg1[0]);
}
restDemo("Tina", "John") // ['Tina', 'John']
// We can also use Rest to have normal arguments and unlimited array of arguments
function restDemo2(person1, person2, ...arg1) {
    console.log(`GOLD: ${person1}, SILVER: ${person2}, The rest of the participants are ${arg1}`);
}
restDemo2("Tina", "John", 'Ali', 'Karim'); // GOLD: Tina, SILVER: John, The rest of the participants are Ali,Karim

/*************************************************************/
// Destructuring on Arrays
let players = ['Messi', 'Ronaldo', 'Ramos', 'Sliva'];
let [ forward, winger, defender, midfielder ] = players;
// forward = 'Messi', winger = 'Ronaldo'...

let numbers = [1, 5, 704, 345, 654];
let [ first, second, ...rest] = numbers;
// first = 1, second = 5, rest = [704, 345, 654]

// Destructuring on Objects
let person = {
    name: 'Sarah', 
    lName: 'Michael',
    birthYear: 1999,
    deathYear: 2020
}

let {name: fName, lName, age = 12} = person
// lName = person.lName, name = person.name but will be renamed to fName
// Since age doesn't exist, the new age value of 12 will be given