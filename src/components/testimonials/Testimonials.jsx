import React from './testimonials.scss';

export default function testimonials() {

  const data = [
    {
      id: "1",
      name: "Kidus",
      icon: "/assets/youtube.png",
      title: "Kemasa",
      desc:
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
      img: 
        "assets/profile.JPG"
    },
    {
      id: "2",
      name: "Yonas",
      icon: "/assets/youtube.png",
      title: "CMU MSc",
      desc:
      "lorem loreml oremlore mlorem loreml oremlor emlore mlore mlor emlo rem",
      img: 
        "assets/download.JPG",
      featured:
        "true"
    },
    {
      id: "3",
      name: "Philip",
      icon: "/assets/youtube.png",
      title: "Mahrashi",
      desc:
      "lore mloreml oreml oremlo remlorem loremlo r emlore mlorem lorem lorem lorem",
      img: 
        "assets/download.JPG"
    },
  ];
  return (
       <div className='testimonials' id='testimonials'>
         <h1>Testimonials</h1>
         <div className="container">
           {data.map(d=>(

           <div className={d.featured ? "card featured" : "card"}>
             <div className="top">
               <img src="assets/right_2.png" className='left' alt="" />
               <img className='user' src={d.img} alt="" />
               <img className='right' src={d.icon} alt="" />
             </div>
             <div className="center">
                {d.desc}
             </div>
             <div className="bottom">
               <h3>{d.name} </h3>
               <h4>{d.title}</h4>
             </div>
           </div>
          ))}
         </div>
         
      </div>
  )
}
