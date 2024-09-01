import React, { useContext } from 'react';  
import { CatagoryContext } from '../Context/CatagoryContext'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Catagory = () => {  
    var settings = {
        infinite: true,
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

    const { catdata } = useContext(CatagoryContext);  

    // const [show ,setShow] = useState([]);

    const handleCat = (name) => {
        // console.log(name);
        // const showdata = productdata.find(item => item.category.toLowerCase().includes(name.toLowerCase()) );
        // setShow(showdata);
        // console.log(showdata);
    }

    return (  
        <>
        <hr />
        <div className='mt-3 container-fluid'>   
            <Slider {...settings}>  
                {catdata &&  
                    catdata.map((item) => (  
                        <div key={item._id}>  
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>  
                                <img 
                                    src={item.image}  
                                    alt={item.name}  
                                    width='70px'  
                                    height='70px'  
                                    style={{ border: "3px lightgreen solid", borderRadius: "50%" }}  
                                />  
                                <p className='mt-2 text-center' onClick={() => handleCat(item.name)} style={{ margin: 0 }}>
                                    {item.name}
                                </p>  
                            </div>  
                        </div>  
                    ))}  
            </Slider>
        </div> 
        <hr />
     
        </>
    );  
}  

export default Catagory;
