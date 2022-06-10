import React from "react";
import Keyboard from "./Keyboard";
import Mouse from "./Mouse";
import Monitor from "./Monitor";
import Button from '@mui/material/Button';
import { color } from "@mui/system";
//import KeyboardOptionKeyIcon from '@mui/icons-material/KeyboardOptionKey';
class Products extends React.Component{
    constructor(){
        super();
        this.state={
            Keyboard:false,
            Mouse:false,
            Monitor:false
        };
    }
     keyboardfun=()=>{
         this.setState({Keyboard:true,Mouse:false,Monitor:false});
     };
     Mousefun=()=>{

        this.setState({Keyboard:false,Mouse:true,Monitor:false});
     };
     Monitorfun=()=>{
        this.setState({Keyboard:false,Mouse:false,Monitor:true});
     }

   render(){
     return(
  <div>
        <div><img align="left" src="https://valorpaytech.com/wp-content/uploads/2021/01/Valor-PayTech-Logo-Small.png?x59950" alt=""/></div>
       <div style={{display: 'block',  justifyContent:'center', alignItems:'center', height: '100vh' , background:"lightblue"}}>
           <div style={{display:"flex",justifyContent:"right", marginleft: "auto",marginright: "auto"}}>
           
               
              
             <Button  variant ="outlined"  onClick={this.keyboardfun}>keyboard</Button> 
            <Button variant="outlined"   onClick={this.Mousefun}>Mouse</Button>
            <Button  variant="outlined"  onClick={this.Monitorfun}>Monitor</Button>
             </div>
             <div style={{display:"flex",justifyContent:"space-around",flex:1}}>
            
             {this.state.Keyboard ? <Keyboard/> : null}
             {this.state.Mouse ? <Mouse/> : null}
             {this.state.Monitor ? <Monitor/> : null}
             </div>
       </div>
       </div>
        ) ;
    }
}
export default Products