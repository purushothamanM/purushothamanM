import React from  "react";


class Monitornew extends React.Component{
    constructor(){
        super();
        this.state={
            show:true,
            id:"",
            price:"",
            caption:""
        }
    }
   
    render(){
        let a =JSON.parse( localStorage.getItem("showdetails"));
  return  (
          <div className="App">
           <br/>
           <div>
           <h1 align="center">
                   Monitor Detail
               </h1>
                   </div>
                   <div >
                       {
                          a.map(record=>{
                               return(
                                <div >
                                   
                                <br/>
                                {record.caption} 
                                <div>
                                
                               <p>Title: {record.caption}</p> 
          
                               <p >id: {record.id} </p> 
                               <p > Price  : ₹ {record.price}</p>  

                                  <br /></div>
                                </div> 
                               )
                           })
                       }
                       </div> 
                     
          </div>
  )
}
}
export default  Monitornew;