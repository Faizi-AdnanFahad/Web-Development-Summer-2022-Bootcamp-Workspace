// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const ulList = document.querySelector('#list');
let inputs = document.querySelectorAll('input');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let newLi = document.createElement('li');
    newLi.innerText = inputs[1].value + " " + inputs[0].value;
    ulList.appendChild(newLi);
    inputs[0].value = '';
    inputs[1].value = '';
})