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

