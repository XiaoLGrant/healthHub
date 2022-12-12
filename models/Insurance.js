const mongoose = require("mongoose");

const InsuranceSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['health', 'vision', 'dental'],
    required: true
  },
  provider: {
    type: String,
    required: true
  },
  monthlyCost: {
    type: mongoose.Types.Decimal128,
    required: true
  },
  memberId: {
    type: String
  },
  groupNumber: {
    type: String
  },
  planDetails: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Insurance", InsuranceSchema);
