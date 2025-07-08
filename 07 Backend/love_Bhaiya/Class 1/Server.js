
// Server Instantiate
const express = require('express');
const app = express();

// activate the Server on 3000 port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

 
// Routes
app.get('/', (req, res) => {
    res.send('Hello jee! kia Haal chal');
});


app.post('/api/car', (req, res) => {
    const {name, brand} = req.body;
    console.log(`Car Name: ${name}, Brand: ${brand}`);
    res.status(201).send("Car created successfully");
});


