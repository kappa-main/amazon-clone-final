import React from "react"
import "./card.css"
import Button from "react-bootstrap/Button"
import { useStateValue } from "./StateProvider"
function Card(props)
{
    const [state,dispatch]=useStateValue();
    function handleclick()
    {
        // let obj={
        //     title:props.title,
        //     price:parseFloat(props.price),
        //     rate:props.rate,
        //     img:props.img
        // }
        // {props.handleadd(obj)};
        //dispath the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',  
            item :{
                    id:props.id,
                    title:props.title,
                    price:props.price,
                    rate:props.rate,
                    img:props.img
                }
        })
        
    }
    return (
        <div className={props.isToggled&&"dark"}>
            <p className="item_heading">{props.title}</p>
            <p className="item_price">₹{props.price}</p>
            <p>{props.rate}</p>
            <img className="col_image" src={props.img}></img>
            <br></br>
            <Button onClick={handleclick} className="addto_button" variant="warning">Add to Basket</Button>
        </div>
    )
}
export default Card;