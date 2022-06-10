console.log("BEFORE CONDITIONAL")
if (1 + 1 === 2) {
    console.log("1 + 1 is equal to 2")
}
console.log("AFTER CONDITIONAL")

console.log("--------------------------")

let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0.5: " + random)
}
else {
    console.log("Your number is greater than 0.5: " + random)
}

console.log("--------------------------")

// If-else & else

const dayOfWeek = 'friday';

if (dayOfWeek === 'Monday') {
    console.log("I hate Mondays")
}
else if (dayOfWeek === 'Saturday')  {
    console.log("I love Saturdays");
}
else {
    console.log("Its either Sunday, tuesday, wednesday, thursday or friday")
}