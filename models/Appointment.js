const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['health', 'vision', 'dental'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  apptDate: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Appointment", AppointmentSchema);
