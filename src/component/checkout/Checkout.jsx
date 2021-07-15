import React from "react";
import "./checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkoutAd"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
      <div>
        <h2 className="checkoutTitle">Your Shopping Cart</h2>
      </div>
      </div>

      <div className="checkoutRight">
          <h2>Subtotal</h2>
      </div>
    </div>
  );
}

export default Checkout;
