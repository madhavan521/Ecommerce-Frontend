
import React, {  useState } from 'react';
import Navabar from '../Components/Navabar';
import { Link } from 'react-router-dom';
import ProductDelete from './ProductDelete';

const ProductAdmin = () => {
    const[name,setName]=useState('')
   const [image1,setImage1]=useState('')
   const [image2,setImage2]=useState('')
   const [image3,setImage3]=useState('')
    const [description,setDescription]=useState('')
    const[price,setPrice]=useState('')
    const[discount,setDiscount]=useState('')
    const[catagory,setCatagory]=useState('')
    const[features,setFeatures]=useState('')
    const[stock,setStock]=useState('')

    const handleAdd=()=>{
        // e.preventDefault()
      const data={
        image1:image1,
        image2:image2,
        image3:image3,
        description:description,
        name:name,
        catagory:catagory,
        stock:stock,
        discount:discount,
        price:price,
        features:features
      }
      fetch("https://ecommerce-backend-yat2.onrender.com/productdata",
        {
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
body:JSON.stringify(data)
},
      )
      .then(res=>res.json())
      .then(data=>console.log(data))
        
      alert('item added')
      setImage1('')
      setDescription('')
   setTimeout(() => {
      window.location.reload()
      
    },0); }

    

    
    
  // const props = { setCatagory,setDescription,
  //   setDiscount,setFeatures,setImage1,setImage2,setImage3,setName,setPrice,setStock,name,image1,image2,image3,stock,price,discount,description,features,catagory }

  return (
    <> 
      <Navabar />
<div className='my-4'>
  <Link to='/admin' className=''> <h6 className='text-center'> Back To AdminPanel </h6></Link>   
</div>
    <h3>Add The Header Components</h3>
    <div className='d-flex justify-content-center align-item-center'> 
     <div className='card py-3 my-3' style={{width:"600px"}} >
  
     <label htmlFor="" className='form-label mx-3 '>Product Name
    <input type="text" className='form-control' 
    value={name} onChange={(e)=>setName(e.target.value)}/>
    </label> <br />
    
    <label htmlFor="" className='form-label mx-3 '>Image1 Url
    <input type="text" className='form-control' 
    value={image1} onChange={(e)=>setImage1(e.target.value)}/>
    </label> 
    <br />
    <label htmlFor="" className='form-label mx-3 '>Image2 Url
    <input type="text" className='form-control' 
    value={image2} onChange={(e)=>setImage2(e.target.value)}/>
    </label> 
    <br /><label htmlFor="" className='form-label mx-3 '>Image3 Url
    <input type="text" className='form-control' 
    value={image3} onChange={(e)=>setImage3(e.target.value)}/>
    </label> 
    <br />

    <label htmlFor="" className='form-label my-3 mx-3'> Description
    <input type="text" className='form-control'
     value={description} onChange={(e)=>setDescription(e.target.value)} />
    </label> <br />
    <label htmlFor="" className='form-label mx-3 '>Product Features
    <input type="text" className='form-control' 
    value={features} onChange={(e)=>setFeatures(e.target.value)}/>
    </label> <br />
    <label htmlFor="" className='form-label mx-3 '>Product Price
    <input type="text" className='form-control' 
    value={price} onChange={(e)=>setPrice(e.target.value)}/>
    </label> <br />
    <label htmlFor="" className='form-label mx-3 '>Product Discount
    <input type="text" className='form-control' 
    value={discount} onChange={(e)=>setDiscount(e.target.value)}/>
    </label> <br />
    <label htmlFor="" className='form-label mx-3 '>Product Stocks
    <input type="text" className='form-control' 
    value={stock} onChange={(e)=>setStock(e.target.value)}/>
    </label> <br />
    <label htmlFor="" className='form-label mx-3 '>Product catagory
    <input type="text" className='form-control' 
    value={catagory} onChange={(e)=>setCatagory(e.target.value)}/>
    </label> <br />
    <div className='d-flex  justify-content-center'>
    <button className='btn btn-success w-40 h-60 ' onClick={handleAdd} >Add Item</button>
</div>   </div> 

  
    </div>
<hr />
    <div>
    <ProductDelete  />
    </div>
    </>
  );
}

export default ProductAdmin;
