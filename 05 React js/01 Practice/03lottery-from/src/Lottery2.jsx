import { useState } from "react";
import './lottery.css';
import { genticket,Sum } from "./helper";
import Ticket from './Ticket';


function Lottery2({n=3,winCondition}){
    let [ticket, setTicket] = useState(genticket(n));
    let isWinning = winCondition(ticket);


    let buyTicket = () => {
        setTicket(genticket(n)); // Ensure genticket(n) returns an array of numbers
    };
    return(
        <div >
            <h2 >Lottery Game!</h2>
            <Ticket ticket={ticket} />
            <br></br>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulation ,you Won!"}</h3>
        </div>
        
    )
}

export default Lottery2;