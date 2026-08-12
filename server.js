const express = require("express");

const app = express();

app.use(express.json());

const logger = (req, res, next) => {
    const time = new Date().toLocaleTimeString();

    console.log(`${req.method} ${req.url} - ${time}`);

    next();
};

app.use(logger);

app.get("/", (req, res) => {
    res.send("Home");
});

app.get("/books", (req, res) => {
    res.json({
        message: "Books"
    });
});

app.get("/users", (req, res) => {
    res.json({
        message: "Users"
    });
});

app.post("/books", (req, res) => {
    res.status(201).json({
        message: "Book created"
    });
});

app.use((req, res, next) => {
    res.setHeader("X-Powered-By", "My Backend");
    next();
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});