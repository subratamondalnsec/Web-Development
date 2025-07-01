import SearchBox from './searchBox'
import Infobox from './infoBox';
import { useState } from 'react';
function weatherApp(){
    const[weatherinfo,setweatherinfo]=useState({
        city:"kolkata",
        feel: 38.09,
        humadity: 21,
        temp: 38.88,
        tempmax: 38.88,
        tempmin: 38.88,
        weather: "clear sky",
    })

    let updateInfo=(newinfo)=>{
        setweatherinfo(newinfo);
    }

    return (
        <div>
            <h1>Weather App by Subrata</h1>
            <SearchBox updateInfo={updateInfo}/>
            <Infobox  info={weatherinfo}/>
        </div>
    )
}
export default weatherApp;