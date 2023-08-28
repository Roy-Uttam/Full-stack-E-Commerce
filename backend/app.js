const express = require('express');

const app = express()

app.use(express.json())

//Route

const user = require("./routes/user.routes")

app.use("/api/v1", user)

module.exports = app
