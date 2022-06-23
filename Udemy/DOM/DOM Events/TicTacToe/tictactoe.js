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
                        console.log(checkForWinner());
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

function checkForWinner() {
    let winnerFound = false;
    let columnArr = [];
    for (let row = 0; !winnerFound && row < 3; row++) {
        for (let column = 0; !winnerFound && column < 3; column++) {
            winnerFound = r1r2r3(row);
            columnArr.push(cells[column][row]);
        }
        if (!winnerFound) {
            winnerFound = c1c2c3();
        }
        else {
            break;
        }

        if (!winnerFound) {
            winnerFound = diagonal();
        }
        else {
            break;
        }
    }

    // return cells[0][0].innerText === 'XXXXX' && 
    //         cells[0][1].innerText === 'XXXXX' && cells[0][2].innerText === 'XXXXX';
    return winnerFound;
}

/* Condition 1: Checking all rows */
function r1r2r3(row) {
    return cells[row].every(function(element) {
        return element.innerText === 'XXXXX';
    })
    ||
    cells[row].every(function(element) {
        return element.innerText === 'OOOOO';
    });
}

function c1c2c3() {
    let XXXXX = (cells[0][0].innerText === 'XXXXX' && 
     cells[1][0].innerText === 'XXXXX' && 
     cells[2][0].innerText === 'XXXXX')
    ||
    (cells[0][1].innerText === 'XXXXX' && 
     cells[1][1].innerText === 'XXXXX' && 
     cells[2][1].innerText === 'XXXXX')
     ||
     (cells[0][2].innerText === 'XXXXX' && 
      cells[1][2].innerText === 'XXXXX' && 
      cells[2][2].innerText === 'XXXXX');

      let OOOOO = (cells[0][0].innerText === 'OOOOO' && 
     cells[1][0].innerText === 'OOOOO' && 
     cells[2][0].innerText === 'OOOOO')
    ||
    (cells[0][1].innerText === 'OOOOO' && 
     cells[1][1].innerText === 'OOOOO' && 
     cells[2][1].innerText === 'OOOOO')
     ||
     (cells[0][2].innerText === 'OOOOO' && 
      cells[1][2].innerText === 'OOOOO' && 
      cells[2][2].innerText === 'OOOOO');

      return XXXXX || OOOOO;
}

function diagonal() {
    let XXXXX = (cells[0][0].innerText === 'XXXXX' && 
     cells[1][1].innerText === 'XXXXX' && 
     cells[2][2].innerText === 'XXXXX')
    ||
    (cells[0][2].innerText === 'XXXXX' && 
     cells[1][1].innerText === 'XXXXX' && 
     cells[2][0].innerText === 'XXXXX');

    let OOOOO = (cells[0][0].innerText === 'OOOOO' && 
    cells[1][1].innerText === 'OOOOO' && 
    cells[2][2].innerText === 'OOOOO')
   ||
   (cells[0][2].innerText === 'OOOOO' && 
    cells[1][1].innerText === 'OOOOO' && 
    cells[2][0].innerText === 'OOOOO');

      return XXXXX || OOOOO;
}

// function c1c2c3(columnArr) {
//     return columnArr.every(function(element) {
//         return element.innerText === 'XXXXX';
//     })
//     ||
//     columnArr.every(function(element) {
//         return element.innerText === 'OOOOO';
//     });
// }