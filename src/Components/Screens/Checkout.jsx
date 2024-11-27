import React, { useState, useEffect } from "react";
import NavbarComponent from "../../Components/NavbarComponent";
import FooterComponent from "../../Components/FooterComponent";
import axios from "axios";
import AmazonImg from '../../img/amazon.jpeg'
import MasterCardImg from "../../img/mastercard.png";

import VisaImg  from "../../img/Visa.png";

function Checkout() {
  const [products, setProducts] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null); 

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (query) => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  };

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId); // Update selected button ID
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

  return (
    <div className="App">
      <div className="container-fluid vh-100 p-4">
        {/* Navbar */}
        <NavbarComponent onSearch={handleSearch} />

        {/* Main Content */}
        <div className="row d-flex gap-3 mt-5">
          {/* Cart Section */}
          <div className="col-lg-6 border border-1 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="text-start mt-4">
                <strong>Review Item and Shipping</strong>
              </h1>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center  w-70 mt-3 gap-3 my-3">
                <img
                  src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                  alt="Product"
                  className="w-40 rounded"
                />
                <div className="mt-4">
                  <h1 className="w-100">
                    <strong>Airpods- Max</strong>
                  </h1>
                  <p>
                    <strong>Color: Pink</strong>
                  </p>
                </div>
              </div>

              <div className="d-flex mt-5 flex-column align-self-center ">
                <h5>$2,500.00</h5>
                <h5>Quantity: 01</h5>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="col-lg-5 border border-1 p-4">
            <h1>
              <strong>Order Summary</strong>
            </h1>
            <div className="mt-4">
              <input
                type="text"
                className="form-control p-3 rounded rounded-4 w-75"
                placeholder="Enter Coupon Code"
              />
              <button className="btn btn-success mt-2">Apply Coupon</button>
            </div>
            <hr />

            {/* Payment Details */}
            <h1>
              <strong>Payment Details</strong>
            </h1>

            <div className="d-flex flex-column gap-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="Cash"
                />
                <label className="form-check-label" htmlFor="Cod">
                  Cash on delivery
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="shoppingCard"
                />
                <label className="form-check-label" htmlFor="shopping Card">
                  Shopping Card
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="paypal"
                />
                <label className="form-check-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="creditOrDebit"
                />
                <label className="form-check-label" htmlFor="paypal">
                  Credit or Debit
                </label>
              </div>
            </div>
            <div className="d-flex gap-2 mt-3">
              {/* Amazon Button */}
              <button
                className={`bg-none w-60 ${
                  selectedButton === "amazon" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("amazon")}
              >
                <img src={AmazonImg} alt="Amazon" className="w-70" />
              </button>

              {/* MasterCard Button */}
              <button
                className={`bg-none w-60 ${
                  selectedButton === "mastercard" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("mastercard")}
              >
                <img src={MasterCardImg} alt="MasterCard" className="w-70" />
              </button>

              {/* Visa Button */}
              <button
                className={`bg-none w-60 ${
                  selectedButton === "visa" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("visa")}
              >
                <img src={VisaImg} alt="Visa" className="w-70" />
              </button>
            </div>
            <form className="d-flex gap-3 flex-column mt-4">
              <label htmlFor="Email">
                <strong>Email</strong>
              </label>
              <input type="text" className="form-control" name="" id="" />
              <label>
                <strong>Card Holder Name</strong>
              </label>
              <input type="text" className="form-control" name="" id="" />
              <label>
                <strong>Card Holder Address</strong>
              </label>
              <input type="text" className="form-control" name="" id="" />

              <label>
                <strong>Card Holder Phone Number</strong>
              </label>
              <input type="text" className="form-control" name="" id="" />

              <label>
                <strong>Card Holder post code </strong>
              </label>
              <input type="text" className="form-control" name="" id="" />
            </form>
          </div>
        </div>
        <div className="row d-flex gap-3 mt-5">
          {/* Cart Section */}
          <div className="col-lg-6 border border-1 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="text-start mt-4">Delivery Information</h1>

              <a href="" className="btn btn-light rounded rounded-5 mt-4">
                Edit information
              </a>
            </div>

            <hr />
            <div className="form-group d-flex gap-5 align-items-center ">
              <label>Name:</label>
              <input type="text" name="" id="" className="form-control w-75 " />
            </div>
            <div className="form-group d-flex gap-5 align-items-center ">
              <label>City:</label>
              <input
                type="text"
                name=""
                id=""
                className="form-control mt-3 w-75 "
              />
            </div>
            <div className="form-group d-flex gap-5 align-items-center ">
              <label>Address:</label>
              <input
                type="text"
                name=""
                id=""
                className="form-control mt-3 w-75  "
              />
            </div>
            <div className="form-group d-flex gap-5 align-items-center ">
              <label>Post Code:</label>
              <input
                type="text"
                name=""
                id=""
                className="form-control mt-3 w-75 "
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <FooterComponent />
      </div>
    </div>
  );
}

export default Checkout;
