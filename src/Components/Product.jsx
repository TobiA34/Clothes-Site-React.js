import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function Product({ item }) {
  const id = useParams();

  return (
    <div className="col" key={item.id}>
      <div className="card">
        {/* Heart Icon */}
        <div className="bg-light p-3 heart d-flex align-items-center justify-content-center">
          <i className="bi bi-suit-heart fs-5"></i>
        </div>

        {/* Product Image */}
        <Link to={`/single-product/${item.id}`} className="remove-styles">
          <img
            src={item.image}
            className="card-img-top mt-2"
            alt={item.name}
            style={{ height: "200px", objectFit: "contain" }}
          />
        </Link>

        {/* Card Body */}
        <div className="card-body">
          {/* Title and Price */}
          <div className="d-flex justify-content-between">
            <h5
              className="card-title fs-5 text-truncate"
              style={{ maxWidth: "200px" }}
              title={item.title}
            >
              <strong>{item.title}</strong>
            </h5>
            <p className="card-text fs-4">
              <strong>£{item.price ? item.price.toFixed(2) : "0.00"}</strong>
            </p>
          </div>

          {/* Rating */}
          <div className="d-flex align-items-center justify-content-start mt-3 gap-2">
            <div>
              <ReactStars
                count={5}
                size={24}
                value={item.rating?.rate || 0}
                isHalf={true}
                edit={false}
                activeColor="#FFD700"
              />
            </div>
            <div>
              <p className="mb-0">({item.rating?.count || 0})</p>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="d-flex flex-column my-3">
            <span
              className="my-3 category-pill text-center p-2"
              title={`Category: ${item.category}`}
            >
              {item.category}
            </span>
            
              <a
                href="#"
                className="btn btn-light rounded-5 border border-2 border-dark w-50"
              >
                Add to Cart
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
