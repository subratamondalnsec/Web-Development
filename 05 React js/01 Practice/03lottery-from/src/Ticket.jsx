import TicketNum from "./TicketNum";
import './Ticket.css'

function Ticket({ticket}){
    return (
        <div className="Ticket">
            <p className="para">Ticket</p>
            {ticket.map((num,index)=>(
                <TicketNum num={num} key={index}/>
            ))}
        </div>
    )
}
export default Ticket