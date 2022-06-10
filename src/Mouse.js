import React from "react";
import Records from "./Imagefile2.json";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Card } from "@mui/material";
import Header from "./Header";
class Mouse extends React.Component{
    constructor(){
        super();
        this.state={
            show:true,
            id:"",
            price:"",
            caption:""
        }
    }
    Viewdetails=(record)=>{
        let a=[];
        a.push ({ id:record.id,price:record.price,caption:record.caption});
        localStorage.setItem("showdetails",JSON.stringify(a));
       
          };
          handClick=(record)=>{
            let datas= JSON.parse(localStorage.getItem("Showdetails"))||[]
            datas.push({id:record.id,price:record.price,caption:record.caption,qty:record.qty})
            localStorage.setItem("Showdetails",JSON.stringify(datas));
            
               }
        render(){
    return(
        <div>
               <Header/>
            <br/>
            
            <div className="row  col-md-12">
            {/* <Link to="/Home"> <Button variant="contained" color="primary"> Back</Button></Link>  */}
                <h2 style={{textAlign: "center"}}> RedMi mobiles
                </h2>
            </div>
            <br />
            <div className="inner" style={{display:"flex",justifyContent:"space-around"}}>
            <Grid container spacing={1}>
              {
                  Records  && this.state.show  && Records.map(record=>(

                    <Grid item xs={2}>
                   
                          <div  key={record.id}  style={{margin:"20px"}}>
                          <Card style={{width:250, height:350}}> 

                              <Link to="/Mousenew" >
                              <div  class="item"  style={{display:"flex",justifyContent:"center"}}>
                              <img src ={ record.icon} alt=""   onClick={()=>this.Viewdetails(record)}/>
                              </div>
                              </Link>
                          
                          <br/>
                         
                    
                           <p align="center">Caption: {record.caption}</p> 
          
                           
                              <p align="center"> Price  : ₹ {record.price}</p> 
                              <br/>
                              <div style={{display:"flex",justifyContent:"center"}}>   
                              <Button variant="contained" color="secondary" onClick={()=>{
                                        this.handClick(record)
                                    }}> Add to cart</Button> 
                                    </div>
                                   {/* <Link to="/Home"> <Button variant="contained" color="primary"> Back</Button></Link> */}
                                   </Card> </div>

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
export default  Mouse ;
