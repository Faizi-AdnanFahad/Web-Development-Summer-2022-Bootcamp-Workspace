const container = document.querySelector("#container");
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 151; i++) {
    // Creating Elements
    let div = document.createElement('div');
    let span = document.createElement('span');
    const newImg = document.createElement('img');
    
    // Modifying 
    span.innerText = i;
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    div.appendChild(newImg);
    div.appendChild(span);
    div.classList.add('pokemon');
    container.appendChild(div);
}

{/* <div>
    <img></img>
    <span></span>
</div> */}