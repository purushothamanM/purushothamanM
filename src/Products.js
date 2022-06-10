import React from "react";
import Keyboard from "./Keyboard";
import Mouse from "./Mouse";
import Monitor from "./Monitor";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { color } from "@mui/system"
import {Route,Link,} from "react-router-dom";
import {Switch} from '@mui/material';
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
        //  this.setState({Keyboard:true,Mouse:false,Monitor:false});
        // <switch><Route  path="/" component={Keyboard} /> </switch>
        
     };
     Mousefun=()=>{
        // <switch>   <Route path="/Monitor" component={Monitor} /> /></switch>
      
     };
     Monitorfun=()=>{
        // this.setStat
        //  <Route path="/Mouse" component={Mouse} /> //e({Keyboard:false,Mouse:false,Monitor:true});
     }

   render(){
     return(
        <Stack spacing={13} direction="row">
               <img align="left" src="https://valorpaytech.com/wp-content/uploads/2021/01/Valor-PayTech-Logo-Small.png?x59950"/>
           
     
            <Button  variant ="outlined" style={{display: 'flex', justifyContent: 'left'}} onClick={this.keyboardfun}>keyboard</Button> 
            <Button variant="outlied"  style={{display: 'flex', justifyContent: 'left'}} onClick={this.Mousefun}>Mouse</Button>
            <Button  variant="outlined" style={{display: 'flex', justifyContent: 'left'}}  onClick={this.Monitorfun}>Monitor</Button>
{/*             
             {this.state.Keyboard ? <Keyboard/> : null}
             {this.state.Mouse ? <Mouse/> : null}
             {this.state.Monitor ? <Monitor/> : null}
              */}
              {/* <Switch>
            <Route  path="/" component={Keyboard} />
            <Route path="/Monitor" component={Monitor} />
            <Route path="/Mouse" component={Mouse} />
            
         </Switch> */}

             </Stack>
     )         
    }
}
export default Products