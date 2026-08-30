let input = prompt("What do want to do!");
const todos = ["Breakfast","Dinner"];
while(input !== "quit"){
    if(input === "list"){
        console.log("**********");
        for(let i = 0 ; i < todos.length ; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********");
    }
    else if(input === "new"){
        const newtodo = prompt("Ok! What's the new todo task ahead");
        todos.push(newtodo);
        console.log(`${newtodo} added to the list`);
    }
    else if(input === "delete"){
        const index = parseInt(prompt("Please enter the index of the element to delete"));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1);
            console.log(`${deleted[0]} is removed from the list`);
        } else{
            console.log("Unknown Index.")
        }
        
    }
    input = prompt("What do want to do!");
}
console.log("Ok ! You quit the app");