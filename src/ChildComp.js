
import React,{Component} from 'react'
class ChildComp extends React.Component {

    componentDidMount() {
      console.log('componentDidMount() lifecycle')
    }
  
    render() {
      console.log('render() lifecycle') 
      return <h1>{this.props.number} times</h1>;
    }
  }
  
  class App12 extends React.Component {
  
    state = {
      num: 0,
    };
    //<ChildComp key={this.state.num} number={this.state.num} />
  
    handleClick() {
      this.setState(state => ({ num: state.num + 1 }));
    }
  
    render() {
      return (
        <>
          <button onClick={this.handleClick.bind(this)}>Increment</button>
          <ChildComp number={this.state.num} />
        </>
      )
    }
  }
  export default App12