import { Component } from "react";
import { Link,Navigate } from "react-router-dom";
class Loginpage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      Password: "",
      nav:""
    };
  }
  validatelogin = (e) => {
    e.preventDefault();
    const { Email, Password } = this.state;
    let b = JSON.parse(localStorage.getItem("details"));
    let validate = b.some((x) => {
      return x.email === Email && x.password === Password;
    });
    console.log(validate);
    if (validate === true) {
     // alert("login id suceesfully");
     this.setState({nav:<Navigate to="Classtest"></Navigate>})
    } else {
      alert("Email and password does not match");
    }
  };

  render() {
    return (
      <form onSubmit={this.validatelogin}>
        <h1>Loging id</h1>

        <div>
          <label>Email: </label>
          <input
            type="email"
            placeholder="enter your mailid"
            onChange={(e) => this.setState({ Email: e.target.value })}
          />
        </div>
        <br />
        <div>
          <label>password: </label>
          <input
            type="pass"
            placeholder="enter your password"
            onChange={(e) => this.setState({ Password: e.target.value })}
          />
        </div>
        <br />
        <div>  <p>{this.state.nav}</p>
        
            
            <button type='submit'>sumbit</button>
        </div>
        {/* <div>
            <button type="button"><Link to="/Registerpage"></Link></button>
            </div>
         */}
    
      
      </form>
    );
  }
}

export default Loginpage;


