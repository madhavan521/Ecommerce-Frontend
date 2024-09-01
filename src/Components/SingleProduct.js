import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';
import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Style/SingleProduct.css'
import Navabar from './Navabar';
import SinglepageIcon from './SinglepageIcon';
import Product from './Product';
import { CartContext } from '../Context/CartContext';
import {Toaster,toast} from 'react-hot-toast'
import Comments from './Comments';




const SingleProduct = () => {
  const {handleCart}=useContext(CartContext)

    const {productdata}=useContext(ProductContext)

    const {id}=useParams()
       
    const single =  productdata.find(item=>item._id === id)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };

  return (
    <>
 
    
    
    <Navabar />
    
       <Toaster
  position="top-center"
  reverseOrder={false}
/>
    
    <div className='container'> 
    <div className="row">
    <div  className="col mt-2 ">
    <Slider {...settings}>       
      <img src={single.image} alt=""  id='productimage' height='350px'/>
         <img src={single.oneimage} alt=""  id='productimage' height='350px' />
         <img src={single.twoimage} alt=""  id='productimage' height='350px' />
          </Slider>  </div>

     <hr  className='my-4'/>
      <div className="col ">
              <h2>{single.name}</h2>
               <p>{single.description}</p>
               <p className= ' d-flex d-inline'><h5>Price : </h5><h5 className='text-danger ms-1'> {single.price}</h5>
   </p> </div>
<div className='d-flex d-inline row'>
   <span className= 'col-8 d-flex d-inline'><h5>Order now  : </h5> <h5 className='price ms-2'> {single.price}</h5>    <h5 className='text-danger ms-3'> {single.discount}</h5>
   </span> 
   <span className= 'col-4 d-flex d-inline justify-content-end align-item-end'><h5>Stocks: </h5>
    <h5 className=' ms-2'> {single.stock}</h5> 
    
   </span></div>
<div className="row my-3">
<div className='col-6 d-flex d-inline justify-content-start align-item-start'>
    <button className=' btn btn-warning w-100' onClick={()=>{toast.success('Item Added Successfully !! ');
   handleCart(single._id);}}>Add to Cart</button></div>
    <div className='col-6 d-flex d-inline justify-content-end align-item-end'>
  <Link to={`/order/${single._id}`} className=' btn btn-success w-100' >Order Now</Link>  
</div></div>


<SinglepageIcon />
 <div className='mt-2'>
  <h3 className='mt-1'>Features</h3> 
     <p>{single.features}</p>

 </div>
 <hr />
 <div>
  <h5>Comments .....</h5>
  <Comments />
 </div>
 <hr  className='my-2' />
 <div >
<h3>Related Products :</h3>
  <Product />
   
 </div>


</div>
      
    </div></>
  );
}

export default SingleProduct;
