import React, { useState } from 'react';
// import { HeaderContext } from '../Context/HeaderContext';
import HeaderDelete from './HeaderDelete';
import Navabar from '../Components/Navabar';
import { Link } from 'react-router-dom';
const HeaderAdmin = () => {

    //  const{}=useContext(HeaderContext)
    const [image,setImage]=useState('')
    const [description,setDescription]=useState('')
    const handleAdd=()=>{
      const data={
        image:image,
        description:description
      }
      fetch("https://ecommerce-backend-yat2.onrender.com/header",
        {
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
body:JSON.stringify(data)
},
      )
      .then(res=>res.json())
      .then(data)
        
      alert('item added')
      setImage('')
      setDescription('')
   setTimeout(() => {
      window.location.reload()
      
    },0); }


    
    


  return (
    <> 
      <Navabar />
<div className='my-4'>
  <Link to='/admin' className=''> <h6 className='text-center'> Back To AdminPanel </h6></Link>
</div>
    <h3>Add The Header Components</h3>
    <div className='d-flex justify-content-center align-item-center'> 
     <div className='card py-3 my-3' style={{width:"600px"}} >
  
   
    <label htmlFor="" className='form-label mx-3 '>Image Url
    <input type="text" className='form-control' 
    value={image} onChange={(e)=>setImage(e.target.value)}/>
    </label> 
    <br />

    <label htmlFor="" className='form-label my-3 mx-3'> Description
    <input type="text" className='form-control'
     value={description} onChange={(e)=>setDescription(e.target.value)} />
    </label> <br />
    <div className='d-flex  justify-content-center'>
    <button className='btn btn-success w-40 h-60 ' onClick={handleAdd} >Add Item</button>
</div>   </div> 


    </div>
<hr />
    <div>
<HeaderDelete />
    </div>
    </>
  );
}

export default HeaderAdmin;
