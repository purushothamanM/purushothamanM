import { Routes,Router, Route } from "react-router-dom"
import { Link } from "react-router-dom";
import Keyboard from "./Keyboard"
import Monitor from "./Monitor"
import Mouse from "./Mouse"

function Appoo() {
  return (

    <div className="App">
 
           
      <Routes>
        <Route path="/" element={ <Keyboard/> } />
        <Route path="Monitor" element={ <Monitor/> }/>
        <Route path="Mouse" element={ <Mouse/> } />
        <Route path="/" element={ <Keyboard/> } />
      </Routes>
    </div>
    
  )
}

export default Appoo