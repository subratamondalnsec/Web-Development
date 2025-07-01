import { useState } from "react";
import './lottery.css'
import { genticket,Sum } from "./helper";


function Lottery(){
    let [Ticket,setTicket]=useState(genticket(3));
    let isWinning=Sum(Ticket)===15;

    let buyTicket=()=>{
        setTicket(genticket(3));
    }
    return(
        <div>
            <h2>Lottery Game!</h2>
            <div className="ticket">
                <span>{Ticket[0]}</span>
                <span>{Ticket[1]}</span>
                <span>{Ticket[2]}</span>
            </div>
            <br></br>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulation ,you Won!"}</h3>
        </div>
        
    )
}

export default Lottery;