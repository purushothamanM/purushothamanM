import React from"react"
;
class Keyboardnew extends React.Component{
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
                   keyboard pictures
               </h1>
           </div>
           <br/>
           <div >
               {
                    a.map(record=>{
                       return(
                           <div  key={record.id} >
                               
                               <br/>
                               { record.caption }
                               
                               <div >
                               <p>caption: {record.caption}</p> 
          
                               <p >id: {record.id} </p> 
                               <p>price:  {record.price}</p>  

                                  <br />
                                  

                                 
                                
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
export default  Keyboardnew;