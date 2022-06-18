import React from "react";
import naruto from "./naruto.jpg";
function App() { 
    
    const imagecss = {
      
      border: '1px solid black',
      width: '300px',
      boxShadow: '2px 3px 5px black',
      color: 'black',
      margin: 'auto',
      textAlign: 'center',
    
    }  
    const contentcss= {
   
      margintop: '100px',
      position: "center",
      color: "black"
    }  

   return ( 
  <div className="App" style={imagecss}>
    <br></br>
    <img src={naruto} alt="logo" width="200" height="250"/>
    <div style={contentcss}>
      <p>Jayanth Kumar Allamsetty</p>
      <p>Front end developer</p>
      <p>CSE Department</p>
      <p>KL University</p>
      <p>2000030043</p>
    </div>
  </div>
   );
 }
 export default App