const {model} = require("mongoose");

const {ordersSchema} =  require("../schemas/OrdersShema.js");

const orderModel =   model("order",ordersSchema);

module.exports ={orderModel};

