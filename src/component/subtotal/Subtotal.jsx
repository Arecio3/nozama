import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../Context/StateProvider';
import { getBasketTotal } from "../../Context/Reducer";
import "./subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}):
              <strong>{` ${value} `}</strong>
            </p>
            <small className="subtotalGift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Go Checkout</button>
    </div>
  );
}
export default Subtotal;
