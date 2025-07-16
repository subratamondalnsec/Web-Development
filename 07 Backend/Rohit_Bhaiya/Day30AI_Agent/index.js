const { GoogleGenAI } = require('@google/genai');
const readlineSync = require('readline-sync');
require('dotenv').config()
// Wait for user's response.



const ai = new GoogleGenAI({ apiKey: process.env.GoogleGenai_APIKey });
const ConversationHistory = [];


async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: ConversationHistory
  });
  
  return response.text;
}



// Weather leke aayega


async function getWeather(location) {
    
  const weatherInfo = [];
  for(const {city,date} of location){
      
    if(date.toLowerCase()=='today') {
      console.log("Hello Data fetching");
      const response =  await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}=${city}`);
      const data = await response.json();
      weatherInfo.push(data);
    }
    else{
      console.log("I am second");
      const response =  await fetch(`http://api.weatherapi.com/v1/future.json?key=${process.env.WEATHER_API_KEY}=${city}&dt=${date}`);
      const data = await response.json();
      weatherInfo.push(data);
    }
  }
    
  return weatherInfo;
}



async function chatting(){

  const question = readlineSync.question('How I can Help You--> ');
  const prompt = `
  You are an AI agent, who will respond to me in JSON format only.
  Analyse the user query and try to fetch city and date details from it.
  If the user asks for future weather (e.g., "weather after 3 days" or "weather on Tommorow"), use Date.now() (Today date is 16-07-2025) as the base reference, calculate the future date by adding the specified number of days or determining the upcoming day accordingly, and then format the resulting date in the form yyyy-month-date (e.g., 2025-07-19).
  If user ask for today weather, mark date as 'today'.
  To fetch weather details, I already have some function which can fetch the weather details for me,

  if you need weather information, use the below format
  JSON format should look like below:
  {
  "weather_details_needed": true,
  "location": [{"city":"mumbai", "date":"today"},{"city":"delhi", "date":"2025-04-30"}]
  }

  As an LLM; You don't know currrent date: Mark Today date is 2025-04-25

  Once you have the weather report details, respond me in JSON format only.
  If I have provided you weather details of delhi and you have enough information about them, make the summary of weather report and return it to me like below.
  JSON format should look like below:
  {
  "weather_details_needed": false,
  "weather_report":"Bhai Delhi ka mausam toh badiya hai, 18 degree temperatur hai, ghar pe pakode bana lo, maja aayega khaane mein",
  }



  User asked this question: ${question}

  Strictly follow JSON format, respond only in JSON format.
  `

  ConversationHistory.push({
    role: "user",
    parts: [{ text: prompt }]
  })

  while(true){

    let response = await main();
    ConversationHistory.push({role:'model',parts:[{text:response}]})
    // console.log(response);
    response = response.trim();
    response = response.replace(/^```json\s*|```$/g,'').trim();
    // console.log(response);
    const data = JSON.parse(response);
    console.log(data);


    if(data.weather_details_needed==false){
      console.log(data.weather_report);
      break;
    }

    // console.log(data.location);
    const weatherInformation = await getWeather(data.location);
    const weatherInfo = JSON.stringify(weatherInformation);
    // console.log(weatherInfo);
    ConversationHistory.push({role:'user',parts:[{text:`This is the weather report I Have fetched for you, use this weather report to generate user response, earlier you asked me to fetch weather details for model. ${weatherInfo}`}]})

  }

}


chatting();




// 
// {
//   "weather_details_needed": true,
//   "location": [{"city":"delhi", "date":"today"}, {"city":"mumbai", "date":"today"}]
// }
// 





// Delhi and mumbai ka mausam bata

// LLM ko Bolunga: Delhi and mumbai ka mausam bata, return mein muje location wala array de dena

// [{city:"delhi", date:'today'}, {city:"mumbai", date:'today'}];

//  Location getweather --> Actual weather laake de dega

// Actual weather aaya hai, LLM ko dunga, iska weather report card ready kar de

// User output mein show kara dunga

// first agent: Mausam ke baare mein btayega
// Blockchain chain
//  Github profile leke aa sakta hai
// News API

