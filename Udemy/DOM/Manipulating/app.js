// InnerText
let p1InnerText = document.querySelector('p').innerText; // Stores the first paragraph's content

// InnerContent
let p1TextContent = document.querySelector('p').textContent; // returns p1 as written in HTML without considering any css changes (e.g., even if display of a class is none). 

let linkCollection = document.querySelectorAll('a');

for (let link of linkCollection) {
    link.innerText = "Click on this LINK";
}

// InnerHTML - The replaced content is treated with html properties applied to them - tags with html properties could be directly applied as shown below.
document.querySelector('h1').innerHTML = '<i>Slicky Chicken</i>'; // replaces the existing h1 with italicized verison.
