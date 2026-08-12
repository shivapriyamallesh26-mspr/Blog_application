const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Blog Application Backend is running!");
});
let users = [];

app.post("/api/register", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Please fill all fields"
        });
    }

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    users.push({
        name,
        email,
        password
    });

    res.status(201).json({
        message: "Registration successful"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});