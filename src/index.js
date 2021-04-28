const express = require("express");

const routes = require('./routes/doadorRota');


const app = express();

app.use(express.json());
app.use('/doadorRota', routes);

app.listen(3338, () => {
    console.log("Server running");
});