import React, { useContext, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Style/SingleProduct.css'
import Navabar from './Navabar';
import {Toaster,toast} from 'react-hot-toast'




const  Order   = () => {

    const {productdata}=useContext(ProductContext)
    const [address,setAddress]=useState()

    const {id}=useParams()
    const navigate=useNavigate()
       
    const single =  productdata.find(item=>item._id === id)
    //console.log(single)


  const  handleOrder=(e)=>{
    e.preventDefault();

    const orderdata ={
   image:single.image,
   name:single.name,
   price:single.price,
   address:address

    }

    fetch('https://ecommerce-backend-yat2.onrender.com/order', {  
                    method: "POST",  
                    headers: {  
                        "Content-Type": "application/json"  
                    },              
                    body: JSON.stringify(orderdata)   
                })  
                .then(res =>res.json())  
                .then(data => {  
                    //console.log(data);  
                }) 

                  toast.success('Your Oder Placed Successfully')

                setTimeout(() => {
                  setAddress('')
                  navigate('/myorder')
                }, 1000);
             }
      

 
    



  return (
    <>
 
    
    
    <Navabar />
    
       <Toaster
  position="top-center"
  reverseOrder={false}
/>
    
    <div className='container'> 
    <div className="row ">
    <div  className="col mt-2 ">
    <div className='d-flex justify-content-center align-item-center'>
    <img src={single.image} alt=""  />
   </div>

     <hr  className='my-4'/>
      <div className="col ">
              <h2>Product Name : {single.name}</h2>

               <h3 className= ' d-flex d-inline '><h4>Price : </h4><h4 className='text-danger ms-1'> {single.price}</h4>
   </h3> </div>
<form action=""   onSubmit={handleOrder}>

<div className="row my-3">
<label htmlFor="" className='form-label'>Enter your Address : 
<textarea name="" id=""  value={address} onChange={(e)=>{setAddress(e.target.value)}} className='form-control' placeholder='Enter you address' required></textarea>
</label>
</div>

<div className="row my-3">

  <button className=' btn btn-success justify-content-center align-item-center ' >Place order</button>  
</div>
</form>

</div>
</div>

</div>
      
   </>
  );
}

export default Order;
