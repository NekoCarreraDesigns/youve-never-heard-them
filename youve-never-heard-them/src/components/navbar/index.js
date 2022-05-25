import React from "react";
import "./styles.css";

function Navbar() {
  return (
    <div>
      <a className='navbar-link' href='/archives'>
        <img alt='record-crate' src='crate.png'></img>
      </a>
      <a className='navbar-link' href='/forum'>
        <img alt='record-crate' src='chat.png'></img>
      </a>
    </div>
  );
}

export default Navbar;
