import React ,{Component} from"react"
import Records from "./Imagefile3.json";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


class Opp extends Component{


render(){
return(
    <div className="Opp">
    <br/>
    <div className="App">
           <br/>
           <div>
               <strong> Monitor picture taken from the json file and used to print react js
                   </strong>
                   </div>
                   <div className="inner">
                       {
                           Records && Records.map(record=>{
                               return(
                                className="box" key={record.id} >
                                <img src ={record.icon}alt=""/>
                                <br/>
                                {record.caption} 
                                <div>
                                <img src ={require(record.icon)} onClick={()=>this.imageClick}/>
                                </div>
                               
                               )
                           })
                       }
                       </div>  
          </div>







    </div>
)

}
}