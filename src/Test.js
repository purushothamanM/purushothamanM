// import React, { Component } from 'react'
// // import Watch from "./Watch.json"
// // import "./Main.css"

// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Welcometomypage from './Welcometomypage';

// export default class Watchs extends Component {
//   constructor(){
//     super();
//     this.state = {
        
       
//         show:true,
//         id:"",
//         price:"",
//         title:"",
//         details:""
        
        

//     }
// }

// get = (id,price,title,details) =>{
//   this.setState({
//     id,price,title,details,show:false
//   })

// }

//   render() {
//     return (
//       <div className='check' >
//         <Navbar/>
//         <div className='hq'>
//         <center>
//            <h1 >Brand Watch Available </h1></center></div>
//           <div className='home1'>
           
// {
//    Watch&&this.state.show&& Watch.map(Watch=>{
//         return(
//             <div >
//               <img onClick={()=>this.get(Watch.id,Watch.price,Watch.title,Watch.deatils)}   className='home__image' src={Watch.pic}/>

         
            
//            <p className='hq'>Title: {Watch.title}</p> 
          
//            <p className='hq'>id: {Watch.id} </p> 
//           <div onClick={this.hideAll}>
          
//             </div>
            
//           <p className='price'> Price  : ₹ {Watch.price}</p>  

//             <br />
      

//             <Button className='cll' variant="contained" color="success">Add To Cart</Button>  
          
          
//             </div>
            
//         )
//     })
// }

// </div>
// <div className='detta'>
//   {this.state.show ?  null : this.state.id} <br/>
//    {this.state.show ?  null : this.state.price} <br/>
//    {this.state.show ?  null : this.state.title} <br/>
//    {this.state.show ? null:this.state.details}
// </div>
//       </div>
//     )
//   }
// }

