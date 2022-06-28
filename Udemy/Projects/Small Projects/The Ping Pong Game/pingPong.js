p1 = {
    button: document.querySelector('#player1BTN'), 
    score: document.querySelector('#firstPlayerScore'),
    value: 0
}

p2 = {
    button: document.querySelector('#player2BTN'),
    score: document.querySelector('#secondPlayerScore'),
    value: 0
}

let resetBTN = document.querySelector('#resetBTN');

let selectWinningScore = document.querySelector('#scoreMax');
let winningScore = parseInt(selectWinningScore.options[selectWinningScore.selectedIndex].innerText);
/* In case they change the value of select*/
selectWinningScore.addEventListener('change', function () {
    winningScore = parseInt(selectWinningScore.value);
    resetGame();
})

function updateScores(player, opponent) {
    let gameOver = (player.value === winningScore || opponent.value === winningScore);
    if (!gameOver && player.value != winningScore) {
        player.value ++;
        player.score.innerText = player.value;
        if (player.value === winningScore) {
            player.score.style.color = "green";
            opponent.score.style.color = 'red';
        }
    }
    else {
        player.button.disabled = true;
        opponent.button.disabled = true;
        player.style.cursor = 'wait';
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
});

/* Resets all buttons */
function resetGame() {
    for (let p of [p1, p2]) {
        p.score.innerText = 0;
        p.score.style.color = 'white';
        p.value = 0;
        p.button.disabled = false; // enable the buttons to clickable
    }  
}
// Reset Button
resetBTN.addEventListener('click', resetGame);