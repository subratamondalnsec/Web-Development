let todo=[];
let req=prompt("Please enter your request");

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        console.log("All task : ");
        for(let i=0;i<todo.length;i++ ){
            console.log(i, todo[i]);
        }
    }
    else if(req=="add"){
        let a=prompt("Please enter your new task");
        todo.push(a);
        console.log("task Added");
    }
    else if(req=="delete"){
        let idx=prompt("Please enter the task index ");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("wrong request");
    }
    req=prompt("Please enter your request");
}
