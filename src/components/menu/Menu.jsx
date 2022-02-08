import React from './menu.scss';

export default function setMenuOpen({menuOpen, setMenuOpen}) {
  return(
      <div className={"menu "+(menuOpen && "active")}>
          <ul>
              <li>
                  <a href="#intro">Home</a>
              </li>
              <li>
                  <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                  <a href="#works">Works</a>
              </li>
              <li>
                  <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                  <a href="#contacts">Contact</a>
              </li>
          </ul>

      </div>
  ) 
}
