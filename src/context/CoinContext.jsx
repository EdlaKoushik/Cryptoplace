import { createContext, useEffect, useState } from "react";

export const CoinContext=createContext();

const CoinContextProvider=(props)=>{
           

      const [allCoin,setAllCoin] =useState([]);
      const [currency,setCurrency]=useState({
        name:"usd",
        symbol:"$"
      })
 
      
     const fetchAllCoin=async ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': process.env.REACT_APP_API_KEY}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)  //when ever the currency gets updated we are changing the api request
            .then(res => res.json())
            .then(res => setAllCoin(res))
            .catch(err => console.error(err));
     }

   useEffect(()=>{  //this use effect will call the function  once when it is loaded
    fetchAllCoin();
   },[ currency])   //ny using this our component get executed once when it loaded


   const contextValue={
    allCoin,currency,setCurrency
   }

       return (

        <CoinContext.Provider value={contextValue}>
              {props.children}
        </CoinContext.Provider>
       
    
    )

}



export default CoinContextProvider;