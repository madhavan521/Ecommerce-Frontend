import React    from 'react';
import Navabar from '../Components/Navabar';
import { Link } from 'react-router-dom';
import '../Style/Admin.css'





const AdminPanel = () => {

     

  return (
    <div>
<Navabar />
<div className='container'>
<div className="row">
<div className="col">

<h3>Manage Admin Panels</h3>


 
       <Link to='/headerAdmin '  className='text-decoration-none'> 
         <div className="card my-4 admincomponents" >
              <h5 className='text-center my-2  '>Header Component</h5> 
           </div>
        </Link>
       <Link to='/productAdmin'  className='text-decoration-none'>  
        <div className="card my-4 admincomponents" >
              <h5 className='text-center my-2  '>Product Component</h5>
        </div>
        </Link> 
         <Link  to='/catagoryAdmin' className='text-decoration-none'>    <div className="card my-4 admincomponents">
      <h5 className='text-center my-2  '>Catagory Component</h5>
        </div></Link> 
        <Link  to='/orderAdmin' className='text-decoration-none'>    <div className="card my-4 admincomponents">
      <h5 className='text-center my-2  '>Order Component</h5>
        </div></Link> 

    
        


 

</div>
</div>
</div>
      
    </div>
  );
}

export default AdminPanel;
