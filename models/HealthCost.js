const mongoose = require("mongoose");

const HealthCostsSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['health', 'vision', 'dental'],
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  recurring: {
    type: Boolean,
    require: true,
  },
  cost: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("HealthCost", HealthCostsSchema);
