
// Server Instantiate
const express = require('express');
const app = express();

 
// Routes
app.get('/', (request, reponse) => {
    reponse .send('Hello jee! kia Haal chal');
});


app.post('/api/car', (req, res) => {
    const {name, brand} = req.body;
    console.log(`Car Name: ${name}, Brand: ${brand}`);
    res.status(201).send("Car created successfully");
});


app.put('/api/car',(req,res)=>{

      
    console.log("")
})



// activate the Server on 3000 port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
