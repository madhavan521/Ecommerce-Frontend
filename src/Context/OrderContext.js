import React, { createContext,useEffect,useState} from 'react';
 
const OrderContext =createContext()

const OrderContextProvider= ({children}) => {

    const [ order ,setOrder]=useState(null)
   
  useEffect(()=>{
    fetch('https://ecommerce-backend-yat2.onrender.com/order', {  
        method: "GET",  
        headers: {  
            "Content-Type": "application/json"  
        }             
    })  
    .then(res =>res.json())  
    .then(data => {  
        console.log(data);  
        setOrder(data)
    }) 

  },[])
          console.log(order)
     

     
  
    
  

       
  return (
    <div>
      <OrderContext.Provider value={{order,setOrder}}>
      {children}

      </OrderContext.Provider>
    </div>
  );
}

export {OrderContext ,OrderContextProvider} 
