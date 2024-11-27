import React, { useState, useEffect } from "react";
import NavbarComponent from "../../Components/NavbarComponent";
import FooterComponent from "../../Components/FooterComponent";
import { Link } from "react-router-dom";
import axios from "axios";

function Cart({ }) {
  const [cartDetails, setCartDetails] = useState(null); // Holds the enriched cart data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const userId = 1;

  const deleteCart = () => {
     
  }

  useEffect(() => {
    const fetchCartDetails = async () => {
      try {
         const cartResponse = await axios.get(
          `https://fakestoreapi.com/carts/${userId}`
        );
        const cart = cartResponse.data;

         const productRequests = cart.products.map((product) =>
          axios.get(`https://fakestoreapi.com/products/${product.productId}`)
        );

        const productResponses = await Promise.all(productRequests);

         const enrichedProducts = productResponses.map((response, index) => {
          const productDetails = response.data;
          const quantity = cart.products[index].quantity;

          return {
            ...productDetails,
            quantity,
          };
        });

         setCartDetails({
          userId: cart.userId,
          date: cart.date,
          products: enrichedProducts,
        });

        setLoading(false); 
      } catch (err) {
        console.error("Error fetching cart details:", err);
        setError("Failed to fetch cart details. Please try again later.");
        setLoading(false);
      }
    };

    fetchCartDetails();
  }, [userId]); 

  if (loading) {
    return <p>Loading cart details...</p>;
  }
 
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="App">
      <div className="container-fluid vh-100 p-4">
        {/* Navbar */}
        <NavbarComponent />

        <div className="row d-flex gap-3 mt-5">
          {/* Cart Details */}
          <div className="col-lg-7 border border-1">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="text-start mt-4">Cart</h1>
              <strong>
                <i className="bi bi-trash3 mt-4"> Remove All</i>
              </strong>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <h4>Product</h4>
              <h4>Quantity</h4>
              <h4>Price</h4>
            </div>
            <hr />
            {/* Display Products */}
            {cartDetails.products.map((product) => (
              <div
                className="d-flex justify-content-between align-items-center mb-4"
                key={product.id}
              >
                {/* Product Details */}
                <div className="d-flex flex-row align-items-start w-40 gap-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-25 rounded"
                  />
                  <div>
                    <p className="mb-1">{product.title}</p>
                    <p className="text-muted">Category: {product.category}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="d-flex flex-row align-items-center gap-2">
                  <button className="btn btn-light border border-dark border-2">
                    -
                  </button>
                  <div>{product.quantity}</div>
                  <button className="btn btn-light border border-dark border-2">
                    +
                  </button>
                </div>

                {/* Product Price */}
                <div>
                  <h5>${(product.price * product.quantity).toFixed(2)}</h5>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="col-lg-4 p-4 border border-1 h-50">
            <h2>
              <strong>Order Summary</strong>
            </h2>
            <div className="mt-4">
              <p>Subtotal: ${calculateSubtotal(cartDetails.products)}</p>
              <p>Discount: $0.00</p>
              <p>
                <strong>
                  Total: ${calculateSubtotal(cartDetails.products).toFixed(2)}
                </strong>
              </p>
              <Link
                to="/checkout"
                className="btn btn-dark text-light w-100 mt-3"
              >
                Checkout Now
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <FooterComponent />
      </div>
    </div>
  );
}

// Helper function to calculate subtotal
const calculateSubtotal = (products) => {
  return products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
};

export default Cart;
