import React from "react";
import "./checkoutProduct.css";

function CheckoutProduct({ id, image, price, title, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="cP_image" src={image} alt="" />

      <div className="cP_info">
        <p className="cP_title">{title}</p>
        <p className="cP_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cP_rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
