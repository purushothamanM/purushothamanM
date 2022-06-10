import {Component} from 'react';

class Login1 extends Component{
    constructor(){
        super();
        this.state={
            e_mail:'',
            passw:'',
        }
    }
    validatelogin=(e)=>{
        e.preventDefault();
        const{e_mail,passw}=this.state;
        let b=JSON.parse(localStorage.getItem("details"))
        let validate=b.some((x)=>{
            return x.email===e_mail&&x.password===passw
        })
        console.log(validate)
        if(validate===true){
            document.getElementById("root").innerHTML="LOGIN SUCCESSFULL"
        }
        else{
            alert("EMAIL ID OR PASSWORD DOES NOT MATCH")
        }


    }

    render(){
        return(
            <form onSubmit={this.validatelogin}>
                <h1>LOG IN</h1>
                <div>
                    <label>Email: </label>
                    <input type="email" placeholder="enter your mail id" onChange={e=>this.setState({e_mail:e.target.value})}/>
                </div><br/>
                <div>
                    <label>Password: </label>
                    <input type="password" placeholder="enter the password" onChange={e=>this.setState({passw:e.target.value})}/>
                </div><br/>
                <div>
                    <button type='submit'>Login</button>
                </div>

            </form>
        )
        }
}

export default Login1
