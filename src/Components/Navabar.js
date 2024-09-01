import React, { useContext } from 'react';
import '../Style/Header.css'
import {Link, useNavigate} from 'react-router-dom'
import carticon from '../Assets/carts.png'
import { LoginContext } from '../Context/LoginContext';
import toast, { Toaster } from 'react-hot-toast';
import ordericon from '../Assets/orders.png'
const Navabar = () => {
  const {auth,setAuth}=useContext(LoginContext)

const navigate =useNavigate()
const handleLogout=()=>{
  toast.success('Logout Sucessfully')
  setTimeout(() => {
    setAuth('Login')
  navigate('/') 
  }, 500);
 

}



  return (
    <div className='container-fluid navbars mb-3'>
    <div className="row  py-3  ">
        <div className="col-5">
        <h2 className=''> <Link to='/' className='text-decoration-none text-info'> E-Commerce</Link> </h2>
     </div>   
      <div className='col-7 '>
      <div className='d-flex justify-content-end align-item-end'>
      <Link to='/myorder' className=' me-4 mb-2 text-decoration-none text-light '>
      <img src={ordericon} alt="" width="35px" className='' /></Link>
    <Link to='/cart' className=' me-4 mb-2 text-decoration-none text-light '>
      <img src={carticon} alt="" width="35px" className='' /></Link>
      { auth === 'Login' ? ( <Link to='/login' className='text-decoration-none text-light '>
      <button className='btn btn-info mx-2 mt-1'>
     {auth} </button></Link>):(<button className='btn btn-info mx-2 mt-1' onClick={handleLogout}>{auth} </button>)
       }
       </div>
</div>
      
        </div> <Toaster   position="top-center"
  reverseOrder={false} />
    </div>
      
  );
}

export default Navabar;
