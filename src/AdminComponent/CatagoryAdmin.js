import React, { useContext, useState } from 'react';
import { CatagoryContext } from '../Context/CatagoryContext';
import CatagoryDelete from './CatagoryDelete';
import Navabar from '../Components/Navabar';
import { Link } from 'react-router-dom';

const CatagoryAdmin = () => {
    const {setCatdata}=useContext(CatagoryContext)
    const [name,setname]=useState(null)
    const [image,setImage]=useState(null)

const handleAdd=()=>{

const data ={
    name:name,
    image:image
}

    fetch('https://ecommerce-backend-yat2.onrender.com/cat',
        {
            method:"POST",
            headers:{
                "Content-Type": "application/json"

            },
             body:JSON.stringify(data)
   } )
   .then(res=>res.json())
   .then(result=>{////console.log(result)
     setCatdata(result)
    alert("Item Added")}
   )
   setTimeout(() => {
    window.location.reload()
    
   }, 0);
   setImage('')
   setname('')
   

}

  return (
    <>
    <Navabar />
<div className='my-4'>
  <Link to='/admin' className=''> <h6 className='text-center'> Back To AdminPanel </h6></Link>
</div>

    <h3>Add The Catagories </h3>
    <div className='d-flex justify-content-center align-item-center'> 
     <div className='card py-3 my-3' style={{width:"600px"}} >
  
   <label htmlFor="" className='form-label my-3 mx-3'>Name
    <input type="text" className='form-control'
     value={name} onChange={(e)=>setname(e.target.value)} />
    </label> <br />
    <label htmlFor="" className='form-label mx-3 '>Image Url
    <input type="text" className='form-control' 
    value={image} onChange={(e)=>setImage(e.target.value)}/>
    </label> 
    <br />

    
    <div className='d-flex  justify-content-center'>
    <button className='btn btn-success w-40 h-60 ' onClick={handleAdd} >Add Item</button>
</div>   </div> 


    </div>

    <hr />

    <div>
      <CatagoryDelete />
    </div>
    </>
  );
}

export default CatagoryAdmin;
