import React from './intro.scss';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';

export default function Intro() {

  const textRef = useRef();
  useEffect(()=>{ 
    init(textRef.current , 
      { showCursor: true,
        backSpeed:60,
        backDelay:1500,
        strings: 
        ["Web Developer", "Software Engineer", "Photography Hobysit" ] 
      });
   },[]);

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Kidus Yared</h1>
            <h3> 
               <span ref={textRef}></span>
            </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  ) 
}
