var firstSearch = true;
var castOpen = true;
var castOpenCounter = 0;

let searchForm = document.querySelector('#search');

searchForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Don't submit to a new link
    let input = searchForm.elements[0];
    let data = await searchForQuery(input);

    let mainElement = document.createElement('main');
    document.body.appendChild(mainElement);

    if (data.data.length > 0) { // data exists
        if (firstSearch) {
            doTheBackgroundWork(data, mainElement);
            firstSearch = false;
        }
        else {
            let main = document.querySelector('main');
            main.remove();
            doTheBackgroundWork(data, mainElement);
        }

        let castIBtn = document.querySelector("#movieInfo i");


        addContainerCasting(castIBtn, data.data);

    }
    else {
        let main = document.querySelector('main');
        main.remove();
        let p = document.createElement("p");
        p.innerText = "No Movies Exist, search for something else please.";
        p.id = 'noMoviesExist';
        mainElement.appendChild(p);
    }
    input.value = ''; // Clean the user entered search
});


async function searchForQuery(inputForm) {
    // Takes the input from the user as a q param and sends an API get request accordingly.
    let config = {
        params: {
            q: inputForm.value,
        }
    };
    return await axios.get('https://api.tvmaze.com/search/shows?q=', config);
}


function addContainerCasting(castIBtn, data) {
    let id = data[0].show.id;

    castIBtn.addEventListener('click', async function () {
        let container = document.createElement('DIV');
        container.id = 'castContainer';
        document.body.append(container);
        let h2 = document.createElement('h2');
        h2.id = 'castSpan';
        h2.innerText = 'Casts: ';
        container.append(h2);

        let div = document.createElement('div');
        div.id = 'castList';
        container.append(div);

        if (castOpen) {
            let casts = await axios.get(`https://api.tvmaze.com/shows/${id}/cast`);
            let str = "";
            for (let i = 0; i < casts.data.length; i++) {
                str += (i + 1) + "- " + casts.data[i].person.name;
                str += '&nbsp;&nbsp;&nbsp;&nbsp;';
            }
    
            div.innerText += '\n';
            div.innerHTML += str;
            castOpen = false;
            castOpenCounter ++;
        }
        else {
            console.log("---------")
            container.remove();
            h2.remove();
            div.remove();
            castOpen = true;
        }
    })
}
    

function doTheBackgroundWork(data, mainElement) {
    for (let i = 0; i < data.data.length; i++) {
        let container = createContainer();
        let hr = document.createElement('hr');
        mainElement.append(hr);
        mainElement.appendChild(container);

        addImage(container, data.data, i);
        addMovieInfo(container, data.data, i);
        addSummary(container, data.data, i);
    }
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
    let imgSrc = data[num].show.image;
    if (imgSrc) {
        imgElement.src = imgSrc.medium;
    }
    imgElement.alt = 'Image does not exist'
}

function addMovieInfo(container, data, num) {
    let movieInfoElement = container.childNodes[1];
    let h2 = document.createElement('h2');
    h2.innerText = data[num].show.name + " (";
    movieInfoElement.append(h2);

    let span = document.createElement('span');
    let yearPremiered = data[num].show.premiered;
    if (yearPremiered) {
        span.innerText = yearPremiered.substring(0, 4) + ")";
    }
    else {
        span.innerText = 'Not Available)';
    }
    h2.append(span);

    let watchAt = document.createElement('h5');
    watchAt.innerText = 'Watch @ ';
    watchAt.style.display = 'inline';
    movieInfoElement.append(watchAt);


    let icon = document.createElement('img');
    icon.src = 'https://cdn-icons.flaticon.com/png/512/5554/premium/5554375.png?token=exp=1656526082~hmac=667a7ab88e386c30f3e0d0ee54ecdbea';
    icon.style.width = '50px';
    icon.style.height = '50px';
    movieInfoElement.append(icon);

    let watchLink = document.createElement('a');
    watchLink.append(watchAt);
    watchLink.append(icon);
    movieInfoElement.append(watchLink);
    watchLink.href = data[num].show.officialSite;

    let rating = document.createElement('h5');
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

    let i = document.createElement('i');
    i.classList.add('gg-arrow-down-r');
    movieInfoElement.append(i);
}

function addSummary(container, data, num) {
    let h2 = document.createElement('h2');
    h2.innerText = 'Summary';
    let summaryElement = container.childNodes[2];
    summaryElement.append(h2);
    let summary = data[num].show.summary;
    if (summary) {
        summaryElement.innerHTML += summary;
    }
    else {
        summaryElement.innerText = 'Not Available';
    }
}