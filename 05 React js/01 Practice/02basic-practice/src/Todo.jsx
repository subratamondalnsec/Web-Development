import { useState  } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoList(){
    let [todos, setTodos] = useState([{task:"Sample Task", id : uuidv4(),isdone: false}]);
    let [newTodo,setnewTodo]=useState("");
    let addNewTask=()=>{
         if(newTodo.trim()==="") return ; // Prevent adding empty tasks
        setTodos((prevTodos)=>{
            return [...prevTodos,{task: newTodo, id:uuidv4(), isdone: false }]
        });
        setnewTodo("");
    }

    let deleteTodo=(deleteid)=>{
        setTodos(todos.filter((todo )=> todo.id!=deleteid));
    }

    let UppercaseAll=()=>{
        setTodos((prevTodos)=>{
             return prevTodos.map((todo)=>{
                return {
                    ...todo,task:todo.task.toUpperCase(),
                };
            })
        });
    };

    let Uppercaseone=(upperid)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(upperid===todo.id){
                  return{
                    ...todo,task:todo.task.toUpperCase(),
                    };  
                }else{
                    return todo;
                }
                
            })
        );
    };

    let MarkDone=(markid)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id===markid){
                    return {
                        ...todo,
                        isdone:true
                    };
                }
                else return todo;
            })

        );
    };

    let MarkDoneAll=()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                return {
                    ...todo,
                    isdone:true
                };
            })

        );
    };

    return (
        <div>
            <h2>Create a Todo List</h2>
            <input placeholder="Enter your task" value={newTodo} onChange={(e) => setnewTodo(e.target.value)} ></input>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Task Todo</h4>
            <ul>{
                todos.map((todo)=>(
                    <li key={todo.id}>
                    <span style={todo.isdone ? {textDecorationLine : "line-through"} : {}} >{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=> Uppercaseone(todo.id)}>Uppercase</button>

                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=> MarkDone(todo.id)}>Mark As Done</button>
                    
                    </li>
                ))
            }</ul>
            <br></br>
            <button onClick={UppercaseAll}>Uppercase All</button>

            <br></br>
            <br></br>
            <button onClick={MarkDoneAll}>Mark As Done All</button>
        </div>
    )
}
export default TodoList;