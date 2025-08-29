import React,{useEffect, useState} from "react"
import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout";
import Login from "./Login";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Paymet";
import Orders from "./Orders"
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Footer from "./Footer";
import Pconfirm from "./Pconfirm"
const promise=loadStripe("pk_test_51MrhC4SAblUDaP2q49Sbu2nAZue2p02KGoroKsFYyksRMWbHdqCzTZ3Ie4wyXXt0AaQSBun4Z7bXpdngVhvaaITh00Jlbao8EU");
function App() {
  const [{},dispatch]=useStateValue();
  const [isToggled,setisToggled]=useState(false);
  // const [basketcount,setbasketcount]=useState(0);
  // const [basketarray,setBasket]=useState([]);
  // const [netval,setval]=useState(0);
  // function onchange(newitem)
  // {
  //   console.log("entered");
  //       setBasket(function (prevValue){
  //           return [...prevValue,newitem];
  //       })
  //       console.log(basketarray);
  //       setbasketcount(basketcount+1);
  //       setval(netval+newitem.price);
  // }
  // return (
  //   <Router>
  //       <div className="App">
  //       <Header count={basketcount}/>
  //       <Routes>
  //       <Route path="/checkout" element={<Checkout count={basketcount} array={basketarray} total={netval}/>}>
  //       </Route>
  //       <Route path="/" element={<Home onAdd={onchange}/>}>
  //       </Route>
  //       </Routes>
  //       </div>
  // </Router>
  // );
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("HELLO");
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser,
        });
      }
      else
      {
        dispatch({
            type:"SET_USER",
            user:null,
        });
      }
    });
  },[])
  return (
    <Router>
        <div className="App">
        <Routes>
        <Route path="/paymentconfirmation" element={<Pconfirm isToggled={isToggled}/>}/>
        <Route path="/login" element={<Login isToggled={isToggled}/>}/>
        <Route path="/checkout" element={<div><Header isToggled={isToggled} onToggle={()=>setisToggled(!isToggled)}/><Checkout/></div>}>
        </Route>
        <Route path="/payment" element={<div><Header isToggled={isToggled} onToggle={()=>setisToggled(!isToggled)}/><Elements stripe={promise}><Payment /></Elements></div>}>
        </Route>
        <Route path="/orders" element={<div><Orders /></div>}></Route>
        <Route path="/" element={<div><Header isToggled={isToggled} onToggle={()=>setisToggled(!isToggled)}/><Home isToggled={isToggled}/><Footer /></div>}>
        </Route>
        </Routes>
        </div>
  </Router>
  );
}

export default App;
