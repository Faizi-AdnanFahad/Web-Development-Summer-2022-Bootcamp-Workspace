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
});



/* Event Delgation: will allow us to have the addEvenetListener for an element even if did not exist at the beginning and was later added. */
/* Instead of doing this property on li that may not exist yet, we can do it on a parent that does exist and check its target to be the element we want to apply the property on and apply the property on it. */
ulList.addEventListener('click', function(event) {
    if (event.target.nodeName === 'LI') {
        event.target.remove();
    }
})