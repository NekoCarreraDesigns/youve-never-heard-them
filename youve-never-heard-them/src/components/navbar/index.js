import React from "react";
import "./styles.css";

function Navbar() {
  return (
    <div>
      <a className='navbar-link' href='/archives'>
        <img alt='record-crate' src='crate.png'></img>
      </a>
      <a className='navbar-link' href='/forum'>
        <img alt='thought-bubble' src='chat.png'></img>
      </a>
      <a className='navbar-link' href='/music'>
        <img alt='vinyl-player' src='vinyl-player.png'></img>
      </a>
    </div>
  );
}

export default Navbar;
