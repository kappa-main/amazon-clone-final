import React from "react"
import "./order.css"
import moment from "moment";
import Basket from "./Basketdis";
import CurrencyFormat from "react-currency-format";
function Order({order})
{
    // let val=0;
    // function gettortal()
    // {
    //     basket.forEach(itemh => {
    //         val=val+itemh.price;
    //     });
    //     return val;
    // }
    return(
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket.map(function (item,index){
                    return (<Basket key={index} index1={index} id={item.id} title={item.title} price={item.price} rating={item.rate} img={item.img} hideButton/>)
                })}
                <CurrencyFormat
                renderText={(value)=>(
                    <h3 className="order_total">Order Total:{value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount/100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}
export default Order;