const express = require("express");
const app = express();
const main=require("./database");
const User = require("./Models/users");

app.use(express.json());

// READ - Get all users
app.get("/info", async (req, res) => {
    try {
        const ans1 = await User.find({});
        // console.log("GET /info");
        res.send(ans1);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// CREATE - Add new user
app.post("/info", async (req, res) => {
    try {
        await User.create(req.body);
        res.send("Added Successfully");
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

// DELETE - Delete user by name (e.g., "Mohan")
app.delete("/info", async (req, res) => {
    try {
        const ans2 = await User.deleteOne({ name: "Mohan" });
        res.send({ message: "Deleted Successfully", result: ans2 });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

// UPDATE - Update user with name "Mohan"
app.put("/info", async (req, res) => {
    try {
        const ans3 = await User.updateOne(
            { name: "Mohan" },
            { gender: "Female", city: "Alinagar" }
        );
        res.send({ message: "Update Successful", result: ans3 });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

// Connect to DB and start server
main()
    .then(() => {
        console.log("Connected to DB");
        app.listen(3000, () => {
            console.log("Listening on port 3000");
        });
    })
    .catch((err) => console.log("Connection error:", err));
