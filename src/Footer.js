import React from "react";
import "./footer.css"
import { Link } from "react-router-dom";
function Footer(){
     return(
        <div className="footer">
            <div className="footer_container">
                <div className="colm">
                    <h5>Get to know us</h5>
                    <p>About Amazon</p>
                    <p>Careers</p>
                    <p>Amazon Science</p>
                </div>
                <div className="colm">
                    <h5>Shop with Us</h5>
                    <p>Your Account</p>
                    <p>Your Orders</p>
                    <p>Your Addresses</p>
                    <p>Your Lists</p>
                </div>
                <div className="colm">
                    <h5>Make Money with Us</h5>
                    <p>Protect and build your brand</p>
                    <p>Sell on Amazon</p>
                    <p>Fulfillment by Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Advertise your Products</p>
                </div>
                <div className="colm">
                    <h5>Let us Help</h5>
                    <p>Help</p>
                    <p>COVID-19 and Amazon</p>
                    <p>Shipping and Delivery</p>
                    <p>Returns and Replacements</p>
                    <p>Amazon App Download</p>
                </div>
            </div>
            <Link to="/"><img className="footer_logo" src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-Background-PNG-Image.png"></img></Link>
        </div>
     )
}
export default Footer;