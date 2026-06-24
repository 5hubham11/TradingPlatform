require("dotenv").config();
const express = require("express");
const app = express();


const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");


const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingModel.js");
const { PositionModel } = require("./model/PositionModel.js");
const {orderModel} = require("./model/ordersModel.js")

app.use(
  cors({
    origin: ["http://localhost:5173","http://localhost:3000"],
    
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());

const PORT = process.env.PORT || 3005;

const uri = process.env.MONGO_URL;

app.listen(3004, () => {
  console.log("app started");

  mongoose.connect(uri);
});

app.get("/allholdings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allpositions", async (req, res) => {
  let allPosition = await PositionModel.find({});
  res.json(allPosition);
});
app.post("/newPosition", async (req, res) => {
  let newOrder = new orderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("orderSaved");
});

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);