import "./App.css"; // Custom styles
import HeroCard from "./Components/HeroCard";
import NavbarComponent from "./Components/NavbarComponent";
import FilterComponent from "./Components/FilterComponent";
import { useState, useEffect } from "react"; // Use `useEffect` for API calls
import Product from "./Components/Product";
import axios from "axios";
import FooterComponent from "./Components/FooterComponent";

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
    <div className="App">
      <div className="container-fluid vh-100 p-4">
        {/* Navbar */}
        <NavbarComponent onSearch={handleSearch} />
        {/* Pass handleSearch as prop */}
        {/* Hero Card */}
        <HeroCard />
        {/* Filter */}
        <FilterComponent
          products={products}  
          onFilterOrSort={handleFilterOrSort}  
        />
        {/* Product List Header */}
        <h1 className="text-start mt-4">Latest Products</h1>
        {/* Card Grid */}
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <Product key={item.id} item={item} />  
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
