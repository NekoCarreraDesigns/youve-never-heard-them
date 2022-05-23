import React from "react";
import "./styles.css";

function Header() {
  return (
    <div>
      <h1 className='page-header'>
        <img alt='vinyl-record' className='app-logo' src='vinyl.png'></img>{" "}
        You've Never Heard of Them{" "}
        <img alt='vinyl-record' className='app-logo' src='vinyl.png'></img>
      </h1>
      <h2 className='second-page-header'>Music blog for music snobs</h2>
    </div>
  );
}

export default Header;
