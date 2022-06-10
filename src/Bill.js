import React, { Component } from 'react';

class Bill extends Component {
constructor(props) {
    super(props);
    this.state = {
        ProductId: "",
        Name:"",
        unit: "",
        quantity: "",
        invoices: []
    };
}

handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
};

handleSubmit = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
       invoices: [...prevState.invoices, {
        ProductId: this.state.ProductId,
       unit: this.state.unit,
       Name:this.state.Name,
       quantity: this.state.quantity
    }]
}));
}
handlereset=(e)=>{

}



render() {

let aa= this.state.ProductId

    const hrStyle = {
        border: '5px solid rgb(23, 162, 184)'
    };

    const list = this.state.invoices.map((invoice, index) => {
        return (
            <tr key={index}>
                <td>{invoice.ProductId}</td>
                <td>{invoice.Name}</td>
                <td>{invoice.unit}</td>
                <td>{invoice.quantity}</td>
                <td>{invoice.unit * invoice.quantity}</td>
            </tr>
        )
    });

    return (
        <React.Fragment>
            <div className='col-12 col-lg-6'>
                <div className="jumbotron">
                    <form>
                  
                       
                        
                      
                    </form>
                    <form onSubmit={this.handleSubmit}>
                        <label><h4>Billing section </h4></label><br />
                        <div className="form-group">
                            <label> Name</label>
                            <input type="text" onChange={(e)=>e.target.value} className="form-control"  name="Name" />
                        </div>
                        <div className="form-group">
                            <label>ProductId</label>
                            <input className="form-control" type="text" onChange={this.handleChange} name="ProductId" />
                        </div>
                        <div className="form-group">
                            <label> Price</label>
                            <input className="form-control" type="number" onChange={this.handleChange} name="unit" />
                            <label>Quantity</label>
                            <input className="form-control" type="number" onChange={this.handleChange} name="quantity" />
                        </div>
                        <button   type="submit" onClick={this.handlereset} className="btn btn-primary btn-sm">Get Total</button>
            {/* <h1>{aa*x.price}  </h1> */}
                    </form>
                </div>
            </div>
            <div className="col-12 col-lg-6">
              
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                          
                        </div>
                        <div className="col-4">
                            
                        </div>
                        
                    </div>
                </div>
                <hr style={hrStyle} />
                <div className="Invoices">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Name</th>
                                <th> Price</th>
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

    );
}
}

export default Bill;