import React from "react";
import Myphoto from "./Myphoto.png";
function App() { 
    
    const card = {
      position:"relative",
      width: "400px",
      border: '5px solid black',
      margin: 'auto',
      boxshadow: '2px 1px 3px black',
      color: 'pink',
      fontstyle: 'italic',
      fontsize: 16
    }  
    const ts= {
      margintop: '-100px',
      position: "relative",
      color: "black"
    }  
   return ( 
  <div className="App" style={card}>
    <br></br>
    <img src={Myphoto} alt="logo" width="200" height="250"/>
    <div style={ts}>
      <p>Jayanth Kumar Allamsetty</p>
      <p>CSE Department</p>
      <p>KL University</p>
      <p>2000030043</p>
    </div>
  </div>
   );
 }
 export default App