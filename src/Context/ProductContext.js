import React, { createContext, useEffect, useState } from 'react';
 const ProductContext =createContext()
const ProductContextProvider = ({children}) => {
    const [productdata,setProductdata]=useState([])

    useEffect(()=>{
        fetch('https://ecommerce-backend-yat2.onrender.com/productdata',
            {
                method:"GET",
                headers:{
                    "Content-Type": "application/json"
                }
             })
             .then(res=>res.json())
             .then(data=>{
                console.log(data)
                setProductdata(data)
             })

    },[])
  return (
    <div>
<ProductContext.Provider value={{productdata}}>
        {children}
    </ProductContext.Provider>
      
    </div>
  );
}

export  {ProductContext ,ProductContextProvider};
