import { useEffect, useState } from "react";

function Joker(){
    const url ="https://official-joke-api.appspot.com/jokes/random";
   
    const getNewJoke= async()=>{
        let repose=await fetch(url);
        let jsonResponse=await repose.json();
        console.log(jsonResponse);
        // return jsonResponse;
        setjoke({setup : jsonResponse.setup, punchline: jsonResponse.punchline });
    };
    let [joke,setjoke]=useState(getNewJoke);


    
    useEffect(()=>{
        async function getFirstJoke() {
        let repose = await fetch(url);
        let jsonResponse=await repose.json();
        console.log(jsonResponse);
        setjoke({setup : jsonResponse.setup, punchline: jsonResponse.punchline });
        
    }
    getFirstJoke();
},);


    return(
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke} >New Joke</button>
        </div>
    )
}

export default Joker;