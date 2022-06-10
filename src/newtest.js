import React,{component} from "react";
class App1 extends React.Component{
    render(){
        return (
            <div>
                <h1>this in my react test</h1>
                <h2>{this.props.name} </h2>
                <p> contains the best CS tutorials.</p>  
            </div>

        );
    }
}
export default App1;