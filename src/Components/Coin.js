import React from 'react'
import './../App.css'
function Coin({name,icon,price,symbol,rank}) { 
  const priceIndian =(price)=>{
    var x=price;
    x=x.toString();
    var afterPoint = '';
    if(x.indexOf('.') > 0)
       afterPoint = x.substring(x.indexOf('.'),x.length);
    x = Math.floor(x);
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
    
    return res
  }
  return (
    <div className="coin">
        <div>
          <h1>#{rank} {name}</h1>
          <h3>{symbol}</h3>
        </div>
            <img src={icon} alt=""/>
        <h3>Price: {priceIndian(price.toFixed(3))} INR</h3>
    </div>
  )
}

export default Coin