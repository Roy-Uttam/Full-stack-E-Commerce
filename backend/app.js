const express = require('express');

const app = express()

app.use(express.json())

//Route

const user = require("./routes/user.route")

app.use("/api/v1", user)

module.exports = app
