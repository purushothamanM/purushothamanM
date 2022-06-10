import React, { Component } from 'react'
import Jsonfile from "./Jsonfile.json"

export default class NewBilling extends Component {
    constructor(){
        super();
        this.state={
            show:true,
            id:"",
            price:"",
            caption:""
        }
    }



  render() {

    let a =JSON.parse( localStorage.getItem("showdetails"));

    return (
      <div><h1>NewBilling</h1>

<div className="App">
           
           <br/>
           <div>
               <h1 align="center">
                   keyboard pictures
               </h1>
           </div>
           <br/>
           <div >
               {
                    a.map(record=>{
                       return(
                           <div > <td>key={record.id}</td> 
                               
                               <br/>
                               <td>{ record.caption }</td>
                               
                               <div >
                               <p>caption: {record.caption}</p> 
          
                             
                             <td>{record.price} </td> 

                                 
                                  

                                 
                                
                                   </div>
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
