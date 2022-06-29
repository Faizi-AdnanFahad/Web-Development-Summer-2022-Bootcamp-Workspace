let searchForm = document.querySelector('#search');

searchForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Don't submit to a new link
    let input = searchForm.elements[0];
    let data = await searchForQuery(input);
    // console.log(data.data[0].show.image.medium);
    
    let container = createDivMovie();
    
    let imgElement = container.childNodes[0].childNodes[0].childNodes[0];
    addImage(imgElement, data.data);
    
    createInfoDiv(container.childNodes[0].childNodes[1]);
    // console.log(data.data[0].show.name);
    input.value = ''; // Clean the user entered search
})

function createInfoDiv(divInfo) {
    console.dir(divInfo);
    let h2 = document.createElement('h2');
    h2.innerText = 'GIRLSS';
    divInfo.appendChild(h2);
}

async function searchForQuery(inputForm) {
    let config = {
        params: {
            q: inputForm.value,
        }
    };
    return await axios.get('https://api.tvmaze.com/search/shows?q=', config);
}

function createDivMovie() {
    let container = document.createElement('DIV');
    container.id = 'divContainer';
    container.classList.add('container');

    let row = document.createElement('DIV');
    row.classList.add('row');
    container.appendChild(row);

    let col3 = document.createElement('DIV');
    col3.id = 'divImg';
    col3.classList.add('col-3');

    let col8 = document.createElement('DIV');
    col8.id = 'divInfo';
    col8.classList.add('col-9');

    row.appendChild(col3); row.appendChild(col8);

    let newIMG = document.createElement('IMG');
    col3.append(newIMG);

    document.body.appendChild(container);
    return container;
}

function addImage(imgElement, data) {
    imgElement.src = data[2].show.image.medium;
}