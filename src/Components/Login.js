import React, { useContext, useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import Navabar from './Navabar';
import { LoginContext } from '../Context/LoginContext';
import {Toaster,toast} from 'react-hot-toast'

const Login = () => {  
  const {setAuth}=useContext(LoginContext)
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  
    const navigate = useNavigate();  
    const handleSubmit = (e) => {  
        e.preventDefault(); 
        if (email === 'admin@gmail.com' && password === 'product') {  
            
         toast.success('Successfully login') 
         setTimeout(() => {
        navigate('/admin'); 
            setAuth('Logout')   
    
         }, 500);
         
         
        } else {  
  
            toast.error("Enter the Correct Username and Password")
        }  
    };  

    return (  <><Navabar />
           <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <div className="container d-flex align-items-center justify-content-center ">  
            <div className="card shadow-sm p-4" style={{ width: '100%', maxWidth: '400px' }}>  
                <h4 className="text-center">Login Page</h4>  
                    <div className="mb-3">  
                        <label htmlFor="email" className="form-label">Email:</label>  
                        <input  
                            type="email"  
                            id="email"  
                            className="form-control"  
                            value={email}  
                            onChange={(e) => setEmail(e.target.value)}  
                            required  
                            placeholder="Enter your email"  
                        />  
                    </div>  
                    <div className="mb-3">  
                        <label htmlFor="password" className="form-label">Password:</label>  
                        <input  
                            type="password"  
                            id="password"  
                            className="form-control"  
                            value={password}  
                            onChange={(e) => setPassword(e.target.value)}  
                            required  
                            placeholder="Enter your password"  
                        />  
                    </div>  
                    <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit
}>Login</button>  
            </div>  
        </div>  </>
    );  
};  

export default Login