import React from "react";
import "./styles.css";

function Main() {
  return (
    <div>
      <h1 className='main-header'>Cave In</h1>
      <img
        className='main-image'
        alt='band'
        width={400}
        height={300}
        src='https://i.scdn.co/image/ab6761610000e5ebca59373caa5463bba104d03c'></img>
      <p className='main-paragraph'>
        Cave In release new album Heavy Pendulum which might be their best yet,
        combining all the elements of previous material into a hardcore space
        rock heavy metal ball of thunder
      </p>
    </div>
  );
}

export default Main;
