import { useState  } from "react";

function init(){
    console.log("init was exicuted");
    return Math.random();
}

function counter(){
    const[count,setcount]= useState(0);
    // const[count,setcount]= useState(init);
    // console.log("component is render")
    let incCount= ()=>{

        // setcount(count+1);
        // setcount(count+1);

        setcount((currentVal)=>{
            return currentVal+1;
        });
        // setcount((currentVal)=>{
        //     return currentVal+1;
        // });
        // console.log(count);
        // console.log("component is increge")
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}
export default counter;