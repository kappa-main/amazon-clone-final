import React, { useState } from "react"
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import Basketcounter from "./Basketdis";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Switch from "./Switch";
function Header(props){
    const [{basket,user},dispacth]=useStateValue();
    function handleauth()
    {
        if(user)
        {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <a href="/"><img className="header_logo" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"></img></a>
            <div className="header_search">
                 <input className="header_searchInput" type="text"></input>
                 <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>
            <div className="header_nav">
            <Switch rounded={true} isToggled={props.isToggled} onToggle={props.onToggle} />
            <Link onClick={handleauth} className="sign_in" to={user===null&&"/login"}>
                <div className="header_option">
                    <span className="header_optionline1">Hello {user?user.email:"Guest"}</span>
                    <span className="header_optionline2">{user?"Sign Out":"Sign In"}</span>
                </div>
                </Link>
                <Link to="/orders" className="sign_in"><div className="header_option">
                    <span className="header_optionline1">Returns </span>
                    <span className="header_optionline2">& orders</span>
                </div></Link>
                <div className="header_option">
                    <span className="header_optionline1">Your </span>
                    <span className="header_optionline2">Prime</span>
                </div>
                <div className="header_optionBasket">
                    <Link to="/checkout"><ShoppingBasketIcon/></Link>
                    <span className="header_optionline2 header_basketCount">{basket?.length}</span>
                </div>
            </div>
        </div>
    )
};
export default Header;