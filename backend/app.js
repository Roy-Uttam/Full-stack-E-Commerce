const express = require('express');

const app = express()

app.use(express.json())

//Route

const user = require("./routes/user.route")
const category = require("./routes/category.routes")
const product = require("./routes/product.routes")

app.use("/api/v1", user)
app.use("/api/v1", category)
app.use("/api/v1", product)

module.exports = app
