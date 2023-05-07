const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true,
  },
  dob: {
    type: String,
    required: true,
    unique: true,
  },
  sex: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    
  },
  govID: {
    type: String,
    
  },
  gname: {
    type: String,
    
  },
  email: {
    type: String,
  },
  emergencycontact: {
    type: String,
    
  },
  address: {
    type: String,
    
  },
  country: {
    type: String,
    
  },
  state: {
    type: String,
    
  },
  city: {
    type: String,
    
  },
  pincode: {
    type: String,
    
  },
  occupation: {
    type: String,
    
  },
  religion: {
    type: String,
    
  },
  maritalstatus: {
    type: String,
    
  },
  bloodgroup: {
    type: String,
    
  },
  nationality: {
    type: String,
  
  },
});
const User = mongoose.model("user", UserSchema);
module.exports = User;
