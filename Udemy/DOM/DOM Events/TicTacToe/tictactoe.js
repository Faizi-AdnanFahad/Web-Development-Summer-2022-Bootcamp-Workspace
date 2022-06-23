let cells = [
    [], 
    [],
    []
];

/* Initalizing the 2-d array to the list of divs */
for (let i = 0; i < 3; i ++) {
    let currentRow = document.querySelector(`#row:nth-of-type(${i + 1})`);
    for (let j = 0; j < 3; j ++) {
        cells[i][j] = currentRow.children[j];
    }
}

for (let i = 0; i < 3; i ++) {
    for (let j = 0; j < 3; j ++) {
        cells[i][j].addEventListener('mouseup', function() {
            // console.dir(cells[i][j]);
            cells[i][j].innerText = 'X';
        })
    }
}