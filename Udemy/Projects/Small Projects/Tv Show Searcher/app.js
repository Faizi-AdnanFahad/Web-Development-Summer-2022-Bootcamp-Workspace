let searchForm = document.querySelector('#search');



async function searchForQuery(inputForm) {
    let config = {
        params: {
            q: inputForm.value,
        }
    }
    let data = await axios.get('https://api.tvmaze.com/search/shows?q=', config);
    console.log(data.data);
}

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let input = searchForm.elements[0];
    searchForQuery(input);

    input.value = ''; // Clean the user entered search
})
