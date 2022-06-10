import React from "react";

class Mousenew extends React.Component{
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
    return(
        <div className="App">
            <br/>
            <div>
            <h1 align="center">
                   Mouse Detail
               </h1>
            </div>
            
            <br />
            <div >
              {
                   a.map(record=>{
                      return(
                          <div >
                             
                          
                          <br/>
                          {record.Caption}
                           <div>
                           <p >Title: {record.caption}</p> 
          
                            <p >id: {record.id} </p> 
                              <p > Price  : ₹ {record.price}</p>  

                              </div> 
                          </div>
                      )
                     
                  })
              }
            </div>

            
        </div>
    )

}
}
export default  Mousenew ;