// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange

// 2nd Method
let bv2 = document.querySelector('#bv2');
bv2.classList.add('center');
bv2.onclick = function () {
    console.log("This is method 2");
}
// The function is only executed when a button is clicked and is not executed in the JS file.

/* onMouseEnter in odd #oftimes add the image and onMouseenter on even #oftimes, remove the image.*/
// let h2 = document.querySelector('h2');
// var counter = 0;
// h2.onmouseenter = function() {
//     let img = document.createElement('img');
//     img.src = 'https://images.unsplash.com/photo-1655584252326-a631ef5771d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';
//     img.id = "imgG";
//     let imgG = document.querySelector("#imgG");
//     if (counter % 2 == 0) {
//         document.body.appendChild(img);
//     }
//     else {
//         imgG.remove();
//     }
//     counter ++;
// }

// 3rd Method
// Increminting a number at each iteration
let bv3 = document.querySelector('#bv3');
bv3.classList.add('center');
let counter = 0;
let pCounter = document.createElement('p');
bv3.addEventListener('click', () => {
    pCounter.innerText = counter;
    counter ++;
});
document.body.appendChild(pCounter);


/************************************************************************************************************/

/* The use of `this` in theEventListener */

/*
    To have a common feature applied to multiple buttons, we can define it in a different function and use the keyword this with fucntion defintion. NOT array function definition.
*/

// Helper Method
function generateRandColor() {
    let firstColor = Math.floor(Math.random() * 256) + 1;
    let secondColor = Math.floor(Math.random() * 256) + 1;
    let thirdColor = Math.floor(Math.random() * 256) + 1;

    return `rgb(${firstColor},${secondColor},${thirdColor})`;
}

// Helper Method
function changebkgColor() {
    this.style.backgroundColor = generateRandColor();
    this.style.color = generateRandColor();
}

let buttons = document.querySelectorAll('#buttonChangeColor');
for (let button of buttons) {
    button.addEventListener('click', changebkgColor);
}

let h2s = document.querySelectorAll('h2');
for (let h2 of h2s) {
    h2.addEventListener('click', changebkgColor);
}

/************************************************************************************************************/

// as the key is going down when the key is pressed
let input = document.querySelector('input');
input.addEventListener('keyup', function(event) {
    console.log(event);
    console.log(event.key);
    console.log(event.code);
})

// // as the key is going up when the key is released
// input.addEventListener('keydown', function() {
//     console.log("keydown");
// })

/* Doing something when user is clicking ANYWHERE in the page */
document.addEventListener('keydown', function(event) {
    console.log("You pressed " + event.key);
})

/************************************************************************************************************/

let form = document.querySelector('#formSubmitListener');
/* When the user submits the button, what should happen to the form? The default behaviour is to submit it to the link in the action attribute in form-html*/
form.addEventListener('submit', function(event) {
    event.preventDefault(); // It will not go to the `target` page.
    console.log("SUBMITTED!");
})