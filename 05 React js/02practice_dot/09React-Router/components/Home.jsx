import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate();
    function ClickHandler(){
      navigate("/support")
    }
    function BackHandler(){
      navigate(-1);
    }
  return (
    <div>
      <div>Home</div>
      <button onClick={ClickHandler}>Move to support Page</button>
      <button onClick={BackHandler}>Go back </button>
    </div>
    
  )
}

export default Home