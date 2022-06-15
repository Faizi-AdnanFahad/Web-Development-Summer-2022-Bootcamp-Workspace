// // ***********Basic Functions**********
// // Our first Function

// function singSong() {
//     console.log("WOOOOHHHHHH");
//     console.log("Do");
//     console.log("Wowowowowowo");
//     console.log("Hey Hey Hey");
// }

// // singSong();

// function greet(person) {
//     console.log(`Hi, ${person}`);
// }

// function greet(person1, person2) {
//     console.log(`${person1} LOVES ${person2}`);
// }

function repeat(str, n) {
    let result = "";
    for (let i = 0; i < n; i ++) {
        result += str;
    }
    console.log(result);
}

repeat("$ ", 4);

// ***********Intermediate Functions**********

//-------------Using a function as an argument-----------------//
// https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/22003494#questions/13528422
function IwillBePassed(name) {
    return "Hi, there!" + name;
}

function takeAnotherFunctionAsArgument(func) {
    console.log(func() + "!!!!!!!!!!!!!!!");
}

takeAnotherFunctionAsArgument(() => IwillBePassed("John"));
//------------------------------//