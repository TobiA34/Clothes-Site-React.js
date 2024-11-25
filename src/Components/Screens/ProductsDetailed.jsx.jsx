import React, { useState, useEffect } from "react";
import HeroCard from "../../Components/HeroCard";
import ReactStars from "react-rating-stars-component";

import NavbarComponent from "../../Components/NavbarComponent";
import FilterComponent from "../../Components/FilterComponent";
import axios from "axios";
import FooterComponent from "../../Components/FooterComponent";
import { useParams } from "react-router";

function ProductsDetailed() {
  const [product, setProduct] = useState(null);
  const [filteredProduct, setFilteredProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    console.log("Product ID:", id);  
  }, [id]);

   const handleSearch = (query) => {
    if (product && product.title.toLowerCase().includes(query.toLowerCase())) {
      setFilteredProduct(product);
    } else {
      setFilteredProduct(null);
    }
  };

   useEffect(() => {
    if (id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          console.log("Fetched product data:", response.data); // Log the product data
          setProduct(response.data);
          setFilteredProduct(response.data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    }
  }, [id]);  

  return (
    <div className="App">
      <div className="container-fluid vh-100 p-4">
        <NavbarComponent onSearch={handleSearch} />
        <HeroCard />

        {product ? (
          <div className="row d-flex p-4">
            <p className="text-start mt-4 h7">
              Deliveries / Clothes / Shop for clothes /
              <strong>
                <span className="truncated-text">{product.title}</span>
              </strong>
            </p>

            <div className="col-lg-7">
              <img
                src={product.image}
                alt={product.title}
                className="p-5 "
                style={{ width: "98%", objectFit: "contain" }}
              />
            </div>
            <div className="col-lg-5 align-self-start mt-5">
              <h2 className="display-5">{product.title}</h2>
              <p>{product.description}</p>
              <div className="d-flex align-items-center gap-2">
                <ReactStars
                  count={5}
                  size={24}
                  value={product.rating?.rate || 0}
                  isHalf={true}
                  edit={false}
                  activeColor="#FFD700"
                />
                <p className="mb-0">({product.rating?.count || 0})</p>
              </div>

              <p className="fs-3">
                <strong>Price: £{product.price.toFixed(2)}</strong>
              </p>
              <a
                href="#"
                className="btn btn-light rounded-5 border border-2 border-dark w-50"
              >
                Add to Cart
              </a>
              {/* Delivery */}
              <div className="d-flex flex-column mt-5 bg-light p-2">
                <div className="d-flex gap-3 align-items-start">
                  <i className="bi bi-box2-fill fs-3"></i>
                  <p className="fs-3">
                    <strong>Free Delivery</strong>
                  </p>
                </div>
                <div>
                  <p className="fs-4">
                    Ensure your postal code for free delivery
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column  mt-1 bg-light p-2">
                <div className="d-flex gap-3 align-items-start">
                  <i className="bi bi-box2-fill fs-3"></i>
                  <p className="fs-3">
                    <strong>Return Delivery</strong>
                  </p>
                </div>
                <div>
                  <p className="fs-4">Free 30 days Delivery Returns Details.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading product...</p>
        )}

        <FooterComponent />
      </div>
    </div>
  );
}

export default ProductsDetailed;
