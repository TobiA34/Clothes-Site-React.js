import React from 'react'

function CartCard() {
  return (
    <div>
      <div className="row d-flex justify-content-between">
        <div>
          <div>
            <img
              src="https://www.collinsdictionary.com/images/full/apple_158989157.jpg"
              alt=""
            />
            <div>
              <h1>Cardigan</h1>
              <p>Green: M</p>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex">
            <button className="border">-</button>
            <p>1</p>
            <button className="border">+</button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default CartCard
