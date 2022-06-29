let searchForm = document.querySelector('#search');

searchForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Don't submit to a new link
    let input = searchForm.elements[0];
    let data = await searchForQuery(input);

    let container = createContainer();

    input.value = ''; // Clean the user entered search
})

async function searchForQuery(inputForm) {
    let config = {
        params: {
            q: inputForm.value,
        }
    };
    return await axios.get('https://api.tvmaze.com/search/shows?q=', config);
}

function createContainer() {
    // <div id="container">
    //     <div id="imgInfo"><img src="" alt=""></div>
    //     <div id="movieInfo"></div>
    // </div>
    let container = document.createElement('DIV');
    container.id = 'container';
    document.body.append(container);

    let imgInfo = document.createElement('DIV');
    imgInfo.id = 'imgInfo';
    container.append(imgInfo);

    let img = document.createElement('IMG');
    imgInfo.append(img);
    
    let movieInfo = document.createElement('DIV');
    movieInfo.id = 'movieInfo';
    container.append(movieInfo);
}