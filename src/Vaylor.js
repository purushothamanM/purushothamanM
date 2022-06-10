import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Routes,Router, Link,Route } from "react-router-dom";
import Home1 from "@material-ui/icons/Home";
import Home from './Home';
import Keyboard from './Keyboard';
import Loginform from './Loginform';

export default class Vaylor extends Component {
  render() {
    return (
      <div  >
        <div>
           <Stack spacing={13} direction="row" style={{float:'left'}}>
               <img align="left" src="https://valorpaytech.com/wp-content/uploads/2021/01/Valor-PayTech-Logo-Small.png?x59950"/><br/>
               </Stack>
                <Stack spacing={13} direction="row" style={{float:'right'}}>
                <Button variant="contained" color="primary"><Link to="/Addtocart"> Addtocart</Link></Button> <br/>
                <Button variant="contained" color="primary"><Link to="/Home"> HOME</Link></Button> <br/>
                <Button variant="contained" color="primary"><Link to="/Loginform"> LogIn</Link></Button> <br/>
                {/* <Button variant="contained" color="primary"><Link to="/"> VIVO</Link></Button> <br/>
              <Button variant="contained" color="primary"> <Link to="/Mouse">  REDMI</Link> </Button>  <br/>
                <Button variant="contained" color="primary"><Link to="/Monitor"> OPPO</Link></Button> <br/> */}
                <div className="fixed-bottom"  style={{float:'down'}}>
                  <Button variant="contained" color="primary"><Link to="/Home"> Back</Link></Button> <br/></div>
                
                </Stack>
               {/* <pre><Link to="/Home"><Home1/> </Link></pre> <br/> */}
               
               



               </div>

      </div>
    )
  }
}
