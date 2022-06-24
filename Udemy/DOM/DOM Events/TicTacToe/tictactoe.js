var cells = [
    [],
    [],
    []
];

var winner = '';
let drawCounter = 0;
/* Initalizing the 2-d array to the list of divs */
for (let i = 0; i < 3; i++) {
    let currentRow = document.querySelector(`#row:nth-of-type(${i + 1})`);
    for (let j = 0; j < 3; j++) {
        cells[i][j] = currentRow.children[j];
    }
}

/* X Icon */

// let c = document.querySelector('#container #row:nth-of-type(2) div:nth-of-type(2)')

// let xIcon = document.createElement('img');
// xIcon.src = 'https://cdn-icons.flaticon.com/png/512/800/premium/800878.png?token=exp=1656030949~hmac=585b3c0fe98256c82fafcb73556665f7';
// xIcon.classList.add('imgIcon');

// let oIcon = document.createElement('img');
// oIcon.src = 'https://cdn-icons.flaticon.com/png/512/3524/premium/3524377.png?token=exp=1656031418~hmac=f3565d91565e40ff7d13ae1c6109e249';
// oIcon.classList.add('imgIcon');

let xScore = document.querySelector("#scores div:first-child span");
let oScore = document.querySelector("#scores div:last-child span");
let resetBTN = document.querySelector("#resetBTN");

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        var playerTurn = 'X';
        ['mouseenter', 'mouseleave', 'click'].forEach(function (evt) {
            cells[i][j].addEventListener(evt, function () {
                if (cells[i][j].innerText === 'X' || cells[i][j].innerText === 'O') {
                    cells[i][j].style.cursor = 'not-allowed';
                }
                else {
                    let cellOnlyHaveText = cells[i][j].childNodes.length <= 1;
                    if (cellOnlyHaveText && evt === 'click') {
                        drawCounter ++;
                        if (playerTurn === 'X') {
                            cells[i][j].innerText = 'X';
                            playerTurn = 'O';
                        }
                        else {
                            cells[i][j].innerText = 'O';
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
                            darkenTheBackground();
                            restartTheGame();
                            addWinnerBanner();
                        }
                        /**********************/
                        let draw = true;
                        for (let i = 0;!draw && i < 3; i++) {
                            for (let j = 0;!draw && j < 3; j++) {
                                draw = cells[i][j].innerText === 'X'
                                    ||
                                       cells[i][j].innerText === 'O';
                            }
                        }
                        // console.log(!winnerExist && draw);
                        let drawExist = checkForDraw(winnerExist);

                        /**********************/

                        cells[i][j].style.color = 'yellow';
                    }
                    else if (cellOnlyHaveText && !(cells[i][j].innerText === 'X' || cells[i][j].innerText === 'O') && evt === 'mouseenter') {
                        if (playerTurn === 'X') {
                            cells[i][j].innerText = 'x';
                        }
                        else {
                            cells[i][j].innerText = 'o';
                        }
                        cells[i][j].style.color = '#d0d179';
                    }
                    else if (cellOnlyHaveText && !(cells[i][j].innerText === 'X' || cells[i][j].innerText === 'O') && evt === 'mouseleave') {
                        cells[i][j].innerText = '';
                    }
                }
            }, false);
        });
    }
}

function checkForDraw(winnerExist) {
    return drawCounter === 9 && !winnerExist;
}

function darkenTheBackground() {
    let restardWindow = document.createElement('div');
    restardWindow.id = 'restartWindow';
    restardWindow.style.width = '100%';
    restardWindow.style.height = '105vh';
    restardWindow.style.backgroundColor = 'black';
    restardWindow.style.opacity = '0.5';
    document.body.appendChild(restardWindow);
    restardWindow.style.position = 'absolute';
    restardWindow.style.top = '0';
}

/* Restart the game */
function restartTheGame() {
    let restardBTN = document.createElement('button');
    restardBTN.innerText = 'Restart';
    cells[1][1].appendChild(restardBTN);
    restardBTN.style.width = '10rem';
    restardBTN.style.fontSize = '1rem';
    restardBTN.style.height = '3rem';
    restardBTN.style.position = 'absolute';
    restardBTN.style.zIndex = '2';
    restardBTN.addEventListener('click', function (event) {
    
        /* Removes the winner banner */
        let winnerDiv = document.querySelector('#winnerDiv');
        winnerDiv.remove();

        /* Removes the dark background */
        let restardWindow = document.querySelector('#restartWindow');
        restardWindow.remove();

        /* Removes the resart button */
        restardBTN.remove();

        resetTheTableContent();
        event.stopPropagation(); /* Since there are two elements in the middle div in the table, this allows the click to only function for the restart button and not for the click to create a new elment inside of it.*/
    })
}

function addWinnerBanner() {
    let winnerDiv = document.createElement('div');
    winnerDiv.id = 'winnerDiv';
    winnerDiv.style.width = '300px';
    winnerDiv.style.height = '100px';
    winnerDiv.style.backgroundColor = 'white';
    winnerDiv.style.color = 'black';
    winnerDiv.style.zIndex = '2';
    winnerDiv.style.position = 'absolute';
    if (winner === 'X') {
        winnerDiv.innerText = 'X WON!'
    }
    else {
        winnerDiv.innerText = 'O WON!'
    }
    let firstRow = document.querySelector('#container #row:nth-of-type(1)');
    firstRow.appendChild(winnerDiv);
}

/* Resets the game */
resetBTN.addEventListener('click', function () {
    resetTheTableContent();
    xScore.innerText = '0';
    oScore.innerText = '0';
})

/* Removes the marked cells in the table */
function resetTheTableContent() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            cells[i][j].innerText = '';
            cells[i][j].style.cursor = '';
        }
    }
    drawCounter = 0;
}

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
    for (let row = 0; !winnerFound && row < 3; row++) {
        for (let column = 0; !winnerFound && column < 3; column++) {
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
    for (let d = 0; d < 3; d++) {
        diagonalArr.push(cells[d][d]);
    }
    let rightDiagonalCondition = conditionChecker(diagonalArr);

    diagonalArr = [];
    for (let d = 0; d < 3; d++) {
        diagonalArr.push(cells[d][2 - d]);
    }
    let leftDiagonalCondition = conditionChecker(diagonalArr);

    return rightDiagonalCondition || leftDiagonalCondition;
}

function conditionChecker(arr) {
    let xCheck = arr.every(function (element) {
        return element.innerText === 'X';
    });

    let oCheck = arr.every(function (element) {
        return element.innerText === 'O';
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