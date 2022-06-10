import React, { Component } from 'react';  

class App extends React.Component {  
 constructor() {  
      super();        
      this.state = { displayBio: true };  
      }  
      render() {  
          const bio = this.state.displayBio ? (  
              <div>  
                  <p><h3>he is one of the best Javascript trainer  in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</h3></p></div>
              ) : null; 
               
              return (  
                  <div>  
                      <h1> Welcome to JavaTpoint!! </h1>  
                      { bio }   
                  </div>  
              );  
     }  
}  
export default App;  