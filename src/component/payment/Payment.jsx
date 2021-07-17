import React, { useState, useEffect } from "react";
import { useStateValue } from "../../Context/StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import axios from "../../API/axios";
import "./payment.css";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../../Context/Reducer";
import { element } from "prop-types";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  // Access web browser history
  const history = useHistory();
  // Hooks we're using from stripes
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  // stripe secret is what we need from stripe when we want to make a payment we use the secret to run by the card
  const [clientSecret, setClientSecret] = useState(true);

  // runs when payment component loads as well as when any details in the [basket] change
  // Whenever basket changes it will make this request and will update secret which allows us to charge customer correct amount
  useEffect(() => {
    // generate the secret which allows us to charge a customer (Whenever basket changes we need to get a new secret)
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // * 100 because Stripe expects the total in currencies subunits ex cents
        // see index.js line 20, ?total = query param
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);
  console.log('secret!!!!', clientSecret)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    // uses secret
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET'
        })
        // swap page
        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card info
    // If event is empty disable button
    setDisabled(e.empty);
    // If theirs in error show error otherwise show nothing
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="paymentAddress">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="paymentItems">
            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>

        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Payment Method</h3>
          </div>
          <div className="paymentDetails">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="paymentPriceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
