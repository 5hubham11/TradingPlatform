const {model} = require("mongoose");

const {PositionSchema} =  require("../schemas/PositionSchema.js");

const PositionModel =   model("position",PositionSchema);

module.exports= {PositionModel};

