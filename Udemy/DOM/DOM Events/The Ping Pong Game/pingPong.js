let player1BTN = document.querySelector('#player1BTN');
let firstPlayerScore = document.querySelector('#firstPlayerScore');
let value1 = 0;

let player2BTN = document.querySelector('#player2BTN');
let secondPlayerScore = document.querySelector('#secondPlayerScore');
let value2 = 0;

let resetBTN = document.querySelector('#resetBTN');

let selectWinningScore = document.querySelector('#scoreMax');
let winningScore = parseInt(selectWinningScore.options[selectWinningScore.selectedIndex].innerText);
/* In case they change the value of select*/
selectWinningScore.addEventListener('change', function () {
    winningScore = parseInt(selectWinningScore.value);
    resetGame();
})

function incrementScore(player, value) {
    value++;
    player.innerText = value;
    return value;
}

player1BTN.addEventListener('click', function () {
    let gameOver = (value1 === winningScore || value2 === winningScore);
    if (!gameOver && value1 != winningScore) {
        value1++;
        firstPlayerScore.innerText = value1;
        if (value1 === winningScore) {
            firstPlayerScore.style.color = "green";
            secondPlayerScore.style.color = 'red';
        }
    }
    else {
        player1BTN.disabled = true;
    }
})

player2BTN.addEventListener('click', function () {
    let gameOver = (value1 === winningScore || value2 === winningScore);
    if (!gameOver && value2 != winningScore) {
        value2 ++;
        secondPlayerScore.innerText = value2;
        if (value2 === winningScore) {
            secondPlayerScore.style.color = "green";
            firstPlayerScore.style.color = 'red';
        }
    }
    else {
        player2BTN.disabled = true;
    }
});

/* Resets all buttons */
function resetGame() {
    firstPlayerScore.innerText = 0;
    secondPlayerScore.innerText = 0;
    firstPlayerScore.style.color = 'white';
    secondPlayerScore.style.color = 'white';
    value1 = 0;
    value2 = 0;
    player1BTN.disabled = false;
    player2BTN.disabled = false;
}

// Reset Button
resetBTN.addEventListener('click', resetGame);
