import React from"react"
import Records from './imagefile.json';
import {Link, useNavigate} from 'react-router-dom';
import Welcometomypage from "./Welcometomypage";
import Button from '@mui/material/Button';
import Keyboardnew from './Keyboardnew';
import "./Imagecorrect.css";
import { Card } from "@mui/material";
import Grid from '@mui/material/Grid';
import Header from "./Header";

class Keyboard extends React.Component{
    constructor(){
        super();
        this.state={
            show:true,
            id:"",
            price:"",
            caption:"",
            
        }
    }
   

    Viewdetails=(record)=>{
            let a=[];
            a.push ({ id:record.id,price:record.price,caption:record.caption});
            localStorage.setItem("showdetails",JSON.stringify(a));
           
              };
        
        handClick=(record)=>{
            let datas= JSON.parse(localStorage.getItem("show"))||[]
            datas.push({id:record.id,price:record.price,caption:record.caption,qty:record.qty})
            localStorage.setItem("show",JSON.stringify(datas));
            
               }
    
        render(){
    return(

       <div >
           <Header/>
           <br/>
           <div >
           
               <h2 style={{textAlign: "center"}}>
                  VIVO Mobiles
               </h2>
           </div>
           <br/>
           <div className="inner"  style={{display:"flex",justifyContent:"center"}}>
           <Grid container spacing={1}>

               {
                   Records && this.state.show && Records.map(record=>(
                    
                            <Grid item xs={2}>
                           <div   key={record.id} style={{margin:"10px"}}>
                               <Card style={{width: 250, height:350}}> 



                                   <Link to="/Keyboardnew"> 
                               <div  class="item"  style={{display:"flex",justifyContent:"center"}}>
                               <img  src={record.icon} alt=""   onClick={()=>{
                                this.Viewdetails(record)}} />
                                </div>
                                </Link> 
                               
                               <br/>
                               <p align="center">caption: {record.caption}</p> 
                               
                               <p align="center">price:  {record.price}</p>  

                               <br/>
                               <div style={{display:"flex",justifyContent:"center"}}>
                                  <Button variant="contained" color="secondary" onClick={()=>{
                                        this.handClick(record)
                                    }}> Add to cart</Button> 
                               </div>
                               </Card>
                               
                               
                               
                                   </div>
                                   </Grid>
                   ))}
                
           </Grid>
           </div>
           <div className='container'>
               {this.state.show ?  null : this.state.id} <br/>
                {this.state.show ?  null : this.state.price} <br/>
                 {this.state.show ?  null : this.state.caption} <br/>
                      
                </div> </div>
)
}
}  
export default  Keyboard;