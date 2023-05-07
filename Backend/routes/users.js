const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Post user data using node js routes and express
router.post("/createuser", async (req, res) => {
  try {
    const {
      name,
      dob,
      sex,
      mobile,
      govID,
      gname,
      email,
      emergencycontact,
      address,
      country,
      state,
      city,
      pincode,
      occupation,
      religion,
      maritalstatus,
      bloodgroup,
      nationality,
    } = req.body;

    const user = new User({
      name,
      dob,
      sex,
      mobile,
      govID,
      gname,
      email,
      emergencycontact,
      address,
      country,
      state,
      city,
      pincode,
      occupation,
      religion,
      maritalstatus,
      bloodgroup,
      nationality,
    });
    const createdUser = await user.save();
    res.json(createdUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error!");
  }
});

//Get user Data from the backend using Express Router.
router.get("/getuser",async(req,res)=>{
  try {
    const user = await User.find()
    res.json(user)
    
  } catch (error) {
    res.status(500).json({ message: error.message });
    
  }
})
module.exports = router;