import React, { useState } from "react";
import "./login.css"
import { Button, Form } from "react-bootstrap";
import { auth } from "./firebase";
import { Link,useNavigate} from "react-router-dom";
function Login(props)
{
    const[error,setError]=useState(null);
    const navigate=useNavigate();
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('');
    function handleChangeemail(event)
    {
        setemail(event.target.value);
    }
    function handleChangepassword(event)
    {
        setpassword(event.target.value);
    }
    function login(event)
    {
        event.preventDefault(); 
        auth.signInWithEmailAndPassword(email,password) 
        .then((auth)=>{
            //successfully logigged in a user
               navigate("/");
        })
        .catch(function (error){
            console.log(error)
            setError(error);
        });
    }
    function register(event)
    {
        event.preventDefault();  
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //successfully created a new user
            console.log(auth);
            if(auth)
            {
               navigate("/");
            }
        })
        .catch(error=>alert(error));
    }
    return (
    <div className={props.isToggled?"login_paged":"login_pagel"}>
    <Link to="/"><img className="login_img" src={props.isToggled?"https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"}></img></Link>
    <div className={props.isToggled?"login_contentd":"login_contentl"}>
        <h1>Sign In</h1>
        <form>
        <h5>E-mail</h5>
        <input onChange={handleChangeemail} type="email" name="email" value={email}></input>
        <h5>Password</h5>
        <input onChange={handleChangepassword} type="password" name="password" value={password}></input>
        <Button onClick={login} className="sign_inbutton" type ="submit" variant="warning">Sign In</Button>
        {error&&<p className="error_message">{error.message}</p>}
        </form>
        <p>By signing in, you agree to Amazon Clone's Conditions of Use and Privacy Notice.</p>
        <Button onClick={register} className="createaccount_button" variant="light">Create Your Amazon Account</Button>
    </div>  
    </div>
    )
}
export default Login;