import React from 'react';
import { HeaderProvider } from './Context/HeaderContext';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import HeaderAdmin from './AdminComponent/HeaderAdmin';
import { CatagoryContextProvider} from './Context/CatagoryContext';
import CatagoryAdmin from './AdminComponent/CatagoryAdmin';
import ProductAdmin from './AdminComponent/ProductAdmin';
import {ProductContextProvider} from './Context/ProductContext';
import SingleProduct from './Components/SingleProduct';
import AdminPanel from './AdminComponent/AdminPanel';
import ProductEdit from './AdminComponent/ProductEdit';
import Login from './Components/Login';
import { CartContextProvider } from './Context/CartContext';
import Cart from './Components/Cart';
import { LoginContextProvider } from './Context/LoginContext';
import About from './Components/About';
import Order from './Components/Order';
import { OrderContextProvider } from './Context/OrderContext';
import YourOrder from './Components/YourOrder';
import OrderAdmin from './AdminComponent/OrderAdmin';

const App = () => {
  return (
    <LoginContextProvider>
    <ProductContextProvider>  
<OrderContextProvider >
  <CartContextProvider>

    <HeaderProvider>
    <CatagoryContextProvider>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/headerAdmin' element={<HeaderAdmin />} />
            <Route path="/catagoryAdmin" element={<CatagoryAdmin />}/>
            <Route path='/productAdmin' element={<ProductAdmin />} />
            <Route path='/product/:id' element={<SingleProduct />} />
            <Route path='/admin' element={<AdminPanel />} />
            <Route path='/edit/:id' element={<ProductEdit />} />

            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/about" element={<About />}/>
            <Route path='/order/:id' element={<Order/>}/>
            <Route path='/myorder' element={<YourOrder />}/>
            <Route path='/OrderAdmin' element={<OrderAdmin />}/>
        </Routes>
        </BrowserRouter>
  </CatagoryContextProvider>
    </HeaderProvider>
    </CartContextProvider>
    </OrderContextProvider>
    </ProductContextProvider>
    </LoginContextProvider>
  );
}

export default App;
