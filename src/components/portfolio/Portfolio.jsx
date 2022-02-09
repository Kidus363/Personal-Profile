import React from './portfolio.scss';

export default function portfolio() {
  return(
      <div className="portfolio" id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
          <li>Website</li>
          <li>System</li>
          <li>Apis</li>
          <li>Photography</li>
          <li>Others</li>
        </ul>
        <div className="container">
          <div className="item">
            <img src="" alt="" />
            <h3>Project Management Sytem</h3>
            </div>          
        </div>
      </div>
  ) 
}
