
let max = prompt("Welcome! Enter your max number: ");
let randomNum = Math.floor(Math.random() * max + 1);
console.log(randomNum);

let guess = prompt("Enter your first Guess: ");
let numOfGuesses = 0;
while (guess != randomNum) {
    if (guess > randomNum) {
        guess = prompt("Too High... Guess Again: ")
    }
    else {
        guess = prompt("Too Low... Guess Again: ")
    }

    if (guess === "q") {
        break;
    }
    numOfGuesses ++;
}

if (guess !== "q") {
    console.log(`Yayyy! You got it in ${numOfGuesses + 1} guesses!`);
}