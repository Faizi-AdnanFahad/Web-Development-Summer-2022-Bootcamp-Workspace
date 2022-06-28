let searchForm = document.querySelector('#search');

searchForm.addEventListener('click', function(event) {
    event.preventDefault();
    let input = searchForm.elements[0];
    

    input.value = ''; // Clean the user entered search
})