import React, { useState } from "react";
import './../styles/App.css';

export default function App(){
  const [show, setShow] = useState(false);

  const handleClick = () =>{
    setShow(true);
  };

  return (
    <div id="main">
      <p
        id="para"
        className={show ? "show": "hide"}>
          Hello, I've learnt to use the full-stack evaluation tool.
          This makes me so happy
        </p>

        <button id="click" onClick={handleClick}>
          Click Me
        </button>
    </div>
  );
}