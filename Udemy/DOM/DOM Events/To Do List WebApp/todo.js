let todoInput = document.querySelector('#todoInput');
let addBTN = document.querySelector("#add");
let container = document.querySelector("#container");


addBTN.addEventListener('click', function () {
    if (todoInput.value) {
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
        if (todoInput.value.length >= 88) {
            newDiv.style = 'overflow: scroll';
        }
        localContainer.appendChild(row);
        row.appendChild(div_1);
        row.appendChild(div_8);
        row.appendChild(div_2);
        container.appendChild(localContainer);
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
        if (todoInput.value.length >= 88) {
            newDiv.style = 'overflow: scroll';
        }
        localContainer.appendChild(row);
        row.appendChild(div_1);
        row.appendChild(div_8);
        row.appendChild(div_2);
        container.appendChild(localContainer);
        todoInput.value = '';
    }
    else if (event.key === 'Enter' && todoInput.value === '') {
        alert("Can not add empty todo task!")
    }
});

/* When checkbox is checked */


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