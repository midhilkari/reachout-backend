require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
var http = require("http");
var twilio = require("twilio");
var swaggerUi = require("swagger-ui-express");

//My routes

//DB Connection
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err);

    console.log("DB CONNECTION ERROR");
  });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser()); //used to put or delete some values into the cookies
app.use(cors());

//My Routes

//Port
const port = process.env.PORT || 8000;

//Starting Server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
