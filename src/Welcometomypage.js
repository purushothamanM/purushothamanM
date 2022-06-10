
import React from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import Main from "./Main"
class Welcometomypage extends React.Component{
   render(){
     
      if(localStorage.getItem("value")==null){
         return <Navigate to="/"/>} 
         let validate=()=>{ 
           localStorage.removeItem("value") 
     
         
         }
         return ( 
          <div>
                <h1>welcome</h1>
                <Main />
         <button type="button" onClick={validate}>
            <Link to="/">log out</Link></button> 
           </div> )}}
         
     export default Welcometomypage
     

