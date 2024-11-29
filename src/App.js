 import HeroCard from "./Components/HeroCard";
import NavbarComponent from "./Components/NavbarComponent";
import FilterComponent from "./Components/FilterComponent";
import { useState, useEffect } from "react"; 
import { AuthProvider } from './context/AuthContext';  

import Product from "./Components/Product";
import axios from "axios";
import FooterComponent from "./Components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Screens/Home";
import ProductsDetailed from "./Components/Screens/ProductsDetailed.jsx";
import Cart from "./Components/Screens/Cart";
import Checkout from "./Components/Screens/Checkout";
import Login from "./Components/Screens/Login";
import Register from "./Components/Screens/Register";
import Account from "./Components/Screens/Account";
import Categories from "./Components/Screens/Categories";


function App() {
  const [products, setProducts] = useState([]); // Original product list
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered product list

 const handleSearch = (query) => {
   const results = products.filter(
     (product) => product.title.toLowerCase().includes(query.toLowerCase())
   );
   setFilteredProducts(results);  
 };

   useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);  
        setFilteredProducts(response.data);  
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);  
   const handleFilterOrSort = (updatedProducts) => {
    setFilteredProducts(updatedProducts);   
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/categories" element={<Categories />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {/* Product Details Page */}
          <Route path="/single-product/:id" element={<ProductsDetailed />} />

          {/* 404 Page */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
