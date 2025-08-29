import React, { useState } from "react";
import "./subtotal.css"
import CurrencyFormat from "react-currency-format";
import Button from "react-bootstrap/Button"
import { useStateValue } from "./StateProvider";
import {useNavigate} from "react-router-dom";
function Subtotal(props){
    const navigate=useNavigate();
    const [{basket},dispacth]=useStateValue();
    let val=0;
    function gettortal()
    {
        basket.forEach(itemh => {
            val=val+itemh.price;
        });
        return val;
    }
    // let val=props.help2;
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <div>
                    <p>
                        Subtotal({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift"><input type="checkbox" />This order contains a Gift</small> 
                    </div>
                )}
                decimalScale={2}
                value={gettortal()}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <Button onClick={e => navigate("/payment")} variant="warning outline-dark">Proceed to Checkout</Button>
        </div>
    )
}
export default Subtotal;