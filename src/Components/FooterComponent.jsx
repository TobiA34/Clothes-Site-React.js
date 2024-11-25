import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-3">
      <div className="container">
        <div className="row">
          {/* Quick Links Section */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li className="text-white">Phone: +1 (123) 456-7890</li>
              <li className="text-white">Email: support@store.com</li>
              <li className="text-white">
                Address: 123 Fashion St, New York, NY
              </li>
            </ul>
          </div>

          {/* Follow Us and Payment Methods Section */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 mb-3">
              {/* Bootstrap Social Icons */}
              <a href="#" className="text-white">
                <i
                  className="bi bi-facebook text-white"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a href="#" className="text-white">
                <i
                  className="bi bi-twitter text-white"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a href="#" className="text-white">
                <i
                  className="bi bi-instagram text-white"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a href="#" className="text-white">
                <i
                  className="bi bi-pinterest text-white"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
            </div>

            <h5>We Accept</h5>
            <div className="d-flex gap-3">
              {/* Payment Icons using Bootstrap Icons */}
              <i
                className="bi bi-credit-card"
                style={{ fontSize: "2rem", color: "white" }}
                title="Visa"
              ></i>
              <i
                className="bi bi-credit-card-2-back"
                style={{ fontSize: "2rem", color: "white" }}
                title="MasterCard"
              ></i>
              <i
                className="bi bi-paypal text-white"
                style={{ fontSize: "2rem", color: "white" }}
                title="PayPal"
              ></i>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">© 2024 YourStore. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
