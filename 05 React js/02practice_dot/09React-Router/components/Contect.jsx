import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contect = () => {
  const navigate=useNavigate();
  function ClickHandler(){
    navigate("/about")
  }
  return (
    <div>
      <div>contect</div>
      <button onClick={ClickHandler}>Move to About Page</button>
    </div>
    
  )
}

export default Contect