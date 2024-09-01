import React from 'react';
import Header from './Header';
import Navabar from './Navabar';
import Catagory from './Catagory';
import Product from './Product';
import Footer from './Footer';
import SearchComponent from './SearchComponent'

const Home = () => {
  return (
    <div>
    <Navabar />
      <Header />
      <Catagory />
      <SearchComponent />
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
