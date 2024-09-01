import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import deleteicon from '../Assets/delete.png'
import editicon from '../Assets/edit.png'
import { Link } from 'react-router-dom';
const ProductDelete = (props) => {

    const {productdata,setProductdata}=useContext(ProductContext)
    //console.log(productdata.length)

const handleDelete=(id)=>{
    fetch(`https://ecommerce-backend-yat2.onrender.com/productdata/${id}`,
        {
            method:"DELETE",
            headers:{
                "Content-Type": "application/json"
            },
        } )
    .then(res=>res.json())
    .then(data=>setProductdata(data))
alert('Item Deleted')
setTimeout(() => {
    window.location.reload()
    
}, 0);
    

}



const handleRefresh=()=>{
    setTimeout(() => {
       window.location.reload() 
    }, 0);
}



  return (
    <div className="">  
    <div className="row">
        <div className="col-10">    <h3>Manage Product Items </h3>  
</div>
        <div className="col-2 d-flex justify-content-end align-item-end">  <button onClick={handleRefresh} className='btn btn-info w-0 me-3 '>Refresh</button></div>
    </div>
   { Array.isArray(productdata)  && productdata.map(item=>
        <div className="container" key={item._id}> 
            <li className="card mt-3">
            <div className="row">
                <div className="col-5 "> 
                        <img src={item.image} alt="" className="" style={{ width: "30%", height: "90%" }} /> 
                        
                 </div>  
                  <div className=' col-3 mt-5'><p className='text-center'>{item.name}</p> </div> 
    
                  <div className=" col-4 my-2 d-flex align-item-end justify-content-end">
               <Link to={`/edit/${item._id}`}>  <button   className =" w-200 h-100 btn ">  
                  <img src={editicon}  width="30px" height="30px" alt="" />
                  </button> </Link>
                  <button  onClick={() => handleDelete(item._id)} className =" w-200 h-100 btn ">  <img src={deleteicon}  width="25px" height="25px" alt="" />
                  </button>  
                  

                
                 </div> 
            </div> </li> </div> 
        )}  
    </div>  
  );
}

export default ProductDelete;
