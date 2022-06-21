let player1BTN = document.querySelector('#player1BTN');
let firstPlayerScore = document.querySelector('#firstPlayerScore');
let value1 = parseInt(firstPlayerScore.innerText);

let player2BTN = document.querySelector('#player2BTN');
let secondPlayerScore = document.querySelector('#secondPlayerScore');
let value2 = parseInt(secondPlayerScore.innerText);

let resetBTN = document.querySelector('#resetBTN');

let select = document.querySelector('#scoreMax');
let selectValue = parseInt(select.options[select.selectedIndex].innerText);

function incrementScore(player, value) {
    value ++;
    player.innerText = value;
    return value;
}

player1BTN.addEventListener('click', function() {
    if (!(value1 === selectValue || value2 === selectValue) && value1 < selectValue) {
        value1 = incrementScore(firstPlayerScore, value1);
        if (value1 === selectValue) {
            firstPlayerScore.style.color = "green";
            secondPlayerScore.style.color = 'red';
        }
    }
    else {
        alert("There is already a winner");
    }
})

player2BTN.addEventListener('click', function() {
    if (!(value1 === selectValue || value2 === selectValue) && value2 < selectValue) {
        value2 = incrementScore(secondPlayerScore, value2);
        if (value2 === selectValue) {
            secondPlayerScore.style.color = "green";
            firstPlayerScore.style.color = 'red';
        }
    }
    else {
        alert("There is already a winner");
    }
});

resetBTN.addEventListener('click', function() {
    /* Reset Everything */
    firstPlayerScore.innerText = 0;
    secondPlayerScore.innerText = 0;
    value1 = 0;
    value2 = 0;
});

