import React from "react";
import Product1 from "../../images/product1.jpg";
import "./product.css";

function Product() {
  return (
    <div className="product">
      <div className="productInfo">
        <p>Timeless Laws of Development:</p>
        <p className="productPrice">
          <small>$</small>
          <strong>22.95</strong>
        </p>
        <div className="productRating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>

      <img src={Product1} alt="" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
