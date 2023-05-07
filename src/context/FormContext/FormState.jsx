import React,{useState} from "react";
import formContext from "./FormContext";
const FormState = ({ children }) => {
     const[user,setUser]=useState([]);
  //Post api for the creation of user using the form data
  const addUser = async (
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
    nationality
  ) => {
    const response = await fetch(`http://localhost:8088/api/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
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
      }),
    });
    console.log(response);
  };
  

  //Get User Data from the backend API
  const getUser=async()=>{
const response = await fetch(`http://localhost:8088/api/getuser`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});
const data = await response.json();

setUser(data);
  }

  return <formContext.Provider value={{addUser,getUser,user}}>
  {children}</formContext.Provider>;
};

export default FormState;
