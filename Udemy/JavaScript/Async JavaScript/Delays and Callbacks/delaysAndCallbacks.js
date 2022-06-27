
/* We can set multiple tasks to happen taking their execution time into consideration! */
// setTimeout(function() {
//     document.body.style.backgroundColor  = 'orange';
// }, 2000);

// setTimeout(function() {
//     document.body.style.backgroundColor  = 'red';
// }, 4000);

/* Or we can have them nested using callbacks */


// setTimeout(function() {
//     setTimeout(function () {
//         // it executes 2s after the outer function is executed.
//         document.body.style.backgroundColor = 'red';
//     }, 2000);
//     document.body.style.backgroundColor = 'orange';
// }, 2000)

/* We can also use loops */
// for (let i = 0; i <= 10; i ++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000);
// }

// ===============
// YIKES!!!!!!!!!!!
// ===============
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

/*=======================================================================*/
/* We can make a function to cut the duplications. */

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// // STILL A LOT OF NESTING!!!
// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {

//                 })
//             })
//         })
//     })
// });
/*=======================================================================*/

/* The usual pattern in working in JS. We usually have multiple callback functions to predicate for different scenarios */
// searchMoviesAPI('amadeus', () => {
    // IF API SUCCEEDS
//     saveToMyDB(movies, () => {
//         //IF IT WORKS, RUN THIS:
//     }, () => {
//         //IF IT DOESN'T WORKS, RUN THIS:
//     })
// }, () => {
//     // IF API IS DOWN, OR REQUEST FAILD
// })