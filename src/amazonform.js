import React, { Component } from 'react';
 
export default class AddDocumentComponent extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            title: '',
            description: '',
            price: ''
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
   localStorage.setItem('document',JSON.stringify(this.state));

}
render() {
    return (
        <div className="container">
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>name</label>
                    <input type="text" name="name"  value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>email</label>
                    <input type="text" name="emailid"  value={this.state.description} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="number" name="password"  value={this.state.price} onChange={this.handleChange} />
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
}