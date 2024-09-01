import React, { createContext, useEffect, useState} from 'react';
const HeaderContext =createContext()

const HeaderProvider = ({children}) => {
  const [data,setData]=useState([''])
      const headdata='vankam da mapla'
      const HeaderData = () => {  
        fetch('https://ecommerce-backend-yat2.onrender.com/header', {  
            method: "GET",  
            headers: {  
                "Content-Type": "application/json"  
            }  
        })  
        .then(res => res.json())  
        .then(data => {setData(data)
          console.log(data)});  
    }  

    useEffect(() => {  
        HeaderData();  
    }, []);  


  return (
    <div>
      <HeaderContext.Provider value={{headdata,data,setData}}>
        {children}
      </HeaderContext.Provider>
    </div>
  );
}

export {HeaderContext,HeaderProvider};
