import React from "react";
import "./basket.css"
import { Button } from "react-bootstrap";
import {useStateValue} from "./StateProvider";
function Basketdis(props)
{
    const [{basket},dispatch]=useStateValue();
    function removefromBasket(event)
    {
        console.log(props.index1);
        dispatch({
            type:"REMOVE_FROM_BASKET",  
            id: props.index1
        })
    }
    return (
        <div className="basket">
            <div> 
            <img className="basket_image" src={props.img}></img>
            </div>
            <div className="basket_text">
            <p className="basket_title">{props.title}</p>
            <p className="basket_price">₹{props.price}</p>
            <p classname="basket_rating">{props.rating}</p>
            {!props.hideButton&&<Button onClick={removefromBasket} className="basket_button" variant="warning">Remove from Basket</Button>}
            </div>
        </div>
    )
}
export default Basketdis;