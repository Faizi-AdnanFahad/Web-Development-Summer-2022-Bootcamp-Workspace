let player1BTN = document.querySelector('#player1BTN');
let firstPlayerScore = document.querySelector('#firstPlayerScore');
let value1 = parseInt(firstPlayerScore.innerText);

let player2BTN = document.querySelector('#player2BTN');
let secondPlayerScore = document.querySelector('#secondPlayerScore');
let value2 = parseInt(secondPlayerScore.innerText);

player1BTN.addEventListener('click', function() {
    value1 = incrementScore(firstPlayerScore, value1);

})

player2BTN.addEventListener('click', function() {
    value2 = incrementScore(secondPlayerScore, value2);
});

function incrementScore(player, value) {
    value ++;
    console.log(value);
    player.innerText = value;
    return value;
}