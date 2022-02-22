import React from './works.scss';
import { useState } from "react";

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "/assets/PMS.JPG",
      TITLE: "1 Branding",
      desc:
        "2 Lorem Ipsum isLorem Ipsum isLorem Ipsum isLorem Ipsum isLorem Ipsum is",
      img: 
        "assets/PMS.JPG"
    },
    {
      id: "2",
      icon: "/assets/PMS.JPG",
      TITLE: "Not Branding",
      desc:
        "2 Lorem Ipsum isLorem Ipsum isLorem Ipsum isLorem Ipsum isLorem Ipsum is",
      img: 
        "assets/PMS.JPG"
    },
    {
      id: "3",
      icon: "/assets/PMS.JPG",
      TITLE: "3 Branding",
      desc:
        "2 Lorem Ipsum isLorem Ipsum isLorem Ipsum isLorem Ipsum isLorem Ipsum is",
      img: 
        "assets/PMS.JPG"
    },
    {
      id: "4",
      icon: "/assets/PMS.JPG",
      TITLE: "4 Branding",
      desc:
        "2 Lorem Ipsum isLorem Ipsum isLorem Ipsum isLorem Ipsum isLorem Ipsum is",
      img: 
        "assets/PMS.JPG"
    },
  ]

  const handleClick = (way)=>{
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
    : setCurrentSlide(currentSlide < data.length - 1  ? currentSlide + 1 : 0)
  }
  return (
  <div className='works' id="works">
    <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
      {data.map(d=>(
      <div className="container">
        <div className="item">
          <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.TITLE}</h2>
                <p>{d.desc}</p>
                <span>ProjectS</span>

              </div>
          </div>
          <div className="right">
            <img src="assets/PMS.jpg" alt="" />
          </div>
        </div>
      </div>
     ))}

    </div>
    

    <img src="assets/down.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
    <img src="assets/down.png" className="arrow right" alt="" onClick={()=>handleClick("right")}  />
  </div>
  );
}
