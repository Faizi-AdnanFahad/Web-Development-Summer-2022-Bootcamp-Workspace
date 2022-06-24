var cells = [
    [],
    [],
    []
];

var winner = '';
let drawCounter = 0; // Used for draw calcuations 

/* Used for keeping track of scores */
let xScore = document.querySelector("#scores div:first-child span");
let oScore = document.querySelector("#scores div:last-child span");

let resetBTN = document.querySelector("#resetBTN");

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
                if (cells[i][j].innerText === 'X' || cells[i][j].innerText === 'O') {
                    cells[i][j].style.cursor = 'not-allowed';
                }
                else {
                    let cellOnlyHaveText = cells[i][j].childNodes.length <= 1; // Makes sure that there does not exist a button. e.g., Specifically cell[1][1]
                    let cellOccupied = (cells[i][j].innerText === 'X' || cells[i][j].innerText === 'O');
                    
                    if (cellOnlyHaveText && evt === 'click') {
                        drawCounter ++;
                        if (playerTurn === 'X') {
                            cells[i][j].innerText = 'X';
                            playerTurn = 'O';
                            cells[i][j].style.color = '#eb1751';
                        }
                        else {
                            cells[i][j].innerText = 'O';
                            playerTurn = 'X';
                            cells[i][j].style.color = '#fed050';
                        }
                        cells[i][j].style.fontFamily = 'Fascinate';
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
                            addGameStatus(winner, false);
                        }
                        else {
                            let drawExist = checkForDraw(winnerExist);
                            if (drawExist) {
                                darkenTheBackground();
                                restartTheGame();
                                addGameStatus('DRAW!', true);
                            }
                        }
                        
                    }
                    else if (cellOnlyHaveText && !cellOccupied && evt === 'mouseenter') {
                        if (playerTurn === 'X') {
                            cells[i][j].innerText = 'x';
                            cells[i][j].style.color = '#da4970';
                        }
                        else {
                            cells[i][j].innerText = 'o';
                            cells[i][j].style.color = '#ebce7f';
                        }
                        cells[i][j].style.fontFamily = 'Fascinate';
                    }
                    else if (cellOnlyHaveText && !cellOccupied && evt === 'mouseleave') {
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
    restardBTN.innerText = 'RESTART';
    cells[1][1].appendChild(restardBTN);
    restardBTN.style.width = '10rem';
    restardBTN.style.fontSize = '1rem';
    restardBTN.style.height = '3rem';
    restardBTN.style.position = 'absolute';
    restardBTN.style.zIndex = '2';
    restardBTN.style.fontFamily = "Arial, Helvetica, sans-serif";
    restardBTN.style.fontWeight = 800;
    restardBTN.style.borderRadius = '20px';
    restardBTN.style.boxShadow = '1px 1px 15px #ebce7f';
    restardBTN.style.border = 'none';

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

function addGameStatus(winner, drawExist) {
    let gameStatusDiv = document.createElement('div');
    gameStatusDiv.id = 'winnerDiv';
    gameStatusDiv.style.fontSize = '3rem';
    gameStatusDiv.style.width = '300px';
    gameStatusDiv.style.height = '100px';
    gameStatusDiv.style.backgroundColor = 'white';
    gameStatusDiv.style.color = 'black';
    gameStatusDiv.style.zIndex = '2';
    gameStatusDiv.style.position = 'absolute';
    gameStatusDiv.style.fontFamily = 'Fascinate';
    if (drawExist) {
        gameStatusDiv.innerText = winner; // DRAW!
    }
    else {
        gameStatusDiv.innerText = `${winner} WON!`;
        if (winner === 'X') {
            gameStatusDiv.style.color = '#eb1751';
        }
        else {
            gameStatusDiv.style.color = '#fed050';
        }
    }

    let firstRow = document.querySelector('#container #row:nth-of-type(1)');
    firstRow.appendChild(gameStatusDiv);
}

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

/* Resets the game */
resetBTN.addEventListener('click', function () {
    resetTheTableContent();
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