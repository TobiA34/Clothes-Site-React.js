import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import { Link } from "react-router-dom";
 
function NavbarComponent({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");  

   const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query); 
    onSearch(query); 
  };

  return (
    <div>
      <header className="header">
        <div className="left">
          <span className="phone">+001234567890</span>
        </div>
        <div className="center">
          <span className="offer">Get 50% Off on Selected Items</span>
          <span className="divider">|</span>
          <a href="#" className="shop-now">
            Shop Now
          </a>
        </div>
        <div className="right">
          <select className="language">
            <option value="eng">Eng</option>
          </select>
          <select className="location">
            <option value="location">Location</option>
          </select>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light px-4 py-2">
        <div className="container-fluid">
          {/* Brand Logo */}
          <a className="navbar-brand" href="#">
            <img
              src="https://img.icons8.com/color/48/000000/shopping-cart--v1.png"
              alt="Logo"
            />
            <span className="fw-bold">
              <Link to="/">Trendify</Link>
            </span>
          </a>

          {/* Toggle Button for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  What's New
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Delivery
                </a>
              </li>
            </ul>

            {/* Search Bar */}
            <form
              className="d-flex me-4 flex-grow-1 flex-lg-grow-0"
              role="search"
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Product"
                aria-label="Search"
                value={searchQuery}
                onChange={handleInputChange}
              />
              <button className="btn btn-search" type="button">
                <i className="bi bi-search"></i>
              </button>
            </form>

            {/* Account and Cart Icons */}
            <div className="navbar-icons d-flex align-items-center">
              <a href="#" className="me-3 d-flex align-items-center">
                <i className="bi bi-person"></i> <span>Account</span>
              </a>
              <a href="#" className="d-flex align-items-center">
                <Link to="/cart">
                  <i className="bi bi-cart"></i> Cart
                </Link>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
