// const numbers = [5, 10, 15, 20];

// numbers.forEach(function(i) {
//     console.log(i/5);
// })

// /*******************************/
// const nums = [1, 2, 3, 4];
// const doubles = nums.map(function(i) {
//     return i * 2;
// }) // doubles = [2, 4, 6, 8]
// /*******************************/

// // Arrow Function
// let rollDie = (num) => {
//     return console.log(Math.floor(Math.random() * 6) + 1);
// }
// /*******************************/

/*Prints after 3 seconds*/
// setTimeout(() => {
//     console.log("Hi");
// }, 3000);

// /*Prints every 1 second*/
// let id = setInterval(() => {
//     console.log("Hi");
// }, 1000);

// clearInterval(id); stops the iterval
// /*******************************/

/***************Filter****************/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let div3 = numbers.filter((num) => {
    return num % 3 === 0;
})
console.log(div3);

/*******************************/
