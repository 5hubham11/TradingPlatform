require("dotenv").config();

const express = require("express");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/AuthRoute");

const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { orderModel } = require("./model/ordersModel");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const uri = process.env.MONGO_URL;
const PORT = process.env.PORT || 3004;

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/allholdings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allpositions", async (req, res) => {
  const allPosition = await PositionModel.find({});
  res.json(allPosition);
});

app.post("/newPosition", async (req, res) => {
  const newOrder = new orderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("orderSaved");
});

app.use("/", authRoute);