
let option = prompt("What would you like to do?").toLowerCase();

let list = [];
while (option !== "quit" && option !== 'q') {
    if (option === "new") {
        let item = prompt("Enter new todo: ");
        list.push(item);
        console.log(`${item} added to the list.`)
    }
    else if (option === "list") {
        console.log("*********")
        for (let i = 0; i < list.length; i ++) {
            console.log(`${i}: ${list[i]}`);
        }
        console.log("*********")
    }
    else if (option === "delete") {
        let index = prompt("Enter the number to delete the item: ");
        let deleted = list.splice(index, 1);
        console.log(`Okay, ${deleted[0]} has been deleted.`)
    }
    option = prompt("What would you like to do?").toLowerCase();
}

console.log("Okay, you quit");
