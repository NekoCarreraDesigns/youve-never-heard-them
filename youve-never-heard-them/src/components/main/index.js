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
      <h1 className='main-header'>Khruangbin</h1>
      <img
        className='main-image'
        alt='band'
        width={500}
        height={400}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_k3GhP7gEfb0TYMZYF5PBS7qjgeHqeM48A&usqp=CAU'></img>
      <p className='main-paragraph'>
        Texas funky soul chill out music that should be enjoyed under the stars,
        with a lover snuggled up under a blanket
      </p>
      <div className='rotation-section'>
        <h1 className='main-rotation-header'>Current Listening Rotation</h1>
        <div className='rotation-artist'>
          <h2 className='rotation-header'>Church of Misery</h2>
          <img
            alt='band'
            height={400}
            width={500}
            src='https://riseaboverecords.com/wp-content/uploads/Church-of-Misery-2013.jpg'></img>
        </div>
        <div className='rotation-artist'>
          <h2 className='rotation-header'>Church of Misery</h2>
          <img
            alt='band'
            height={400}
            width={500}
            src='https://riseaboverecords.com/wp-content/uploads/Church-of-Misery-2013.jpg'></img>
        </div>
      </div>
    </div>
  );
}

export default Main;
