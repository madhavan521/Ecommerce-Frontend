import React from 'react';
import img1 from '../Assets/smartphone.png'
import img2 from '../Assets/free-delivery.png'
import img3 from '../Assets/cash-on-delivery.png'
import img5 from '../Assets/maintenance.png'
import img4 from '../Assets/shield.png'
import img6 from '../Assets/offer.png'
import Slider from 'react-slick';
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const SinglepageIcon = () => {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
            slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <div className='container'>
    <hr />
     <div className="col ">
     <Slider {...settings}>
 <li className=''>
 <img src={img1} alt=""   width='50px' height='50px' /> 
  <p className='text-info'>    7 days Replacement </p></li>
 <li  className='ms-2'><img src={img2} alt=""   width='50px' height='50px' />  
 <p className='text-info'>Free Delivery </p></li>
 <li  className='ms-2'><img src={img3} alt=""   width='50px' height='50px' />
   <p className='text-info'>Cash on Delivery </p></li>
 <li  className='ms-2'><img src={img4} alt=""   width='50px' height='50px' /> 
  <p className='text-info'>Warrent </p></li>
 <li  className='ms-2'><img src={img5} alt=""   width='50px' height='50px' /> 
  <p className='text-info'>Free Installation </p></li>
 <li  className='ms-2'><img src={img6} alt=""   width='50px' height='50px' /> 
  <p className='text-info'>Offers and Discounts </p></li>
 
</Slider>

 </div>
      <hr />
    </div>
  );
}

export default SinglepageIcon;
