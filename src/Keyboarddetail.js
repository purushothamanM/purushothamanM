import React, { Component } from 'react'
import record from './imagefile.json'

export default class Keyboarddetail extends Component {
    constructor(){
        super();
        this.state={
            show:true,
            id:"",
            price:"",
            caption:""
        }
    }


    get=(id,price,caption)=>{
        this.setState({
            id,price,caption
        })
    }
  render() {
    return (
      <div>
          <h1>{this.get(record.id,record.price,record.caption)}</h1>
      </div>
    )
  }
}
