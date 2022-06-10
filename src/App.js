import React from "react";
import {Routes,Route, Link } from "react-router-dom";
import Keyboardnew from "./Keyboardnew";
import Monitornew from "./Monitornew";
import Mousenew from "./Mousenew";
import Home from "./Home";
import Keyboard from "./Keyboard"
import Monitor from "./Monitor"
import Mouse from "./Mouse"
import Vaylor from "./Vaylor"
import Addtocart from "./Addtocart"
import Loginform from './Loginform';
import Table from "./Table";
// import Jsonimagetask from "./Keyboard"
// import Jsonimagetask2 from "./Mouse";
// import Jsonimagetask3 from "./Monitor";
// import Signup from "./Signup";
// import Loginform from "./Loginform"
// import Welcometomypage from "./Welcometomypage"
//import Lifecycle from "./Lifecycle"
//import App12 from "./ChildComp";
//import Jsonimagetask from "./Jsonimagetask"
//import Main from "./Main"
// import Products from "./Newone";
// import Meeee from "./Meeee"; 
import Appoo from "./Productinroute"
import Bill from "./Bill"
function App() {
  return (
   
      
     <div>
       <Table />
       {/* <Vaylor /> */}
        {/* <Routes>
      
         <Route path="/Home" element={ <Home/> } /> 
         <Route path="/Keyboard" element={ <Keyboard/> } />
        <Route path="/Addtocart" element={ <Addtocart/> } />
        <Route path="Keyboardnew" element={<Keyboardnew/>}/>
        <Route path="Monitor" element={ <Monitor/> }/>
        <Route path="Monitornew" element={<Monitornew/>}/>
        <Route path="Mouse" element={ <Mouse/> } />
        <Route path="Mousenew" element={<Mousenew/>}/>
        <Route path="/" element={ <Keyboard/> } />
        <Route path="/Loginform" element={ <Loginform/> } />
      </Routes>
      */}
  
     {/* <Appoo />    */}
       {/* <Meeee />    */}
    </div>
   
  );
}

export default App;
