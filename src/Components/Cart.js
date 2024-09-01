import React, {  useEffect, useState } from 'react';
import deleteicon from '../Assets/delete.png'
import Navabar from './Navabar';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Cart = () => {  
 const[getcart,setGetcart]=useState([''])
 
 useEffect(()=>{

  fetch('https://ecommerce-backend-yat2.onrender.com/cart',{
    method:"GET",
    headers:{
      "Content-Type": "application/json"

    }
  })
  .then(res=>res.json())
  .then(data=>{
    setGetcart(data)
    //console.log(data)
  })

 },[])


 const handleDelete=(id)=>{
  fetch(`https://ecommerce-backend-yat2.onrender.com/cart/${id}`,
    {
        method:"DELETE",
        headers:{
            "Content-Type": "application/json"
        },
    } )
.then(res=>res.json())
.then(data=>setGetcart(data))
toast.success('Item Deleted')
setTimeout(() => {
window.location.reload()

}, 500);




 }

  
 const handleClick=()=>{
  setTimeout(() => {
    // window.location.reload()
    window.scrollTo({
      top:0,behavior:'smooth'

    })

  },0);
}

  
    return (  
       <div className="">  
       <Toaster  position="top-center"
  reverseOrder={false}/>
       <Navabar />
    <div className="row">
        <div className="col ">  
   <h5 className='mt-3'>Cart Products</h5>
   { Array.isArray(getcart)  && getcart.map(item=>
        <div className="container" key={item._id}> 
            <li className="card mt-3">
            <div className="row">
                <div className="col-5 "> 
                        <img src={item.image} alt="" className="" style={{ width: "30%", height: "90%" }} /> 
 </div>  
                  <div className=' col-3 mt-5'> 
              <Link to='/'>    <p onClick={handleClick} className='my-1'>{item.description}</p>
   </Link>    <p className='text-center'>{item.price}</p> </div> 
    
                  <div className=" col-4 my-2 d-flex align-item-end justify-content-end">

                  <button  onClick={() => handleDelete(item._id)} className =" w-200 h-100 btn ">  <img src={deleteicon}  width="25px" height="25px" alt="" />
                  </button>  
                  

                
                 </div> 
            </div>

            <div>
            </div>
             </li>
              </div> 


              
        )}  
</div>
</div>
</div> 
    );  
  };

export default Cart;
