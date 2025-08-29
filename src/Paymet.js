import React, { useState,useEffect } from "react";
import "./payment.css";
import { useStateValue } from "./StateProvider";
import Basket from "./Basketdis";
import { Link,useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { Button } from "react-bootstrap";
import axios from "./axios"
import {db} from "./firebase"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const navigate=useNavigate();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeded, setSucceded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  function gettortal() {
    let val = 0;
    basket.forEach((itemh) => {
      val = val + itemh.price;
    });
    return val;
  }
  useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${gettortal() * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log('The secret is >>>',clientSecret);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    }).then(({paymentIntent})=>{
        //paymentIntent=payment confirmation
        // db.
        // collection('users').
        // doc(user?.uid)
        // .collection('orders')
        // .doc(paymentIntent.id)
        // .set({
        //   basket:basket,
        //   amount:paymentIntent.amount,
        //   created:paymentIntent.created
        // })
        setSucceded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type:'EMPTY_BASKET'
        })
        navigate('/paymentconfirmation');
    })
  };
  function handleChange(event) {
    //Listen for Changes in the cardelement
    //and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123,React Lane</p>
            <p>Los Angeles,CA</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map(function (item, index) {
              return (
                <Basket
                  key={index}
                  index1={index}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rate}
                  img={item.img}
                />
              );
            })}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/* Stripe */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <div>
                      <h3>Order Total: {value}</h3>
                    </div>
                  )}
                  decimalScale={2}
                  value={gettortal()}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <Button type="submit"
                  disabled={processing || succeded || disabled}
                  variant="warning outline-dark"
                >
                  <span>{processing ? "Processing" : "BUY NOW"}</span>
                </Button>
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
