// // // ***********Basic Functions**********
// // // Our first Function

// // function singSong() {
// //     console.log("WOOOOHHHHHH");
// //     console.log("Do");
// //     console.log("Wowowowowowo");
// //     console.log("Hey Hey Hey");
// // }

// // // singSong();

// // function greet(person) {
// //     console.log(`Hi, ${person}`);
// // }

// // function greet(person1, person2) {
// //     console.log(`${person1} LOVES ${person2}`);
// // }

// function repeat(str, n) {
//     let result = "";
//     for (let i = 0; i < n; i ++) {
//         result += str;
//     }
//     console.log(result);
// }

// repeat("$ ", 4);

// // ***********Intermediate Functions**********

// //-------------Using a function as an argument-----------------//
// // https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/22003494#questions/13528422
//     // Without an Agument
//     function arg() {
//         console.log("Hi, I don't have an argument");
//     }

//     function callArg(func) {
//         func();
//     }

//     callArg(arg);



//     // With an Agument
//     function IwillBePassed(name) {
//         return "Hi, there!" + name;
//     }

//     function takeAnotherFunctionAsArgument(func) {
//         console.log(func() + "!!!!!!!!!!!!!!!");
//     }

//     takeAnotherFunctionAsArgument(() => IwillBePassed("John"));
//     //-------------------------------------------------------------------------//

//-------------Returning a function from another funciton-----------------//

    // Example 1: easy
    function returnFunc() {
        /* Storing a function in a variable */
        const func = function() {
            console.log("I am gonna be a function that will be returned")
        }

        return func;
    }

    // Calling the function above
    const funcReturned = returnFunc();
    funcReturned();


    // Example 2: Useful & a little complicated example
    function placeTime(place, time) {
        const name = function (name) {
            console.log(`${name} was at ${place} at ${time}'o clock.`);
        }
        return name;
    }

    // Calling the above function
    const ahmad = placeTime("Toronto", 10);
    ahmad("Ahmad");

    //-------------------------------------------------------------------------//

