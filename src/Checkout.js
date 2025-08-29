import React,{ forwardRef }from "react";
import "./checkout.css"
import Subtotal from "./Subtotal";
import Basket from "./Basketdis";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";
function Checkout(props)
{
    const [{basket,user},dispacth]=useStateValue();
    return(
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img21/Fashion/Event/JanART_22/Teaser/revisedScalecallouts/PC-Header-DealsRevealed.jpg"></img>
                <h3>Hey {user?.email} !</h3>
                <h2 className="checkout_title">Your Shopping Basket</h2>
                {basket.map(function (item,index){
                    return (<Basket key={index} index1={index} id={item.id} title={item.title} price={item.price} rating={item.rate} img={item.img}/>)
                })}
            </div>
            <div className="checkout_right">
                {/* <Subtotal help={props.array} pcount={props.count} help2={props.total}/> */}
                <Subtotal />
            </div>
        </div>
    )
}
export default Checkout;