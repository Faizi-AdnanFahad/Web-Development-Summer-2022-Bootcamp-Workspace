// API Calling using 'fetch'

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED!!!");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

// async function loadStarWarsPeople() {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1/");
//     const data = await res.json();
//     console.log(res);
//     const res2 = await fetch("https://swapi.dev/api/people/2/");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (e) {
//     console.log("ERROR!!!", e);
//   }
// };

// loadStarWarsPeople();

/*========================================================================================*/

/*HTTP Request using Axios*/

// async function makeRequest(id) {
//   try {
//     let data = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(data.data);
//   }
//   catch (e) {
//     console.log(e);
//   }
// }
// makeRequest(4);

// Setting up the header
async function getDadJoke() {
  

  try {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    };
    let data = await axios.get('https://icanhazdadjoke.com/', config); // returns HTML
    //  console.log(data.data.joke);
    return data.data.joke;
  }
  catch(e) {
    console.log(e);
  }
}

let jokes = document.querySelector("#joke");
let btn = document.querySelector("button");
btn.addEventListener('click', function () {
  let newLI = document.createElement('LI');
  jokes.appendChild(newLI);
  getDadJoke().then((data) => {
    newLI.innerText = data;
  })
})
