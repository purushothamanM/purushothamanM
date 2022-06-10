import React from"react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
class Addtocart extends React.Component{
    constructor(){
        super();
        this.state={
            show:true,
            icon:"",
            id:"",
            price:"",
            caption:""
        }
    }
     handClick=(x)=>{
    //   x.preventDefault();
      window.location.reload(false);
           }


  
        render(){
            let a =JSON.parse( localStorage.getItem("Showdetails"));
          
            console.log(a)
    return(
          <div className="App">
           <div>
           <Link to="/Home">
                              <Button variant="contained" color="primary"> Back</Button>
                              
                              </Link> 
               <h1 align="center">
                 Your   Cart Items Are :
               </h1>
           </div>
           <div >
               {
                   a.map((x)=>{
                       return (
                           <div>
                           <div>icon:{x.icon}<br/>
                               id:{x.id} <br/>
                              Price:  {x.price}<br/>
                              caption:{x.caption}
                               </div>
                              <strong>
                                  your Order is placed Thanks for your order
                              </strong>
                               
                               </div>

                       )
                   })
               }
           </div>
            </div> 
)
}
}  
export default  Addtocart;