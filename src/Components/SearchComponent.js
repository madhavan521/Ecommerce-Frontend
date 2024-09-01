import React, { useContext, useState } from 'react';  
import { ProductContext } from '../Context/ProductContext';  
import { Link } from 'react-router-dom';

const SearchComponent = () => {  
    const { productdata } = useContext(ProductContext);  
    const [searchdata, setSearchdata] = useState([]);  

    const handleSearch = (value) => {  
       if(!value){
        setSearchdata([]);
        return ;
     }

        const searchItem = productdata.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));  
     
    //  if(!searchItem)}else{
   setSearchdata(searchItem);  
 
     
        //console.log(searchItem);  
    };  

    return (  
        <div>  
            <input    style={{border:"2px solid black"}}
                type="search"   
                className="form-control"   
                onChange={(e) => handleSearch(e.target.value)}   
                placeholder='Search The Product'   
            />  
         {  
             setSearchdata.length > 0 ? ( Array.isArray(searchdata) && searchdata.map(item => (  
                    <div key={item._id} className='productbox col-6 col-md-4 col-lg-3 mt-4' >
   <div className='card' >
   <div className='d-flex justify-content-center align-item-center'>
         <img src={item.image} className='card-image mx-4 ' alt="" width="150px" height='150px'  />
        </div>
        <Link to={`/product/${item._id}`}  > <h6  className='card-title text-center'>{item.name}</h6>
 </Link>      

         </div>  
                    </div>  
                ))  
           ):(
           setSearchdata('') ) }  
        </div>   
    );  
}  

export default SearchComponent;