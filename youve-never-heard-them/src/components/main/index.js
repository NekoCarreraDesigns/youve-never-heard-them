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
      <h1 className='main-rotation-header'>Current Listening Rotation</h1>
      <div className='rotation-section'>
        <div className='rotation-artist'>
          <h2 className='rotation-header'>Church of Misery</h2>
          <img
            alt='band'
            height={500}
            width={400}
            src='https://riseaboverecords.com/wp-content/uploads/Church-of-Misery-2013.jpg'></img>
        </div>
        <div className='rotation-artist'>
          <h2 className='rotation-header'>Khruangbin</h2>
          <img
            alt='band'
            height={500}
            width={400}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eZVcMkFOyhgPPvy18jkAOB4GS4dWW_aWkQ&usqp=CAU'></img>
        </div>
        <div className='rotation-artist'>
          <h2 className='rotation-header'>An Autumn for Crippled Children</h2>
          <img
            alt='band'
            height={500}
            width={400}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLM9p3X8xSwflUQNAWjdB7UF1tp2ACBOFiTw&usqp=CAU'></img>
        </div>
      </div>
      <div className='rotation-section-1'>
        <div className='rotation-artist'>
          <h2 className='rotation-header'>1000mods</h2>
          <img
            alt='band'
            width={400}
            height={500}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxBOjCYUb7YJM6KiORQvT8Pc7Ix1Au75vBGA&usqp=CAU'></img>
        </div>
        <div className='rotation-artist'>
          <h2 className='rotation-header'>Still Corners</h2>
          <img
            alt='band'
            width={400}
            height={500}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcOMghhRffRg9u5mOEuJTPGFmpZjSgoVke_Q&usqp=CAU'></img>
        </div>
        <div className='rotation-artist'>
          <h2 className='rotation-header'>Jupiterian</h2>
          <img
            alt='band'
            width={400}
            height={500}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUVaXWQBAjQJJIGjWDPOoKCh48VJTB8xLsQ&usqp=CAU'></img>
        </div>
      </div>
    </div>
  );
}

export default Main;
