import React, {Component} from "react"
class react1 extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            age:null,
            email:"",
            password:""

        };
    }
    render(){
        return(
            <div>
                <label>Name</label>
                <input type="text" placeholder="enter your name" value={this.state.name} required onChange={(e)=>{ handleChange(e)}}/>

            </div>
            
        )
    }

    
}