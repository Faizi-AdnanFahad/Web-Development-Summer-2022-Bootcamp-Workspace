let todoInput = document.querySelector('#todoInput');
let addBTN = document.querySelector("#add");
let container = document.querySelector("#container");

function performBackend() {
    let localContainer = document.createElement('div');
    localContainer.style.width = '80%';
    localContainer.classList.add('container');

    let row = document.createElement('div');
    row.classList.add('row');

    let div_1 = document.createElement('div');
    div_1.classList.add('col-1');

    let newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.style.width = '20px';
    div_1.appendChild(newCheckbox);


    let div_8 = document.createElement('div');
    div_8.classList.add('col-8');
    div_8.classList.add('newToDoDiv');
    div_8.innerText = todoInput.value;

    /* The checkbox condition */
    newCheckbox.addEventListener('click', function() {
        if (newCheckbox.checked) {
            div_8.style = 'text-decoration: line-through';
        }
        else {
            div_8.style = 'none';

        }
    })
    
    let div_2 = document.createElement('div');
    div_2.classList.add('col-2');

    let btnDelete = document.createElement('button');
    btnDelete.innerText = 'Delete';
    div_2.appendChild(btnDelete);

    /* Removes the div when clicked */
    btnDelete.addEventListener('click', function() {
        localContainer.remove();
    })

    /* Adds slider if the lenght of the todo is long */
    if (todoInput.value.length >= 50) {
        div_8.classList.add("overflow-auto");
    }

    localContainer.appendChild(row);
    row.appendChild(div_1);
    row.appendChild(div_8);
    row.appendChild(div_2);
    container.appendChild(localContainer);
    todoInput.value = '';
}

addBTN.addEventListener('click', function () {
    if (todoInput.value) {
        performBackend();
    }
    else {
        alert("Can not add empty todo task!")
    }
});

todoInput.addEventListener('keydown', function (event) {
    if (todoInput.value && event.key === 'Enter') {
        performBackend();
    }
    else if (event.key === 'Enter' && todoInput.value === '') {
        alert("Can not add empty todo task!")
    }
});