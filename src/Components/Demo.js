import React, { useEffect, useState } from 'react';

const Demo = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("https://ecommerce-backend-yat2.onrender.com/order",{
      method:"GET",
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(res=>res.json())
    .then(datas=>{console.log(datas)
      setData(datas)
    })

  },[])
  return (
    <div>
    <h3>hello all</h3>

    { Array.isArray( data) && data.map(item=>
    <div key={item.id}>
      <h2>
         {item.name}

      </h2>
    </div>)}
    </div>
  );
}

export default Demo;
