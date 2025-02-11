import React from 'react';
import "./About.css";
import home_about_slide_img from "../../Assets/about_slide.png";
import mission from "../../Assets/mission.png";
import vision from "../../Assets/vision.png";
import { FaStar } from "react-icons/fa6";
import card_img_1 from "../../Assets/card_img_1.png";
import card_img_2 from "../../Assets/card_img_2.png";
import con_img_1 from "../../Assets/con_img_1.png";
import con_img_2 from "../../Assets/con_img_2.png";
import con_img_3 from "../../Assets/con_img_3.png";
import con_img_4 from "../../Assets/con_img_4.png";
import { FaLocationArrow } from "react-icons/fa";


function About() {

    const card_1 = [{
        id: 1,
        name:"James Anderson",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        occupation: "Analyst",
        img:`${card_img_1}`
       }, {
        id: 2,
        name:"Sara",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        occupation: "Developer",
        img:`${card_img_2}`
       }, {
        id: 3,
        name:"James Anderson",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        occupation: "Analyst",
        img:`${card_img_1}`
       }];

       const consulting_card = [{
        id: 1,
        img: `${con_img_1}`
      }, {
        id: 2,
        img: `${con_img_2}`
      }, {
        id: 3,
        img: `${con_img_3}`
      }, {
        id: 4,
        img: `${con_img_4}`
      }, {
        id: 5,
        img: `${con_img_1}`
      }]

  return (
    <div id="about"> 
       {/* About 1 */}
 <section id="about-section-1">
 <div className='container' id="about-section-1-div-1">
    <p id="about-section-1-div-1-p-1">About</p>
    <p id="about-section-1-div-1-p-2">Home > About</p>
 </div>
</section>

{/* About 2 */}

<section id="home-section-2">
     <div className='container' id="home-section-2-div-1">
         <div id="home-section-2-div-1-1">
           <img id="home-section-2-div-1-1-img" src={home_about_slide_img} alt={home_about_slide_img} />
         </div>
         <div id="home-section-2-div-1-2">
           <div id="home-section-2-div-1-2-1">
               <div id="home-section-2-div-1-2-1-line">

               </div>
              <p id="home-section-2-div-1-2-1-p-1">About Us</p>
               <div id="home-section-2-div-1-2-1-line">

               </div>
           </div>
           <div id="home-section-2-div-1-2-2">
            <p id="home-section-2-div-1-2-2-p-1">Building Brands, Scaling Heights, Transforming Futures</p>
            <p id="home-section-2-div-1-2-2-p-2">At Wrightberg Business Services Ltd., we specialize in empowering businesses to achieve their full potential. From building strong brand foundations to scaling operations and optimizing exits, we are your trusted partners in growth. Our solutions cater to diverse industries and are tailored to meet the unique challenges of SMEs, MSMEs, and publicly listed companies. </p>
           </div>
           <div id="home-section-2-div-1-2-3">
           <div id="home-section-2-div-1-2-3-1">
                <div id="home-section-2-div-1-2-3-1-1">
                <img id="home-section-2-div-1-2-3-1-1" src={mission} alt={mission} />
                </div>
                <div id="home-section-2-div-1-2-3-1-2">
                 <p id="home-section-2-div-1-2-3-1-2-p-1">Mission</p>
                 <p id="home-section-2-div-1-2-3-1-2-p-2">To help businesses build, scale, valuate, and achieve successful exits.</p>
                </div>
              </div>
              <div id="home-section-2-div-1-2-3-2">
                <div id="home-section-2-div-1-2-3-2-1">
                <img id="home-section-2-div-1-2-3-2-1" src={vision} alt={vision} />
                </div>
                <div id="home-section-2-div-1-2-3-2-2">
                 <p id="home-section-2-div-1-2-3-2-2-p-1">Vision</p>
                 <p id="home-section-2-div-1-2-3-2-2-p-2">To become the most trusted consulting partner for sustainable and strategic growth.</p>
                </div>
              </div>
           </div>
           {/* <div id="home-section-2-div-1-2-4">
             <button id="home-section-2-div-1-2-4-button">Learn More</button>
           </div> */}
         </div>
     </div>
</section>

{/* Section 3 */}

<section id="home-section-5">
   <div id="home-section-5-div-1">
     <p id="home-section-5-div-1-p-1">Testimonials</p>
   </div> 

<div className='container' id="home-section-5-div-2">
  {
    card_1.map((item) => (
<div id="home-section-5-div-2-card">
<div id="home-section-5-div-2-card-1">
<FaStar id="home-section-5-div-2-card-1-star" />
<FaStar id="home-section-5-div-2-card-1-star" />
<FaStar id="home-section-5-div-2-card-1-star" />
<FaStar id="home-section-5-div-2-card-1-star" />
<FaStar id="home-section-5-div-2-card-1-star" />
</div>
<div id="home-section-5-div-2-card-2">
  <p id="home-section-5-div-2-card-2-p-1">{item.description}</p>
</div>
<div id="home-section-5-div-2-card-3">
<img id="home-section-5-div-2-card-3-img_1" src={item.img} alt={item.img} />
</div>
<div id="home-section-5-div-2-card-4">
<p id="home-section-5-div-2-card-4-p-1">{item.name}</p>
</div>
<div id="home-section-5-div-2-card-5">
  <p id="home-section-5-div-2-card-5-p-1">{item.occupation}</p>
</div>
</div>
    ))
  }

</div>
</section>

{/* Section 3 */}

 <section id="service-section-3">
<div id="service-section-3-div-2">
  {
    consulting_card.map((item) => (
<img id="service-section-3-div-2-img" src={item.img} alt={item.img} />
    ))
  }
  
</div>
</section> 

{/* Section 4 */}

<section id="service-section-4">
  <div className='container' id="service-section-4-div-1">
   <p id="service-section-4-div-1-p-1">Looking to grow, scale, or increase your revenue? Let’s connect!”</p>
  </div>
  <div className='container' id="service-section-4-div-2">
    <input id="service-section-4-div-2-input" type="text" placeholder="Enter Email" />
    <button id="service-section-4-div-2-button"><FaLocationArrow id="service-section-4-div-2-button-ico" /></button>
  </div>
</section>

    </div>
  )
}

export default About
