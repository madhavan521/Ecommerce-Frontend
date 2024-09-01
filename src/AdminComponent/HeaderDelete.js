import React, { useContext } from 'react';
import { HeaderContext } from '../Context/HeaderContext';
import deleteicon from '../Assets/delete.png'

const HeaderDelete = () => {
    const {data,setData}=useContext(HeaderContext)

    const handleDelete=(id)=>{
      
      
        fetch(`https://ecommerce-backend-yat2.onrender.com/header/${id}`, {  
            method: "DELETE",  
            headers: {  
                "Content-type": "application/json"  
            },  
        })  
        .then(res =>   res.json())  
        .then(result => setData(result)) 
        alert("item deleted")

            setTimeout(() => {
                window.location.reload()
            }, 0);
       }
     
    

  return (
    // <div className="container">  
    <div className="">  
    <h3>Manage Header Components</h3>
        {data !== null && data.map((item) => (  
            <div className="container" key={item._id}> 
            <li className="card mt-3">
            <div className="row">
                <div className="col-6">  
                        <img src={item.image} alt="" className="" style={{ width: "30%", height: "100%" }} />  
                 </div>      
                 <div className=" col-6 my-2 d-flex align-item-end justify-content-end">
                  <button  onClick={() => handleDelete(item._id)} className =" w-200 h-100 btn ">
                  <img src={deleteicon}  width="25px" height="25px" alt="" />
                  </button>  
                 </div> 
            </div> </li> </div> 
        ))}  
    </div>  
// </div>
  );
}

export default HeaderDelete;
