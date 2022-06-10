import React from "react";
import ReactDOM from "react-dom/client";
// import { Nav,NavLink,NavMenu} from "./NavbarElements"
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import Test from './Test';
//import App11 from './newtest';
//import Ap7 from './propstest';
//import Ap6 from './regu';
//import Datacomponent from './newamazonfm'
//import  App111  from './newamazonfm'
import Signup from "./Test";
import Loginform from "./checkform";
//import Registerform from './comments'
const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
