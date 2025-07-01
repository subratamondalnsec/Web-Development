import { useState,useEffect } from "react";

 function Counter(){
    let [countx,setcountx]= useState(0);
    let incountx=()=>{
        setcountx((currcountx)=>currcountx+1);
    }
    let [county,setcounty]= useState(0);
    let incounty=()=>{
        setcounty((currcounty)=>currcounty+1);
    }

    useEffect(function printSomething(){
        console.log("This is Side effect");
    },[countx]) //dependency

    return(
        <div>
            <h3>count={countx}</h3>
            <button onClick={incountx}>+1</button>
            <h3>count={county}</h3>
            <button onClick={incounty}>+1</button>
        </div>
    )
}



export default Counter