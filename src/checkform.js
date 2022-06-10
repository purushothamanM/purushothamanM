import {Component} from 'react';

class Loginform extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            Password:'',
        }
    }
    validatelogin=(e)=>{
        e.preventDefault();
        const{Email,Password}=this.state;
        let b=JSON.parse(localStorage.getItem("details"))
        let validate=b.some((x)=>{
            return x.email===Email&&x.password===Password
        })
        console.log(validate)
        if(validate===true){
            alert("login id suceesfully")
        }
        else{
            alert("Email and password does not match")
        }

        }

    render(){
        return(
            <form onSubmit={this.validatelogin}>
               
                <h1>Loging id</h1>
                
                <div>
                    <label>Email: </label>
                    <input type="email" placeholder="enter your mailid"  onChange={e=>this.setState({Email:e.target.value})}/>
                </div><br/>
                <div>
                    <label>passwordord: </label>
                    <input type="pass" placeholder="enter your password"  onChange={e=>this.setState({Password:e.target.value})}/>
                </div><br/>
                <div>
                    <button type='submit'>Login</button>
                </div>

            </form>
        )
        }
}

export default Loginform

