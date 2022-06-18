// InnerText
// let p1InnerText = document.querySelector('p').innerText; // Stores the first paragraph's content

// // InnerContent
// let p1TextContent = document.querySelector('p').textContent; // returns p1 as written in HTML without considering any css changes (e.g., even if display of a class is none). 

// let linkCollection = document.querySelectorAll('a');

// for (let link of linkCollection) {
//     link.innerText = "Click on this LINK";
// }

// // InnerHTML - The replaced content is treated with html properties applied to them - tags with html properties could be directly applied as shown below.
// document.querySelector('h1').innerHTML = '<i>Slicky Chicken</i>'; // replaces the existing h1 with italicized verison.


// Style
/* Changning the color and fontSize of all bullet points in the HTML document using DOM*/
let bulletPoints = document.querySelectorAll('li');
for (let bp of bulletPoints) {
    bp.style.fontSize = '1.5rem';
    bp.style.color = '#42f578';
}

// classList 
/* Rather than modifying styles for each element individually, we can make a class for them in our css file and add it using JavaScript's classList*/

/*add a border to our paragraphs while changing the color of the text*/
let paragraphs = document.querySelectorAll('p');
for (let p of paragraphs) {
    p.classList.add('purple');
    p.classList.add('border');
}