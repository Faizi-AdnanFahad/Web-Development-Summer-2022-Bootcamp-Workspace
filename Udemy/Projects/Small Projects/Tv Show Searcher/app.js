let searchForm = document.querySelector('#search');

searchForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Don't submit to a new link
    let input = searchForm.elements[0];
    let data = await searchForQuery(input);

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