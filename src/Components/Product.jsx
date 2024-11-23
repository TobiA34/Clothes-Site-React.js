import React from 'react'

function Product({item}) {
  return (
    <div>
      <div className="col" key={item.id}>
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt={item.name}
          />
          <div className="card-body border-none">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">${item.price.toFixed(2)}</p>
            </div>
            <div className="d-flex mt-3">
              <p>{item.desc}</p>
            </div>
            <div className="d-flex">
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
