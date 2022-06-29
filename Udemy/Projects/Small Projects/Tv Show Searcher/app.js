let searchForm = document.querySelector('#search');

searchForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Don't submit to a new link
    let input = searchForm.elements[0];
    let data = await searchForQuery(input);

    let container = createContainer();

    addImage(container, data.data, 2);
    addMovieInfo(container, data.data, 2);

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

    let summary = document.createElement('DIV');
    summary.id = 'summary';
    container.append(summary);
    return container;
}

function addImage(container, data, num) {
    let imgElement = container.childNodes[0].childNodes[0];
    imgElement.src = data[num].show.image.medium;
    imgElement.alt = 'Image does not exist'
}

function addMovieInfo(container, data, num) {
    let movieInfoElement = container.childNodes[1];
    let h2 = document.createElement('h2');
    h2.innerText = data[num].show.name + " (";
    movieInfoElement.append(h2);

    let span = document.createElement('span');
    span.innerText = data[num].show.premiered.substring(0, 4) + ")";
    h2.append(span);

    let watchAt = document.createElement('h2');
    watchAt.innerText = 'Watch @ ';
    watchAt.style.display = 'inline';
    movieInfoElement.append(watchAt);

    
    let icon = document.createElement('img');
    icon.src = 'https://cdn-icons-png.flaticon.com/512/3159/3159461.png';
    icon.style.width = '50px';
    icon.style.height = '50px';
    movieInfoElement.append(icon);

    let watchLink = document.createElement('a');
    watchLink.append(icon);
    movieInfoElement.append(watchLink);
    watchLink.href = data[num].show.officialSite;

    let rating = document.createElement('h2');
    rating.innerText = 'Rating: ';
    let ratingSpan = document.createElement('ratingSpan');
    let ratingData = data[num].show.rating.average;
    if (ratingData) {
        ratingSpan.innerText = ratingData;
    }
    else {
        ratingSpan.innerText = 'Not Available';
    }
    rating.append(ratingSpan);
    movieInfoElement.append(rating);
}