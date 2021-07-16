import React from "react";
import { useStateValue } from "../../Context/StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import Test from '../../images/product3.jpg'
import Subtotal from "../subtotal/Subtotal";
import "./checkout.css";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(user)

  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkoutAd"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
      <div>
        <h3>Hello, <span className='userTitle'>{user?.email.substring(0, user.email.lastIndexOf("@"))}</span></h3>
        <h2 className="checkoutTitle">Your Shopping Basket</h2>
        {basket?.map((item, i) => (
          <CheckoutProduct 
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          key={i}
          />
        ))}
      </div>
      </div>

      <div className="checkoutRight">
          <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
