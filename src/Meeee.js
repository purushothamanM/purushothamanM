import React ,{Component} from"react"
import Records from './imagefile.json';
import { Link } from "react-router-dom";
import Welcometomypage from "./Welcometomypage";
import Button from '@mui/material/Button';
class Meeee extends React.Component{
    constructor(){
        super();
        this.state={
            show:true,
            id:"",
            price:"",
            caption:""
        }

        
    }
     handleClick=(id,price,caption)=>{
        this.setState({
            id,price,caption,show:false,
        })
         
   }

   render(){
    return(

       <div className="App">
           < Welcometomypage />
           <br/>
           <div>
               <strong>
                   keyboard pictures
               </strong>
           </div>
           <br/>
           <div className="inner"  style={{display:"flex",justifyContent:"space-around"}}>
               {
                   Records && this.state.show && Records.map(record=>{
                       return(
                           <div className="box" key={record.id} style={{margin:"10px"}}>
                               <img  src={record.icon} alt=""  onClick={()=>this.handleClick(record.id,record.price,record.caption)}/>
                               <br/>
                               { record.caption }
                               
                               <div >
                               
                               <p className='hq'>Title: {record.caption}</p> 
          
                                <p className='hq'>id: {record.id} </p> 
                                {/* <div onClick={this.hideAll}>
         
                                 </div>
                                          */}
                                 <p className='price'> Price  : ₹ {record.price}</p>  

                                  <br />
     

                                     <Button  variant="contained" color="success">Add To Cart</Button> 
                              
                                   </div>
                                   </div>
                       )
                   })
               }
           </div>
           <div className='container'>
                  {this.state.show ?  null : this.state.id} <br/>
                  {this.state.show ?  null : this.state.price} <br/>
                  {this.state.show ?  null : this.state.caption} <br/>
                      
                            </div>
                             </div>
      
                             )
            }
    
            }
            export default Meeee