
import React, { Component } from "react"
class Lifecycle extends Component{
   constructor(props){
       super(props);
       this.state={
            name:"purushoth"
        }
    // componentWillUpdate(props,perstate)(
    //     this.timeout=setTimeout(() => {
    //         this.setState({name="ggggf"})
    //     }, 5000)
    // }
    // )
  
            
   }
     handleSumbmit=()=>{
        this.setState({ name: this.state.name });
  }
   componentDidUpdate(props,perstate){
    this.timeout=setTimeout(()=>{
        this.setState({name:"ggggf"})
    },5000)
}
render(){
    return(
        <div>
     
          
        <div> <button  onClick={this.handleSumbmit}>
        click
        </button>
        {this.state.name}
        {console.log("name :",this.state.name)}
        </div>
        </div>
   
    );
}

}
export default Lifecycle ;

