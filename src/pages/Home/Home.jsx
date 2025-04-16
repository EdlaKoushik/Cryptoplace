import React, { useContext, useEffect, useState } from 'react';


import { Link } from 'react-router-dom';

import "./Home.css";
import { CoinContext } from '../../context/CoinContext';




const Home = () => {

    const {allCoin,currency}=useContext(CoinContext);
    const [displayCoin,setDisplayCoin]=useState([]);
     const [input,setInput]=useState("");
     const inputHandler=(event)=>{
     setInput(event.target.value);


     if(event.target.value===""){
        setDisplayCoin(allCoin);
     }
     }
        
     const searchHandler=async(event)=>{
          event.preventDefault();
       const coins= await allCoin.filter((item)=>{
           return  item.name.toLowerCase().includes(input.toLowerCase())
          })

          setDisplayCoin(coins);
     }






    useEffect(()=>{
        setDisplayCoin(allCoin);   //it is just a copy of allCoin data
    },[allCoin]);




  return (
    <div className="home">
     <div className="hero">
        <h1>Largest <br/> 
        Crypto Marketplace</h1>
        <p>Welcome to the  world's Largest cryptocurrency marketplace.
            Sign up to explore more about cryptos.
        </p>
        <form onSubmit={searchHandler}>
            <input onChange={inputHandler}  list ="coinlist" value={input}  type="text" placeholder="Search crypto.." required />
            <datalist id="coinlist">
             {allCoin.map((item,index)=>(<option key={index} value={item.name} />))}
            </datalist>
            <button type="Submit"> Search</button>
        </form>
     </div>
     <div className="crypto-table">
        <div className="crypto-layout">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{textAlign:"center"}}>24H Change</p>
            <p style={{textAlign:"right"}}> Market Cap</p>
        </div>
        {
        displayCoin.slice(0,100).map((item,index)=>(
        <Link  to ={ `/coin/${item.id}`} className="crypto-layout" key={index}>
         <p>{item.market_cap_rank}</p>
         <div>
                
                <img src={item.image} alt=""/>
                <p>{item.name + " - " + item.symbol}</p>
            </div>

            <p>{currency.symbol}{item.current_price.toLocaleString()}</p>
            <p style={{textAlign:"center"}} className={item.price_change_percentage_24h>0 ? "green":"red" } >{Math.floor(item.price_change_percentage_24h*100)/100}</p>
            <p style={{textAlign:"right"}} >{currency.symbol}{item.market_cap.toLocaleString()}</p>
         </Link>
            ))
        }
     </div>
    </div>
  )
}

export default Home


