let searchForm = document.querySelector('#search');

searchForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    let input = searchForm.elements[0];
    // let data = await searchForQuery(input);
    // console.log(data.data);

    createDivMovie();

    input.value = ''; // Clean the user entered search
})


async function searchForQuery(inputForm) {
    let config = {
        params: {
            q: inputForm.value,
        }
    }
    return await axios.get('https://api.tvmaze.com/search/shows?q=', config);
}

function createDivMovie() {
    let newDiv = document.createElement('DIV');
    newDiv.id = 'divMovieInfo';

    let newIMG = document.createElement('IMG');
    newIMG.innerText = 'new IMAGE';

    newDiv.appendChild(newIMG);
    document.body.appendChild(newDiv);
}