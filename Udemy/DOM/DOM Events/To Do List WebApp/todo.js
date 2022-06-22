let todoInput = document.querySelector('#todoInput');
let addBTN = document.querySelector("#add");
let container = document.querySelector("#container");

addBTN.addEventListener('click', function() {
    console.log(todoInput.value);
    let div = document.createElement('div');
    div.classList.add("newToDoDiv");
    div.innerText = todoInput.value;
    container.appendChild(div);
    todoInput.value = '';
});