import React from 'react'
import JsonData from './Jsonfile.json'
const { useState } = React;

 function Table(){
    // let OverallTotal=0;
    const [quantity, setText] = useState("");
    const [array,setArray] = useState(JsonData.posts)
    const [ind,setInd]=useState(0)
    const [check,setCheck] = useState(false)
     function handleCheckboxClick(event,i,price){
         console.log("array[i].price",array[i].price)
         setInd(i)
         setCheck(true)
        array[i].total = event.target.value * array[i].price
        setText(event.target.value);
         
     }
    const DisplayData=JsonData.posts.map(
        (info,index)=>{
            console.log(info.price,index)
           let total =0;
          
            return(
                <tr>
                    <td>{info.ProductId}</td>
                    <td>{info.name}</td>
                    <td>{info.price}</td>
                    <td><input type="text" name='quantity' onChange={(event)=>handleCheckboxClick(event,index)}/></td>
                    <td>{check ? JsonData.posts[ind].price*quantity : info.price}</td>
                    {/* <td>{total+=check ? JsonData.posts[ind].price*quantity : info.price}</td>  */}
                   
                </tr>
            )
        }
    )

console.log(array);
  const OverallTotal =  array.map((e) => {
      return  e.total ;
    }, 0);
    const a2=OverallTotal.reduce((a,b)=>{
         return a+b
    })
 console.log(a2)
let total;
 console.log("quantity",quantity)
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>ProductId.NO</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th> Quantity</th>
                    <th> Total</th>
                    {/* <th> OveraallTotal</th> */}
                    </tr>
                </thead>
                <tbody>
                 
                
                {array.map(
        (info,index)=>
                    
                <tr>
                    
                    <td>{info.ProductId}</td>
                    <td>{info.name}</td>
                    <td>{info.price}</td>
                    <td><input type="text" name='quantity' onChange={(event)=>handleCheckboxClick(event,index,info.price)}/></td>
                    {/* <td>{check ? array[ind].price*quantity : info.price}</td> */}
                    <td>{info.total}</td>
                    {/* <td>{OverallTotal}</td> */}
                   
                </tr>
              
                
        
    )}
    
                      
                       <td  align="right">OverAllTotal :{a2}</td>


                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default Table;