let cells = [
    [],
    [],
    []
];

/* Initalizing the 2-d array to the list of divs */
for (let i = 0; i < 3; i++) {
    let currentRow = document.querySelector(`#row:nth-of-type(${i + 1})`);
    for (let j = 0; j < 3; j++) {
        cells[i][j] = currentRow.children[j];
    }
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {


        ['mouseenter', 'mouseleave', 'click'].forEach(function (evt) {
            cells[i][j].addEventListener(evt, function () {
                if (evt === 'click') {
                    cells[i][j].innerText = 'XXXXX';
                }
                else if (cells[i][j].innerText !== 'XXXXX' && evt === 'mouseenter') {
                    cells[i][j].innerText = 'X';
                }
                else if (cells[i][j].innerText !== 'XXXXX' && evt === 'mouseleave') {
                    cells[i][j].innerText = '';
                }
            }, false);
        });
    }
}