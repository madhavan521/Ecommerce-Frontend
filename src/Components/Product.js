import React, { useContext } from 'react';
import {ProductContext} from '../Context/ProductContext';
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Product = () => { 
    const {productdata}=useContext(ProductContext)
    //console.log(productdata)
    const handleClick=()=>{
      setTimeout(() => {
        // window.location.reload()
        window.scrollTo({
          top:0,behavior:'smooth'

        })

      },0);
    }
   
          

  return (
    <div className='container-fluid mt-3'>
    <div className="row pt-3  ">
    { 
        Array.isArray(productdata) && productdata.map(item=>
              <div key={item._id} className='productbox col-6 col-md-4 col-lg-4 mt-4' >
   <div className='card' >
   <div className='d-flex justify-content-center align-item-center'>
         <img src={item.image} className='card-image mx-4 ' alt="" width="150px" height='150px'  />
        </div>
        <Link to={`/product/${item._id}`}  > <h6 onClick={handleClick} className='card-title text-center'>{item.name}</h6>
 </Link>     
         </div>

  </div> )
    }

      </div> 


    </div>
  );
}

export default Product;
