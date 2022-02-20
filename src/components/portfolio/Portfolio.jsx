import PortfolioList from '../Portfolio.jsx/PortfolioList';
import { useEffect, useState } from "react";
import React from './portfolio.scss';
import {
  featuredPortfolio,
  webPortfolio,
  softwarePortfolio,
  researchPortfolio,
  photographPortfolio
} from '../../data';

export default function Portfolio() {
  
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list=[
    {
      id: 'featured',
      title: 'Featured'
    },
    {
      id: 'web',
      title: 'Web'
    },
    {
      id: 'software',
      title: 'System'
    },
    {
      id: 'research',
      title: 'Research'
    },
    {
      id: 'photography',
      title: 'Photography'
    },
  ];

  useEffect(()=>{
    switch(selected){
      case "featured":
        setData(featuredPortfolio)
        break;
      case "web":
        setData(webPortfolio)
        break;
      case "software":
        setData(softwarePortfolio)
        break;
      case "research":
        setData(researchPortfolio)
        break;
      case "photography":
        setData(photographPortfolio)
        break;
      
        default:
          setData(featuredPortfolio);
    }    
  }, [selected])
  return(
      <div className="portfolio" id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
          {list.map(item=>(
            <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map(d=>(

          <div className="item">
            <img src={d.img}  alt="" />
            <h3>{d.title}</h3>
          </div>            
          ))}

        </div>
      </div>
  ) 
}
