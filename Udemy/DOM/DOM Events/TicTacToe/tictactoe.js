var cells = [
    [],
    [],
    []
];

var winner = '';

/* Initalizing the 2-d array to the list of divs */
for (let i = 0; i < 3; i++) {
    let currentRow = document.querySelector(`#row:nth-of-type(${i + 1})`);
    for (let j = 0; j < 3; j++) {
        cells[i][j] = currentRow.children[j];
    }
}

let xScore = document.querySelector("#scores div:first-child span");
let oScore = document.querySelector("#scores div:last-child span");
let resetBTN = document.querySelector("#resetBTN");

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
                        
                        let winnerExist = checkForWinner();
                        if (winnerExist) {
                            if (winner === 'X') {
                                xScore.innerText = parseInt(xScore.innerText) + 1;
                            }
                            else {
                                oScore.innerText = parseInt(oScore.innerText) + 1;
                            }
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
                    else if (!(cells[i][j].innerText === 'XXXXX' || cells[i][j].innerText === 'OOOOO') && evt === 'mouseleave') {
                        cells[i][j].innerText = '';
                    }
                }
            }, false);
        });
    }
}

resetBTN.addEventListener('click', function() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            cells[i][j].innerText = '';
        }
    }

    xScore.innerText = '0';
    oScore.innerText = '0';
})

function checkForWinner() {
    return r1r2r3() || c1c2c3() || diagonal(); 
}

/* Condition 1: Checking all rows */
function r1r2r3() {
    let winnerFound = false;
    for (let row = 0; !winnerFound && row < 3; row++) {
        for (let column = 0; !winnerFound && column < 3; column++) {
            winnerFound = conditionChecker(cells[row]);
        }
    }
    return winnerFound;
}

/* Checking all columns */
function c1c2c3() {
    let winnerFound = false;
    let columns = [];
    for (let row = 0;!winnerFound && row < 3; row ++) {
        for (let column = 0; !winnerFound && column < 3; column ++) {
            columns.push(cells[column][row]);
        }
        winnerFound = conditionChecker(columns);
        columns = [];
    }
    return winnerFound;
}

/* Diagonal Condition checking */
function diagonal() {

    let diagonalArr = [];
    for (let d = 0; d < 3; d ++) {
        diagonalArr.push(cells[d][d]);
    }
    let rightDiagonalCondition = conditionChecker(diagonalArr);
    
    diagonalArr = [];
    for (let d = 0; d < 3; d ++) {
        diagonalArr.push(cells[d][2 - d]);
    }
    let leftDiagonalCondition = conditionChecker(diagonalArr);

    return rightDiagonalCondition || leftDiagonalCondition;
}

function conditionChecker(arr) {
    let xCheck = arr.every(function (element) {
        return element.innerText === 'XXXXX';
    });

    let oCheck = arr.every(function (element) {
            return element.innerText === 'OOOOO';
        });

    if (xCheck && !oCheck) {
        winner = 'X';
    }
    else if (oCheck && !xCheck) {
        winner = 'O';
    }

    return xCheck || oCheck;
}



// function diagonal() {
//     let XXXXX = (cells[0][0].innerText === 'XXXXX' &&
//         cells[1][1].innerText === 'XXXXX' &&
//         cells[2][2].innerText === 'XXXXX')
//         ||
//         (cells[0][2].innerText === 'XXXXX' &&
//             cells[1][1].innerText === 'XXXXX' &&
//             cells[2][0].innerText === 'XXXXX');

//     let OOOOO = (cells[0][0].innerText === 'OOOOO' &&
//         cells[1][1].innerText === 'OOOOO' &&
//         cells[2][2].innerText === 'OOOOO')
//         ||
//         (cells[0][2].innerText === 'OOOOO' &&
//             cells[1][1].innerText === 'OOOOO' &&
//             cells[2][0].innerText === 'OOOOO');

//     return XXXXX || OOOOO;
// }
// function c1c2c3Helper(columns) {
//     return columns.every(function (element) {
//         return element.innerText === 'XXXXX';
//     })
//         ||
//         columns.every(function (element) {
//             return element.innerText === 'OOOOO';
//         });
// }

// function c1c2c3() {
//     let XXXXX = (cells[0][0].innerText === 'XXXXX' &&
//         cells[1][0].innerText === 'XXXXX' &&
//         cells[2][0].innerText === 'XXXXX')
//         ||
//         (cells[0][1].innerText === 'XXXXX' &&
//             cells[1][1].innerText === 'XXXXX' &&
//             cells[2][1].innerText === 'XXXXX')
//         ||
//         (cells[0][2].innerText === 'XXXXX' &&
//             cells[1][2].innerText === 'XXXXX' &&
//             cells[2][2].innerText === 'XXXXX');

//     let OOOOO = (cells[0][0].innerText === 'OOOOO' &&
//         cells[1][0].innerText === 'OOOOO' &&
//         cells[2][0].innerText === 'OOOOO')
//         ||
//         (cells[0][1].innerText === 'OOOOO' &&
//             cells[1][1].innerText === 'OOOOO' &&
//             cells[2][1].innerText === 'OOOOO')
//         ||
//         (cells[0][2].innerText === 'OOOOO' &&
//             cells[1][2].innerText === 'OOOOO' &&
//             cells[2][2].innerText === 'OOOOO');

//     return XXXXX || OOOOO;
// }


// function c1c2c3(columnArr) {
//     return columnArr.every(function(element) {
//         return element.innerText === 'XXXXX';
//     })
//     ||
//     columnArr.every(function(element) {
//         return element.innerText === 'OOOOO';
//     });
// }