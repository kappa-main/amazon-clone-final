import React from "react";
import "./pconfirm.css"
import Confetti from "react-confetti";
import { Button } from "react-bootstrap";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from "react-router-dom";
function Confirmation(props){
    return (<div className={props.isToggled?"main_containerd":"main_containerl"}>
        <Confetti></Confetti>
        <div className={props.isToggled?"text-containerd":"text-containerl"}>
            <CheckCircleOutlineIcon className="tick"/>
            <h6>Hey Saad Ahmed,</h6>
            <h3>Your Order is Confirmed!</h3>
            <p>We will send you a shipping confirmation email as soon as your order ships.</p>
            <Link to="/"><Button className="home_button" variant={props.isToggled?"light":"dark"}>Go to Home Page</Button></Link>
        </div>
    </div>)
}
export default Confirmation;