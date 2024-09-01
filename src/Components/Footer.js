import React from 'react';
import '../Style/Header.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-12 navbars">
        <ul className='d-inline d-flex justify-content-between mt-3'>
          <Link  className='text-decoration-none'  to=''> <li className=' me-2 my-3 d-flex justify-content-start align-item-start'><bold className='text-dark'>Home</bold></li></Link>
         <li className=' me-2 my-3 d-flex justify-content-center align-item-center'><bold> <a href='mailto:cmadhavan521@gmail.com' className='text-dark text-decoration-none'>Contact</a> </bold></li>
          <Link className='text-decoration-none'    to='/about'> <li className=' me-2 my-3 d-flex justify-content-end align-item-end'><bold className='text-dark'>About us</bold></li></Link> 
        </ul>
         
        </div>
      </div>
    </div>
  );
}

export default Footer;
