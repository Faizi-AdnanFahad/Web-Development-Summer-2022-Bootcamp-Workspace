
let max = parseInt(prompt("Welcome! Enter your max number: "));

while (!max) {
    max = parseInt(prompt("Please enter a valid number: "));
}

let randomNum = Math.floor(Math.random() * max + 1);
console.log(randomNum);

let guess = parseInt(prompt("Enter your first Guess: "));
let numOfGuesses = 1;
while (parseInt(guess) !== randomNum) {
    if (guess > randomNum) {
        guess = prompt("Too High... Guess Again: ");
    }
    else {
        guess = prompt("Too Low... Guess Again: ");
    }

    if (guess === "q") {
        break;
    }
    numOfGuesses++;
}

if (guess !== "q") {
    console.log(`Yayyy! You got it in ${numOfGuesses} guesses!`);
}
