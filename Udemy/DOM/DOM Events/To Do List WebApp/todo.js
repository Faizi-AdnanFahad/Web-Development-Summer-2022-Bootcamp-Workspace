let todoInput = document.querySelector('#todoInput');
let addBTN = document.querySelector("#add");
let container = document.querySelector("#container");


addBTN.addEventListener('click', function () {
    if (todoInput.value) {
        let newDiv = document.createElement('div');
        newDiv.classList.add("newToDoDiv");
        if (todoInput.value.length >= 88) {
            newDiv.style = 'overflow: scroll';
        }
        newDiv.innerText = todoInput.value;
        container.appendChild(newDiv);
        todoInput.value = '';
    }
    else {
        alert("Can not add empty todo task!")
    }
});

todoInput.addEventListener('keydown', function (event) {
    if (todoInput.value && event.key === 'Enter') {
        let localContainer = document.createElement('div');
        localContainer.style.width = '80%';
        localContainer.classList.add('container');
        let row = document.createElement('div');
        row.classList.add('row');

        let div_10 = document.createElement('div');
        div_10.classList.add('col-10');
        div_10.classList.add('newToDoDiv');
        div_10.innerText = todoInput.value;
        let div_2 = document.createElement('div');
        div_2.classList.add('col-2');
        let btnDelete = document.createElement('button');
        btnDelete.innerText = 'Delete';
        div_2.innerText = btnDelete;
        if (todoInput.value.length >= 88) {
            newDiv.style = 'overflow: scroll';
        }
        localContainer.appendChild(row);
        row.appendChild(div_10);
        row.appendChild(div_2);
        container.appendChild(localContainer);
        todoInput.value = '';
    }
    else if (event.key === 'Enter' && todoInput.value === '') {
        alert("Can not add empty todo task!")
    }
});

// todoInput.addEventListener('keydown', function (event) {
//     if (todoInput.value && event.key === 'Enter') {
//         let newDiv = document.createElement('div');
//         // let newCheckbox = document.createElement('input');
//         // newCheckbox.type = 'checkbox';
//         // newCheckbox.style.paddingLeft = '0';
//         // newCheckbox.style.backgroundColor = 'red';
//         // newDiv.appendChild(newCheckbox);

//         // let newCheckbox = document.createElement('button');
//         // newCheckbox.innerText = 'delete';
//         // document.body.appendChild(newCheckbox);
        
//         if (todoInput.value.length >= 88) {
//             newDiv.style = 'overflow: scroll';
//         }
//         newDiv.classList.add("newToDoDiv");

//         let newP = document.createElement('p');
//         newP.innerText = todoInput.value;
//         newP.classList.add("newToDoDivP");

//         newDiv.appendChild(newP);
//         container.appendChild(newDiv);

//         todoInput.value = '';
//     }
//     else if (event.key === 'Enter' && todoInput.value === '') {
//         alert("Can not add empty todo task!")
//     }
// });