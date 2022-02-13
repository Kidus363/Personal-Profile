import PortfolioList from '../Portfolio.jsx/PortfolioList';
import { useEffect, useState } from "react";
import React from './portfolio.scss';

export default function portfolio() {
  
  const [selected, setSelected] = useState("featured");

  const list=[
    {
      id: 'featured',
      title: 'Featured'
    },
    {
      id: 'web',
      title: 'Web Development'
    },
    {
      id: 'work',
      title: 'Software Engineer'
    },
    {
      id: 'photography',
      title: 'Photography'
    },
  ]
  return(
      <div className="portfolio" id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
          {list.map(item=>(
            <PortfolioList 
            title={item.title} 
            active={selected == item.id} 
            setSelected={setSelected}
            id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          <div className="item">
            <img src="assets/capture.png"  alt="" />
            <h3>Project Management Sytem</h3>
          </div>   
          <div className="item">
            <img src="assets/capture.png"  alt="" />
            <h3>Project Management Sytem</h3>
          </div>   
          <div className="item">
            <img src="assets/capture.png"  alt="" />
            <h3>Project Management Sytem</h3>
          </div>   
          <div className="item">
            <img src="assets/capture.png"  alt="" />
            <h3>Project Management Sytem</h3>
          </div>   
          <div className="item">
            <img src="assets/capture.png"  alt="" />
            <h3>Project Management Sytem</h3>
          </div>          

        </div>
      </div>
  ) 
}
