import React from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import { useState } from 'react';

const Count=() =>{
    const [counter,setCounter]= useState(0)
    const increment= () => setCounter(counter+1)
    const decrement = ()=> setCounter(counter-1)
    const reset = ()=> setCounter(0)
    return (
      <div>
        <div>{counter}</div>
          <button onClick={increment}>click here  to increment </button>
         <button onClick={decrement}> click here to decrement</button>
         <button onClick={reset}>click here to reset</button>
      </div>
  
    )
  }
  export default Count