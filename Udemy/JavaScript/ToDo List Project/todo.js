
let option = prompt("What would you like to do?").toLowerCase();

let list = [];
while (option !== "quit") {
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
        list.splice(index, 1);
    }
    option = prompt("What would you like to do?").toLowerCase();
}