import { useState } from 'react'
import './App.css'
import From from './from.jsx'

function dosomething(){
  console.log("Button was clicked.");
}

function printbye(){
  console.log("bye ,bro");
}
function Hoverme(event){
  console.log("mouse hover me");
  console.log(event);
}


function App() {
  const [count, setCount] = useState(0)
  const [click, setclick]=useState(0);

  return (
    <>
      <From/>
      <br/>
      <button onClick={() =>{
          setCount((count) => count + 1)
          dosomething();
        }
      }>
        count is {count}
      </button>
      <p onClick={printbye}>This para is event demo</p>

      <button onMouseOver={Hoverme}>Hover me !</button>

      <br></br>
      <button onClick={()=>{
        setclick((click)=>click+1);
        dosomething();
      }
      }>Click me! ={click} </button>
    </>
  )
}

export default App
