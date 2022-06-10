import { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      phone: "",
      password: "",
      confirmpassword: "",
      name:"purushoth"
    };
  }
  componentDidUpdate(){
    this.timeout=setTimeout(()=>{
        this.setState({name:"ggggf"})
    },2000)
}
  validateForm = (e) => {
    e.preventDefault();
    //this.state.name
    let a = JSON.parse(localStorage.getItem("details")) || [];
    let emails = a.map((x) => x.email);
    const { email, username, phone, password, confirmpassword } = this.state;
    let emailexp = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailexp)) {
      alert("Please enter valid email id");
    } else if (username.length < 1) {
      alert("user name cant be empty");
    } else if (phone.length < 10) {
      alert("phone number should be 10 digits");
    } else if (password.length < 8) {
      alert("password should be atleast 8 charecters");
    } else if (password !== confirmpassword) {
      alert("password does not match");
    } else if (emails.includes(email)) {
      alert("sorry email id already exists");
    } else {
      a.push({ email: this.state.email, password: this.state.password });
      localStorage.setItem("details", JSON.stringify(a));

  
    }
  };

  render() {
    
    return (
      <form onSubmit={this.validateForm} id="form1">
        
        <h1>Submissionform</h1>
        <div>
          <label>Email: </label>
          <input
            type="email"
            placeholder="enter your mail id"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <br />

        <div>
          <label>UserName: </label>
          <input
            type="text"
            placeholder="enter the user name"
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </div>
        <br />
        <div>
          <label>Phone: </label>
          <input
            type="number"
            placeholder="enter the phone number"
            onChange={(e) => this.setState({ phone: e.target.value })}
          />
        </div>
        <br />
        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="enter the password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <br />
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            placeholder="enter the password again"
            onChange={(e) => this.setState({ confirmpassword: e.target.value })}
          />
        </div>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
        <br/><br/>
        <div>
            <h3>already Registered</h3>
            <button type="button"><Link to="/">Sign in</Link></button>
        </div>
       
        
      </form>
    );
  }
}

export default Signup;

