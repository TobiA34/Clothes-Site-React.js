import {useState} from 'react'
import ReactStars from "react-rating-stars-component";
function Product({item}) {
 
  return (
    <div>
      <div className="col" key={item.id}>
        <div className="card">
          <div className="bg-light p-3  heart d-flex align-items-center justify-content-center">
            <i className="bi bi-suit-heart fs-5"></i>
          </div>
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt={item.name}
          />
          <div className="card-body border-none">
            <div className="d-flex justify-content-between">
              <h5 className="card-title fs-4">
                <strong>{item.name}</strong>
              </h5>
              <p className="card-text fs-4">
                <strong>{item.price.toFixed(2)}</strong>$
              </p>
            </div>
            <div className="d-flex mt-3 flex-column align-items-start">
              <p>{item.desc}</p>
              <ReactStars
                size={24}
                value={item.rating} // this is the value for filled stars
                activeColor="#FFD700"
              />
            </div>

            <div className="d-flex my-3">
              <a
                href="#"
                className="btn btn-light rounded-5 border border-2 border-dark"
              >
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product
