import React, { useContext } from 'react';
import { HeaderContext } from '../Context/HeaderContext';
import Slider from "react-slick";
import '../Style/Header.css'
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Header = () => {
    const {data}=useContext(HeaderContext)

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
  return (
    <div>
    <div className="container-fluid">
    <div className="row " >
      <div className="col ">

     <Slider {...settings}>
    {
     data && data.map((item)=>

          <div  key={item.id}   >
          <div classname="d-flex justify-content-center align-item-center">
            <img src={item.image} alt="" width='100%' height='300px'  />
      </div>   </div>   
     
      )
    }</Slider> </div>
    </div>
     </div>
    </div>
  );
}

export default Header;
