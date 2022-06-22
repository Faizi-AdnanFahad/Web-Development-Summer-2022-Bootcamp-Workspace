let todoInput = document.querySelector('#todoInput');
let addBTN = document.querySelector("#add");
let container = document.querySelector("#container");


addBTN.addEventListener('click', function () {
    if (todoInput.value) {
        let div = document.createElement('div');
        div.classList.add("newToDoDiv");
        if (todoInput.value.length >= 88) {
            newDiv.style = 'overflow: scroll';
        }
        div.innerText = todoInput.value;
        container.appendChild(div);
        todoInput.value = '';
    }
    else {
        alert("Can not add empty todo task!")
    }
});

todoInput.addEventListener('keydown', function (event) {
    if (todoInput.value && event.key === 'Enter') {
        let newDiv = document.createElement('div');
        if (todoInput.value.length >= 88) {
            newDiv.style = 'overflow: scroll';
        }
        newDiv.classList.add("newToDoDiv");
        newDiv.innerText = todoInput.value;
        container.appendChild(newDiv);
        todoInput.value = '';
    }
    else if (event.key === 'Enter' && todoInput.value === '') {
        alert("Can not add empty todo task!")
    }
});