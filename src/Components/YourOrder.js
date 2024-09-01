import React, { useContext } from 'react';
import { OrderContext } from '../Context/OrderContext';
import Navabar from './Navabar';
import deleteicon from '../Assets/delete.png'
import { Toaster ,toast} from 'react-hot-toast';

const YourOrder = () => {
    const {order,setOrder}= useContext(OrderContext)
    //console.log(order)
const handleRefresh=()=>{
    window.location.reload()
}
const handleDelete=(id)=>{ fetch(`https://ecommerce-backend-yat2.onrender.com/order/${id}`,
    {
        method:"DELETE",
        headers:{
            "Content-Type": "application/json"
        },
    } )
.then(res=>res.json())
.then(data=>setOrder(data))
// toast.success('Item Deleted')
setTimeout(() => {
window.location.reload()

}, 500);}


  return (
    <div>
    <Navabar />
    <Toaster   position="top-center"
  reverseOrder={false} />

    <div className='row d-flex d-inline'>
        <h4 className='col-6 '>Your Orders</h4> 
           <div className="col-6 d-flex justify-content-center align-item-center">  
          <button className=' btn btn-info w-50 ' onClick={handleRefresh}>Refresh</button> 
       </div> </div> 
        <hr />
      {
          order === null  ? (<p>No Product Odered</p>):(
     
 Array.isArray(order)  && order.map(item=>
        <div className="container" key={item._id}> 
            <li className="card mt-3">
            <div className="row">
                <div className="col-5 "> 
                        <img src={item.image} alt="" className="" style={{ width: "30%", height: "90%" }} /> 
                                              
 </div>  
                  <div className=' col-3 mt-5'> 

                  <p className='text-center'>{item.name}</p> </div> 
    
                  <div className=" col-4 my-2 d-flex align-item-end justify-content-end">

                  <button  onClick={() =>{toast.success("Successfully Cancelled Order"); handleDelete(item._id)}} className =" w-200 h-100 btn ">  <img src={deleteicon}  width="25px" height="25px" alt="" />
                  </button>  
                  

                
                 </div> 
            </div> </li> </div>)
      )}
    </div>
  );
}

export default YourOrder;
