import React, { createContext, useContext,useState} from 'react';
import { ProductContext } from './ProductContext';
 
const CartContext =createContext()

const CartContextProvider= ({children}) => {

    const {productdata }=useContext(ProductContext)
    const [ cart ,setCart]=useState([''])
    const handleCart = (id) => {  
      const carddata = productdata.find(product => product._id === id);  
      
      // if (carddata) {  
          setCart(prevCart => [...prevCart, carddata]);  
          //console.log(carddata);  
  
          const cartdatapost = {  
              image: carddata.image,  
              description: carddata.name,
              price:carddata.price
          };  
  
          fetch('https://ecommerce-backend-yat2.onrender.com/cart', {  
              method: "POST",  
              headers: {  
                  "Content-Type": "application/json"  
              },              
              body: JSON.stringify(cartdatapost)   
          })  
          .then(res =>res.json())  
          .then(data => {  
              //console.log(data);  
          }) 
        }

     
  
    
  

       
  return (
    <div>
      <CartContext.Provider value={{cart, handleCart }}>
      {children}

      </CartContext.Provider>
    </div>
  );
}

export {CartContext ,CartContextProvider} 
