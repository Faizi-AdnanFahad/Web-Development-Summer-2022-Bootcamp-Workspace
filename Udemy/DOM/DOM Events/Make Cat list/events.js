let input = document.querySelector('#catName');
let form = document.querySelector('#catForm');
let ul = document.querySelector('ul');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = ''; // Deletes the user input from the input field
})