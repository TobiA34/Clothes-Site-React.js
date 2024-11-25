import React, { useState } from "react";

function FilterComponent({ products, onFilterOrSort }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Extract unique categories
  const uniqueCategories = [...new Set(products.map((item) => item.category))];

  // Handle Sorting
  const handleSort = (criteria) => {
    let sortedProducts = [...products]; // Create a copy of the product list
    if (criteria === "priceLowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (criteria === "priceHighToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (criteria === "highestRated") {
      sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (criteria === "lowestRated") {
      sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
    }
    onFilterOrSort(sortedProducts); // Update the filtered list in App
  };

  // Handle Category Filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category); // Set the current selected category
    const filteredProducts = category
      ? products.filter((item) => item.category === category)
      : products; // Show all if no category is selected
    onFilterOrSort(filteredProducts); // Update the filtered list in App
  };

  return (
    <div >
      <div className="d-flex justify-content-between mt-5">
        {/* Filter and Sort Dropdowns */}
        <div className="d-flex gap-4">
          {/* Price Filter */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle rounded rounded-5"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Price
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleSort("priceLowToHigh")}
                >
                  Low to High
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleSort("priceHighToLow")}
                >
                  High to Low
                </button>
              </li>
            </ul>
          </div>

          {/* Review Filter */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle rounded rounded-5"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Review
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleSort("highestRated")}
                >
                  Highest Rated
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleSort("lowestRated")}
                >
                  Lowest Rated
                </button>
              </li>
            </ul>
          </div>

          {/* Category Filter */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle rounded rounded-5"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </button>
            <ul className="dropdown-menu">
              {uniqueCategories.map((category, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item"
                    onClick={() => handleCategoryFilter(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleCategoryFilter("")}
                >
                  All Categories
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Sort By Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle rounded rounded-5"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort by
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleSort("priceLowToHigh")}
              >
                Price (Low to High)
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleSort("priceHighToLow")}
              >
                Price (High to Low)
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleSort("highestRated")}
              >
                Highest Rated
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleSort("lowestRated")}
              >
                Lowest Rated
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
