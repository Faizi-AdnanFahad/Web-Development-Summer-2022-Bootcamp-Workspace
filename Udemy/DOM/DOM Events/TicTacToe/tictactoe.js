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
        var playerTurn = 'X';
        ['mouseenter', 'mouseleave', 'click'].forEach(function (evt) {
            cells[i][j].addEventListener(evt, function () {
                if (cells[i][j].innerText === 'XXXXX' || cells[i][j].innerText === 'OOOOO') {
                    cells[i][j].style.cursor = 'not-allowed';
                }
                else {
                    if (evt === 'click') {
                        if (playerTurn === 'X') {
                            cells[i][j].innerText = 'XXXXX';
                            playerTurn = 'O';
                        }
                        else {
                            cells[i][j].innerText = 'OOOOO';
                            playerTurn = 'X';
                        }
                    }
                    else if (!(cells[i][j].innerText === 'XXXXX' || cells[i][j].innerText === 'OOOOO') && evt === 'mouseenter') {
                        if (playerTurn === 'X') {
                            cells[i][j].innerText = 'X';
                        }
                        else {
                            cells[i][j].innerText = 'O';
                        }
                    }
                    else if (!(cells[i][j].innerText === 'XXXXX' || cells[i][j].innerText === 'OOOOO')  && evt === 'mouseleave') {
                        cells[i][j].innerText = '';
                    }
                }
            }, false);
        });
    }
}