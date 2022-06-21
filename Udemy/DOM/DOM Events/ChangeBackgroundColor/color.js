let h1 = document.querySelector('h1');
h1.style.textAlign = 'center';

let btn = document.querySelector('#changeBkgrnd');



function generateRandColor() {
    let firstColor = Math.floor(Math.random() * 256) + 1;
    let secondColor = Math.floor(Math.random() * 256) + 1;
    let thirdColor = Math.floor(Math.random() * 256) + 1;

    return [firstColor, secondColor, thirdColor];
}

btn.addEventListener('click', function() {
    console.log(btn);
    console.log(this); // this == btn when function keyword is used when declaring the fuction. It will not work if an arrow function has been used. (this == window in arrow handler function)
    let colors = generateRandColor();

    let newColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
    console.log(colors[0] + colors[1] + colors[2]  <= 300);

    /* If the background color is too dark, the heading color whill be set to white.*/
    if (colors[0] + colors[1] + colors[2] <= 50) {
        h1.style.color = 'white';
    }
    else {
        h1.style.color = 'black';
    }
    h1.innerText = newColor;
    document.body.style.backgroundColor = newColor;
})
