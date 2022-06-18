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

/*******************************************************/
// Style
/* Changning the color and fontSize of all bullet points in the HTML document using DOM*/
let bulletPoints = document.querySelectorAll('li');
for (let bp of bulletPoints) {
    bp.style.fontSize = '1.5rem';
    bp.style.color = '#42f578';
}
/*******************************************************/
// classList 
/* Rather than modifying styles for each element individually, we can make a class for them in our css file and add it using JavaScript's classList*/

/*add a border to our paragraphs while changing the color of the text*/
let paragraphs = document.querySelectorAll('p');
for (let p of paragraphs) {
    p.classList.add('purple');
    p.classList.add('border');
    // p.classList.toggle('className') could be used to turn a class on/off to see its affect on the class.
}
/*******************************************************/
// Relationship Hierarchy
let img = document.querySelector('img');
console.log(img.parentElement); // Body
console.log(img.nextElementSibling); // Next img
console.log(img.children); // a collection of an element's children 
/*******************************************************/
// Adding elements
let newImg = document.createElement('img');
newImg.src = 'https://images.unsplash.com/photo-1655492411306-30ec0257c11b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80';
newImg.classList.add('square');
document.body.appendChild(newImg); // Adds it as body's last children

// Append to the end of an element or to the end of one. (It will continue the element)
let h1 = document.querySelector('h1');
h1.append(" - Test Append");
h1.prepend("Test Prepend - ");

// Appending a new element between two elements
/* Create an h2 */
let h2 = document.createElement('h2');
h2.append("This is going between h1 and first img");

h1.insertAdjacentElement("afterend", h2);
/*******************************************************/