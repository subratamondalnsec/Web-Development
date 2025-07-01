import { useState  } from "react";


function LudoBoard(){
    let [moves,setmoves]=useState({blue: 0,red: 0,yellow:0,green:0 });

    let UpdateBlue=()=>{
        setmoves({...moves,blue:moves.blue+1});
    }
    
    let UpdateYellow=()=>{
        setmoves({...moves,yellow:moves.yellow+1});
    }

    let UpdateRed=()=>{
        setmoves({...moves,red:moves.red+1});
    }

    let UpdateGreen=()=>{
        setmoves({...moves,green:moves.green+1});
    }

    return(
        <div>
            <h2>Game Begin!</h2>
            <div className="board">
            <p>Blue Moves={moves.blue}</p>
            <button onClick={UpdateBlue} style={{backgroundColor : "blue"}}>+1</button>

            <p>Red Moves={moves.red}</p>
            <button onClick={UpdateRed} style={{backgroundColor : "red"}}>+1</button>

            <p>Yellow Moves={moves.yellow}</p>
            <button onClick={UpdateYellow} style={{backgroundColor : "yellow",color:"black"}}>+1</button>

            <p>Green Moves={moves.green}</p>
            <button onClick={UpdateGreen} style={{backgroundColor : "green",}}>+1</button>

            </div>
        </div>
    )
}

export default LudoBoard;