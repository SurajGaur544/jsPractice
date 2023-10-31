let arr = [];

let req = prompt("Enter the task requeste you want todo");
while(true){
    if(req == "quit") {
        console.log("you quit");
        break;
    }
    else if(req == "add"){
        let addTask = prompt("what is task you want to add");
        arr.push(addTask);
        console.log(addTask+" added");
    }
    else if(req == "delete"){
        let index = prompt("Enter index your task to delete");
        arr.splice(index,1);
        console.log("Task deleted");
    }
    else if(req == "list"){
        console.log(".......................")
        for(let i=0;i<arr.length;i++){
            console.log(i,arr[i]);
        }
        console.log("........................");

    }
    else{
        console.log("invalid input");
    }
    req = prompt("Enter the task requeste you want todo");
}