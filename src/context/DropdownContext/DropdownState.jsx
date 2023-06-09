import React,{useEffect, useState} from 'react'
import dropdownContext from './DropdownContext'
import axios from "axios"

const DropdownState = ({children}) => {
     const[country, setCountry]=useState([])
     const[selectedState, setSelectedState]=useState([])
     const[city,setCity]=useState([])

    //  const getAccessToken=()=>{
    //   const options = {
    //     method: "GET",
    //     url: `https://www.universal-tutorial.com/api/getaccesstoken`,
    //     headers: {
    //       Accept: "application/json",
    //       "api-token":
    //         "F5oRokv8uZrUPyu-8JGCQD89qvIOm9-bIc3uXDbnsxMkAb3W1Df1QHG9LxzG8RU8xiY",
    //       "user-email": "shazanrizvi80@gmail.com",
    //     },
    //   };
    //   axios
    //     .request(options)
    //     .then(function (response) {
    //       console.log(response.data);
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    //  }

    //  useEffect(()=>{
    //   setInterval(getAccessToken, 24 * 60 * 60 * 1000);
    //  },[])
// 
     const getCountry=()=>{
              const options = {
                method: "GET",
                url: `https://www.universal-tutorial.com/api/countries/`,
                headers: {
                  Accept: "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzaGF6YW5yaXp2aTgwQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IkY1b1Jva3Y4dVpyVVB5dS04SkdDUUQ4OXF2SU9tOS1iSWMzdVhEYm5zeE1rQWIzVzFEZjFRSEc5THh6RzhSVTh4aVkifSwiZXhwIjoxNjgzNTE2NTY5fQ.laqfsQpnL55w8_TCnmh6fqXivTsdCrcW25TWVsfrswA",
                },
              };
               axios
                .request(options)
                .then(function (response) {
                  setCountry(response.data);
                })
                .catch(function (error) {
                  console.error(error);
                });

     }
//Get state for the selected country
     const getState=(selectedCountry)=>{
            const options = {
              method: "GET",
              url: `https://www.universal-tutorial.com/api/states/${selectedCountry}`,
              headers: {
                Accept: "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzaGF6YW5yaXp2aTgwQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IkY1b1Jva3Y4dVpyVVB5dS04SkdDUUQ4OXF2SU9tOS1iSWMzdVhEYm5zeE1rQWIzVzFEZjFRSEc5THh6RzhSVTh4aVkifSwiZXhwIjoxNjgzNTE2NTY5fQ.laqfsQpnL55w8_TCnmh6fqXivTsdCrcW25TWVsfrswA",
              },
            };
            axios
              .request(options)
              .then(function (response) {
                setSelectedState(response.data)
               //  console.log(response.data);
              })
              .catch(function (error) {
                console.error(error);
              });

     }
//Get City names based on the input in state and country
     const getCity=(state)=>{
           const options = {
             method: "GET",
             url: `https://www.universal-tutorial.com/api/cities/${state}`,
             headers: {
               Accept: "application/json",
               Authorization:
                 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzaGF6YW5yaXp2aTgwQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IkY1b1Jva3Y4dVpyVVB5dS04SkdDUUQ4OXF2SU9tOS1iSWMzdVhEYm5zeE1rQWIzVzFEZjFRSEc5THh6RzhSVTh4aVkifSwiZXhwIjoxNjgzNTE2NTY5fQ.laqfsQpnL55w8_TCnmh6fqXivTsdCrcW25TWVsfrswA",
             },
           };
           axios
             .request(options)
             .then(function (response) {
               setCity(response.data)
               // console.log(response.data);
             })
             .catch(function (error) {
               console.error(error);
             });


     }

  return (
    <dropdownContext.Provider value={{getCountry,country,getState,selectedState,city,getCity}}>
      {children}
    </dropdownContext.Provider>
  )
}

export default DropdownState
