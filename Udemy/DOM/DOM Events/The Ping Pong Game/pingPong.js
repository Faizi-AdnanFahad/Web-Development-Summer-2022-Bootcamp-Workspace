let player1BTN = document.querySelector('#player1BTN');
let firstPlayerScore = document.querySelector('#firstPlayerScore');
let value1 = parseInt(firstPlayerScore.innerText);

let player2BTN = document.querySelector('#player2BTN');
let secondPlayerScore = document.querySelector('#secondPlayerScore');
let value2 = parseInt(secondPlayerScore.innerText);

let resetBTN = document.querySelector('#resetBTN');

function incrementScore(player, value) {
    value ++;
    player.innerText = value;
    return value;
}

player1BTN.addEventListener('click', function() {
    value1 = incrementScore(firstPlayerScore, value1);

})

player2BTN.addEventListener('click', function() {
    value2 = incrementScore(secondPlayerScore, value2);
});

resetBTN.addEventListener('click', function() {
    /* Reset Everything */
    firstPlayerScore.innerText = 0;
    secondPlayerScore.innerText = 0;
    value1 = 0;
    value2 = 0;
})