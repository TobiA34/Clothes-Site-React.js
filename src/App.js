 import HeroCard from "./Components/HeroCard";
import NavbarComponent from "./Components/NavbarComponent";
import FilterComponent from "./Components/FilterComponent";
import { useState, useEffect } from "react"; // Use `useEffect` for API calls
import Product from "./Components/Product";
import axios from "axios";
import FooterComponent from "./Components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Screens/Home";
import ProductsDetailed from "./Components/Screens/ProductsDetailed.jsx";

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
     <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Product Details Page */}
        <Route path="/single-product/:id" element={<ProductsDetailed />} />

        {/* 404 Page */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
