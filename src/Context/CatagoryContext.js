import React, { createContext, useEffect, useState } from 'react';  

const CatagoryContext = createContext();  

const CatagoryContextProvider = ({ children }) => {  
    const [catdata, setCatdata] = useState([]);  

    useEffect(() => {  
        fetch("https://ecommerce-backend-yat2.onrender.com/cat", {  
            method: "GET",  
            headers: {  
                "Content-Type": "application/json"  
            }  
        })  
        .then(res => res.json())  
        .then(data => {  
            console.log(data);  
            setCatdata(data);  
        });  
    }, []);  

    return (  
        <CatagoryContext.Provider value={{ catdata, setCatdata }}>  
            {children}  
        </CatagoryContext.Provider>  
    );  
}  

export { CatagoryContext, CatagoryContextProvider }; 