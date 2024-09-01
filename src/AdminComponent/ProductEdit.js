import React, { useEffect, useState } from 'react';  
import Navabar from '../Components/Navabar';  
import { Link, useNavigate, useParams } from 'react-router-dom';  

const ProductEdit = () => {  
    const navigate = useNavigate();  
    const { id } = useParams();  
    
    const [name, setName] = useState('');  
    const [image, setImage1] = useState('');  
    const [oneimage, setImage2] = useState('');  
    const [twoimage, setImage3] = useState('');  
    const [description, setDescription] = useState('');  
    const [price, setPrice] = useState('');  
    const [discount, setDiscount] = useState('');  
    const [category, setCategory] = useState('');  
    const [features, setFeatures] = useState('');  
    const [stock, setStock] = useState('');  

    useEffect(() => {  
        fetch(`https://ecommerce-backend-yat2.onrender.com/productdata/${id}`)  
            .then(res => res.json())  
            .then(data => {  
                setName(data.name);  
                setImage1(data.image);  
                setImage2(data.oneimage);  
                setImage3(data.twoimage);  
                setDescription(data.description);  
                setPrice(data.price);  
                setDiscount(data.discount);  
                setCategory(data.category);  
                setFeatures(data.features);  
                setStock(data.stock);  
            })  
            .catch(err => console.error("Fetch error:", err));  
    }, [id]);  

    const handleUpdate = (e) => {  
        e.preventDefault(); 
        
        const data = {  
            image,  
            oneimage,  
            twoimage,  
            description,  
            name,  
            category,  
            stock,  
            discount,  
            price,  
            features,  
        };  

        fetch(`https://ecommerce-backend-yat2.onrender.com/productdata/${id}`, {  
            method: "PUT",  
            headers: {  
                "Content-Type": "application/json"  
            },  
            body: JSON.stringify(data)  
        })  
        .then(res =>  res.json())  
        .then(() => {  
            alert('Item updated successfully');  
    
            navigate('/productAdmin');  
        })  
         
    }  

    return (  
        <>   
            <Navabar />  
            <div className='my-4'>  
                <Link to='/admin' className=''>  
                    <h6 className='text-center'> Back To AdminPanel </h6>  
                </Link>  
            </div>  
            <h3>Edit Product</h3>  
            <div className='d-flex justify-content-center align-items-center'>   
                <div className='card py-3 my-3' style={{ width: "600px" }}>  
                        <label className='form-label mx-3'>Product Name  
                            <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} required />  
                        </label>  
                        <br />  
                        <label className='form-label mx-3'>Image1 Url  
                            <input type="text" className='form-control' value={image} onChange={(e) => setImage1(e.target.value)} required />  
                        </label>  
                        <br />  
                        <label className='form-label mx-3'>Image2 Url  
                            <input type="text" className='form-control' value={oneimage} onChange={(e) => setImage2(e.target.value)} required />  
                        </label>  
                        <br />  
                        <label className='form-label mx-3'>Image3 Url  
                            <input type="text" className='form-control' value={twoimage} onChange={(e) => setImage3(e.target.value)} required />  
                        </label>  
                        <br />  
                        <label className='form-label my-3 mx-3'>Description  
                            <input type="text" className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} required />  
                        </label>  
                        <br />  
                        <label className='form-label mx-3'>Product Features  
                            <input type="text" className='form-control' value={features} onChange={(e) => setFeatures(e.target.value)} required />  
                        </label>  
                        <br />  
                        <label className='form-label mx-3'>Product Price  
                            <input type="number" className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} required />  
                        </label>  
                        <br />  
                        <label className='form-label mx-3'>Product Discount  
                            <input type="number" className='form-control' value={discount} onChange={(e) => setDiscount(e.target.value)} required />  
                        </label>  
                        <br />  
                        <label className='form-label mx-3'>Product Stocks  
                            <input type="number" className='form-control' value={stock} onChange={(e) => setStock(e.target.value)} required />  
                        </label>  
                        <br />  
                        <label className='form-label mx-3'>Product Category  
                            <input type="text" className='form-control' value={category} onChange={(e) => setCategory(e.target.value)} required />  
                        </label>  
                        <br />  
                        <div className='d-flex justify-content-center'>  
                            <button type="submit" onClick={handleUpdate} className='btn btn-success w-40 h-60'>Update Item</button>  
                        </div>  
           
                </div>   
            </div>  
            <hr />  
        </>  
    );  
}  

export default ProductEdit;