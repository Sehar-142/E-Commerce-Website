const express = require('express')
const app = express()
const errorMiddleware = require("./middleware/error")
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cokkieParser = require("cookie-parser")
const dotenv = require('dotenv')


//config
dotenv.config({path:"backend/config/config.env"})


app.use(express.json())
app.use(cokkieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());



// Route Imports
const product = require("./routes/productRoute")
const user = require("./routes/userRoute")
const order =require("./routes/orderRoutes")
const payment = require("./routes/paymentRoute");


app.use("/api/v1", product)
app.use("/api/v1", user)
app.use("/api/v1", order)
app.use("/api/v1", payment);

//Middleware for error
app.use(errorMiddleware)

module.exports = app
