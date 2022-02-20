import React from './works.scss';

export default function works() {

  const data = [
    {
      id: "1",
      icon: "/assets/PMS.JPG",
      TITLE: "Branding",
      desc:
        "Lorem Ipsum isLorem Ipsum isLorem Ipsum isLorem Ipsum isLorem Ipsum is",
      img: 
        "assets/PMS.JPG"
    },
    {
      id: "2",
      icon: "/assets/PMS.JPG",
      TITLE: "Branding",
      desc:
        "2 Lorem Ipsum isLorem Ipsum isLorem Ipsum isLorem Ipsum isLorem Ipsum is",
      img: 
        "assets/PMS.JPG"
    },
    {
      id: "3",
      icon: "/assets/PMS.JPG",
      TITLE: "Branding",
      desc:
        "2 Lorem Ipsum isLorem Ipsum isLorem Ipsum isLorem Ipsum isLorem Ipsum is",
      img: 
        "assets/PMS.JPG"
    }
  ]
  return (
  <div className='works' id="works">
    <div className="slider">
      {data.map(d=>(
      <div className="container">
        <div className="item">
          <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/PMS.jpg" alt="" />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolor  Nostrum!
                </p>
                <span>Project</span>

              </div>
          </div>
          <div className="right">
            <img src="assets/PMS.jpg" alt="" />
          </div>
        </div>
      </div>
     ))}

    </div>
    

    <img src="assets/down.png" className="arrow left" alt="" />
    <img src="assets/down.png" className="arrow right" alt="" />
  </div>
  );
}
