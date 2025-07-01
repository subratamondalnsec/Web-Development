import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css';
import { useState } from 'react';

function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, seterror] = useState("");
    const APIkey = "ddf74aef2a814739566fbca834bf8cfc";

    let getWeatherInfo = async () => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;

        try {
            let response = await fetch(apiUrl);
            let jsonRes = await response.json();
           
            if (response.ok) {
                
                let result = {
                    city: city,
                    temp: jsonRes.main.temp,
                    tempmin: jsonRes.main.temp_min,
                    tempmax: jsonRes.main.temp_max,
                    humadity: jsonRes.main.humidity, // Fixed typo "humadity"
                    feel: jsonRes.main.feels_like,
                    weather: jsonRes.weather[0].description,
                };
                console.log(result);
                return result;
            } else {
                console.error("Error fetching data:", jsonRes.message);
                seterror("Oops! Something went wrong. Please check your internet connection and try again.");
                return null;
            }
        } catch (error) {
            console.error("Network error:", error);
            seterror("No Such Place exit!");
            return null;
        }
    };

    let handleInput = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");

        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
        }
    };

    return (
        <div className="searchBox-container">
            <h3>Search for a weather</h3>
            <form className="searchBox" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" required onChange={handleInput} />
                <Button variant="contained" type="submit">Search</Button>  
            </form>
            {error!="" && <p style={{color:"red"}}>{error}</p>}
        </div>
    );
}

export default SearchBox;
