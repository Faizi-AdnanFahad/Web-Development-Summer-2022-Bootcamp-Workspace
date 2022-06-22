let todoInput = document.querySelector('#todoInput');
let addBTN = document.querySelector("#add");
let container = document.querySelector("#container");


addBTN.addEventListener('click', function() {
    if (todoInput.value) {
        let div = document.createElement('div');
        div.classList.add("newToDoDiv");
        div.innerText = todoInput.value;
        container.appendChild(div);
        todoInput.value = '';
    }
    else {
        alert("Can not add empty todo task!")
    }
});

todoInput.addEventListener('keydown', function(event) {
    
    if (todoInput.value && event.key === 'Enter') {
        let div = document.createElement('div');
        div.classList.add("newToDoDiv");
        div.innerText = todoInput.value;
        container.appendChild(div);
        todoInput.value = '';
    }
    else if (event.key === 'Enter' && todoInput.value === '') {
        alert("Can not add empty todo task!")
    } 
});