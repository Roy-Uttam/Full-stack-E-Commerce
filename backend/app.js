const express = require('express');
const errorMiddleWare = require('./middleware/error');
const app = express();
const cors = require("cors");


app.use(express.json())

app.use(cors())

//Route

const user = require("./routes/user.route")
const category = require("./routes/category.routes")
const product = require("./routes/product.routes")

app.use("/api/v1", user)
app.use("/api/v1", category)
app.use("/api/v1", product)

//Error handler middleware
app.use(errorMiddleWare)

module.exports = app
