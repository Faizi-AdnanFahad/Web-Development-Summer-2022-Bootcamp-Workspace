let h1 = document.querySelector('h1');
h1.style.textAlign = 'center';

let btn = document.querySelector('#changeBkgrnd');



btn.addEventListener('click', () => {
    let firstColor = Math.floor(Math.random() * 256) + 1;
    let secondColor = Math.floor(Math.random() * 256) + 1;
    let thirdColor = Math.floor(Math.random() * 256) + 1;
    h1.innerText = `rgb(${firstColor},${secondColor},${thirdColor})`;
    document.body.style.backgroundColor = `rgb(${firstColor},${secondColor},${thirdColor})`;


})