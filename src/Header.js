import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from '@mui/material/Stack';
import {Routes,Router, Link,Route } from "react-router-dom";
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@material-ui/core/Badge";
import Addtocart from "./Addtocart";
import Home from "./Home";
import Loginform from "./Loginform";
import { pink } from '@mui/material/colors';
export default function Header() {
return (
	<div style={{position:"fixed",width:"100%"}}>
	<AppBar position="static">
		<Toolbar>
	
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			
        

      {/* </div> */}
			<MenuIcon />
		</IconButton>
		
		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			Valor Online Shoping
		</Typography>
		<div style={{display:"flex",justifyContent:"space-between",width:"30%"}}>
			 <div><Link to= "/Addtocart"><ShoppingCartIcon sx={{ color: pink[500] }}/></Link></div> 
		 
		<Link to= "/Home" id="1"><Button variant="contained" color="secondary">Home</Button></Link>
		<Link to= "/Loginform"><Button variant="contained" color="secondary">LogOut</Button></Link>
		<Link to= "/Home"><Button variant="contained" color="secondary">Back</Button></Link>
		 <Link to="/"><Button variant="contained" color="success" >Vivo</Button></Link>
		<Link to="/Monitor"><Button variant="contained" color="success" >Oppo</Button></Link>
		<Link to="/Mouse"><Button variant="contained" color="success" >Redmi</Button></Link> 
		</div>
		</Toolbar>
	</AppBar>
	</div>
);
}

