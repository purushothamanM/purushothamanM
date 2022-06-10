import React, { Component } from 'react'
export default class Billapp extends Component {
 
 
 constructor(props){
     super(props);
     this.state ={
         ProductId:"",
         Name:"",
         Price:"",
         Quanity:"",
         Total:"",
         invoices: []
     }
 }
 handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
};
handleSubmit = (e)=>{
    e.preventDefault();
    this.setState(prevState=>({
     invoices:[...prevState.invoices,{
         ProductId:this.state. ProductId,
         Name :this.state.Name,
         Price:this.state.Price,
         Total :this.state.Quanity

     }]
    }));
}
 
render() {
      const list = this.state.invoices.map((invoice, index) => {
        return (
            <tr key={index}>
                <td>{invoice.ProductId}</td>
                <td>{invoice.Name}</td>
                <td>{invoice.Price}</td>
                <td>{invoice.Quantity}</td>
                <td>{invoice.Price * invoice.Quantity}</td>
            </tr>
        )
    });
    return (
   
      <React.Fragment>
          <div className='col-12 col-lg-6'>
              <div className='inner'>
                  <form>
                      <label>Table Billing App</label>
                      <div className="form-group">
                            <label>Product Id</label>
                            <input type="text" onChange={this.handleChange} className="form-control"  name="Product Id" />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" onChange={this.handleChange} className="form-control"  name="Name" />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type="number" onChange={this.handleChange} className="form-control"  name="Price" />
                        </div>
                        <div className="form-group">
                            <label>Quanity</label>
                            <input type="number" onChange={this.handleChange} className="form-control"  name="Quanity" />
                        </div>
                        <form onSubmit={this.handleSubmit}>
                        <button className="btn btn-primary btn-sm">Add Quanity</button>
                        </form>
                        <div className="form-group">
                            <label>Total</label>
                            <input type="text" onChange={this.handleChange} className="form-control"  name="Total" />
                        </div>
                        
                  </form>
              </div>
          </div>
          <div className="col-12 col-lg-6">
                <div className="container-fluid bg-info text-white">
                    {/* <div className="row">
                        <div className="col text-left">
                            <p>Your Company Name</p>
                            <h2>Invoice</h2>
                        </div>
                        <div className="col text-right">
                            <p>22 Yusen St</p><br />
                            <p>Auburn</p><br />
                            <p>NSW</p>
                        </div>
                    </div> */}
                </div>
                <div className="container-fluid">
                   
                </div>
                {/* <hr style={hrStyle} /> */}
                <div className="Invoices">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                </div>
            </div>
      </React.Fragment>
    )
  }
}
