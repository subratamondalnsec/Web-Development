import './App.css'
import Lottery from './Lottery'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import Lottery2 from './Lottery2'
import { Sum } from "./helper";
import Form from './From'
import CommentsForm from './CommentsForm'
import Counter from './counter'
import Joke from './joker'
function App(){
  let winCondition=(ticket)=>{
    // return Sum(ticket)===15;
    return ticket.every((num)=>num===ticket[0]);//all element same
  }
  return (
    <>
      <Lottery/>
      <hr/>
      <Lottery2 n={3} winCondition={winCondition} />
      <hr/>
      <Form/>
      <hr/>
      <CommentsForm/>
      <hr/>
      <Counter/>
      <hr/>
      <Joke/>

    </>
  )
}

export default App

