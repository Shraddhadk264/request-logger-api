<<<<<<< HEAD
"

🟡 ACTIVITY 3 — Request Logger Middleware

Now specifically practice middleware.

Step 1

Create:



request-logger-api



npm init -y
npm install express

Step 2 — Create server



const express = require("express");

const app = express();

app.use(express.json());

const logger = (req, res, next) => {

    console.log(`${req.method} ${req.url}`);

    next();

};

app.use(logger);

Step 3 — Add routes



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

Step 4 — Add timestamp

Improve your logger:



const logger = (req, res, next) => {

    const time = new Date().toLocaleTimeString();

    console.log(
        `${req.method} ${req.url} - ${time}`
    );

    next();

};

You'll see:



GET /books - 3:21:10 PM
POST /books - 3:21:35 PM
GET /users - 3:21:50 PM

Step 5 — Add custom header

Create another middleware:



app.use((req, res, next) => {

    res.setHeader("X-Powered-By", "My Backend");

    next();

});

Now every response contains:



X-Powered-By: My Backend

Step 6 — GitHub

Repository:



request-logger-api

README:



# Request Logger API

## Technologies

- Node.js
- Express.js

## Features

- Custom middleware
- Request logging
- Timestamp logging
- Custom response headers






