import { Component } from "react";
import { Link , Navigate} from "react-router-dom";

class Loginformtolog extends Component {
  constructor() {
    super();
    this.state = {
      e_mail: "",
      passw: "",
      nav:""
    };
  }
  validatelogin = (e) => {
    e.preventDefault();
    const { e_mail, passw } = this.state;
    let b = JSON.parse(localStorage.getItem("details"));
    let validate = b.some((x) => {
      return x.email === e_mail && x.password === passw;
    });
    console.log(validate);
    if (validate === true) {
     
      this.setState({nav:<Navigate to="Welcometomypage"></Navigate>})
      
    } else {
      alert("Email id does not match");
    }
  }
  render() {
    return (
      <form onSubmit={this.validatelogin}>
        

        <h1>Log in</h1>
        <div>
          <label>Email: </label>
          <input
            type="email"
            placeholder=" please enter e your mail id"
            onChange={(e) => this.setState({ e_mail: e.target.value })}
          />
        </div>
        <br />
        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="enter the password"
            onChange={(e) => this.setState({ passw: e.target.value })}
          />
        </div>
        <br/>
        <div>
          <button type="submit">Login</button>
        </div>
        <br/><br/>
        <p>{this.state.nav}</p>
        <div>
            <h3>loginform</h3>
       {/* <button type="button"><Link to="/Signup">Signup</Link></button>*/}
        </div>
      </form>
    );
  }
}

export default Loginformtolog;