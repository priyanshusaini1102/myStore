const express = require('express');

const app = express();
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./middleWare/error");

//using middlewares
app.use(express.json());
app.use(cookieParser());
app.use(bodyparser.urlencoded({extended:true}));
app.use(fileUpload());

//Routes Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require('./routes/orderRoute');

//using routes
app.use("/api/v1", product);
app.use("/api/v1",user);
app.use("/api/v1",order);

//middleware for error
app.use(errorMiddleware);


module.exports = app;