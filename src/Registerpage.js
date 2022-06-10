import {Component} from 'react';
import { Link, NavLink } from 'react-router-dom'
class Registerpage extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            username:'',
            phone:'',
            password:'',
            confirmpassword:''
        }
    }
    validateForm=(e)=>{
        e.preventDefault();
        let a=JSON.parse(localStorage.getItem("details"))||[]
        let emails=a.map((x)=>x.email);
        const{email,username,phone,password,confirmpassword}=this.state;
        let emailexp=(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
        if(!email.match(emailexp)){
            alert("Please enter valid email id")
        }
        else if(username.length<1){
            alert("user name cant in empty")
        }
        else if(phone.length<10){
            alert("phone number should be 10 digits")
        }
        else if(password.length<8){
            alert("password should be atleast 8 charecters")
        }
       // else if(password!==confirmpassword){
         //   alert("password  does not match ")
       // }
        //else if(emails.includes(email)){
        //    alert(" Welcome!!!")
       // }
        else{
            a.push({email:this.state.email,password:this.state.password})
            localStorage.setItem("details",JSON.stringify(a));
            
        }
    }

    render(){
        return(
            <form onSubmit={this.validateForm}>
                <h1>Amazon form</h1>
                <div>
                    <label>Email: </label>
                    <input type="email" placeholder="enter your mailid" onChange={e=>this.setState({email:e.target.value})}/>
                </div><br/>

                <div>
                    <label>UserName: </label>
                    <input type="text" placeholder="enter the username" onChange={e=>this.setState({username:e.target.value})}/>
                </div><br/>
                <div>
                    <label>Phone: </label>
                    <input type="number" placeholder="enter the phonenumber" onChange={e=>this.setState({phone:e.target.value})}/>
                </div><br/>
                <div>
                    <label>Password: </label>
                    <input type="password" placeholder="enter thepassword" onChange={e=>this.setState({password:e.target.value})}/>
                </div><br/>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" placeholder="enter the password again" onChange={e=>this.setState({confirmpassword:e.target.value})}/>
                </div><br/>
                <div>
                    <button type='submit'>sumbit</button>
                </div>
                <div>
                    <h1>signingupForm</h1>
                    <nav>
                        <Link to ={'/Registerpage'}> </Link>
                    </nav>
                </div>

            </form>

        )

        }
}

export default Registerpage
