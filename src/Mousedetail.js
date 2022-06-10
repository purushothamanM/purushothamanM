import React, { Component } from 'react'
import record from './Imagefile3.json'

export default class Mousedetail extends Component {
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
            id,price,caption
        })
    }
  render() {
    return (
      <div>
          <h1>{this.handleClick(record.id,record.price,record.caption)}</h1>
      </div>
    )
  }
}
