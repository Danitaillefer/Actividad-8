const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api', require('./routes/api'));

//404 Handler
app.use((req, res, next) => {
    res.status(404).json({
        message: "Not found"
    });
});

//Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: err.message});
});

module.exports = app;
