import React from 'react'
import NavbarComponent from '../NavbarComponent';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router";


function Categories() {
  const [categories, setCategories] = useState([]);
  const url = "https://fakestoreapi.com/products/categories";
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  const categoriesImg = [
    "https://www.agsdevices.com/wp-content/uploads/2024/05/electronic_components_hero_image.jpg",
    "https://www.vam.ac.uk/on/demandware.static/-/Sites-VAM_Storefront/default/dw88c1556f/images/category/jewellery/jewellery_homepage_desktop.jpg",
    "https://media.gq.com/photos/65cfbf6e8aa1eb1e0bb7ecf4/master/pass/gerald-art.jpg",
    "https://www.shutterstock.com/image-photo/beautiful-women-clothes-set-isolated-260nw-2252033603.jpg",
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);  
        setLoading(false)
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className="container my-5 ">
        <h1 className="text-center mb-4">Product Categories</h1>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-danger text-center">{error}</p>}
        <div className="row mt-5">
          {categories.map((category, index) => (
            <div key={index} className="col-md-6 col-lg-6 mb-3 mt-3">
              <Link to="/" className="remove-styles">
                <img
                  src={categoriesImg[index]}
                  alt=""
                  className="w-100 category-img-height"
                />
                <div className="card rounded rounded-3 shadow-sm category-height ">
                  <div
                    className="
                
                card-body  d-flex align-items-center justify-content-center"
                  >
                    <h5 className="text-capitalize">{category}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories
