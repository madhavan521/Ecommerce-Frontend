import React, { useContext } from 'react';
import { CatagoryContext } from '../Context/CatagoryContext';
import deleteicon from '../Assets/delete.png'

const CatagoryDelete = () => {
    const { catdata ,setCatdata}=useContext(CatagoryContext)
   const handleDelete=(id)=>{

        fetch(`https://ecommerce-backend-yat2.onrender.com/cat/${id}`,
            {
                method:"DELETE",
                headers:{
                    "Content-Type": "application/json"
                },
            } )
        .then(res=>res.json())
        .then(data=>setCatdata(data))
    alert('Item Deleted')
    setTimeout(() => {
        window.location.reload()
        
    }, 0);
        

    }

  return (

 <div className="">  
    <h3>Manage Catagory Components</h3>
   { Array.isArray(catdata)  && catdata.map(item=>
        <div className="container" key={item._id}> 
            <li className="card mt-3">
            <div className="row">
                <div className="col-5 "> 
                        <img src={item.image} alt="" className="" style={{ width: "30%", height: "80%" }} /> 
                        
                 </div>  
                  <div className=' col-3 mt-5'><p className='text-center'>{item.name}</p> </div> 
    
                 <div className=" col-4 my-2 d-flex align-item-end justify-content-end">
                  <button  onClick={() => handleDelete(item._id)} className =" w-200 h-100 btn ">
                  <img src={deleteicon}  width="25px" height="25px" alt="" />
                  </button>  
                 </div> 
            </div> </li> </div> 
        )}  
    </div>  
// </div>
  );
}

export default CatagoryDelete;
