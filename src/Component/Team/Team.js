import React from 'react';
import "./Team.css";
import { FaStar } from "react-icons/fa6";
import card_img_1 from "../../Assets/card_img_1.png";
import card_img_2 from "../../Assets/card_img_2.png";
import our_team_card_img_1 from "../../Assets/our_team_card_img_1.png";
import our_team_card_img_2 from "../../Assets/our_team_card_img_2.png";
import our_team_card_img_3 from "../../Assets/our_team_card_img_3.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import con_img_1 from "../../Assets/con_img_1.png";
import con_img_2 from "../../Assets/con_img_2.png";
import con_img_3 from "../../Assets/con_img_3.png";
import con_img_4 from "../../Assets/con_img_4.png";
import { FaLocationArrow } from "react-icons/fa";

function Team() {

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
      
       const our_team_data = [{
        id: 1,
        name: "Shridar Rayasam",
        img: `${our_team_card_img_1}`
       }, {
        id: 2,
        name: "Shridar Rayasam",
        img: `${our_team_card_img_2}`
       },
       {
        id: 3,
        name: "Shridar Rayasam",
        img: `${our_team_card_img_3}`
       }
      ];

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
    <div id="team">
       {/* team 1 */}
       <section id="team-section-1">
            <div className='container' id="team-section-1-div-1">
               <p id="team-section-1-div-1-p-1">Team</p>
               <p id="team-section-1-div-1-p-2">Home > Team</p>
            </div>
       </section>

       <section id="home-section-7">
       <div className='container' id="home-section-7-div-1">
          <p id="home-section-7-div-1-p-1">Our team</p>
          <p id="home-section-7-div-1-p-2">Meet the Experts Behind Wrightberg</p>
          <p id="home-section-7-div-1-p-3">Our team at Wrightberg Business Services Ltd. is composed of industry leaders and seasoned professionals who bring unparalleled expertise and dedication to the table. With a collective mission to drive business success, our consultants offer deep insights, innovative strategies, and hands-on experience across diverse industries.</p>
       </div>
       <div className='container' id="home-section-7-div-2">
         {
           our_team_data.map((item) => (
             <div id="home-section-7-div-2-card">
             <div id="home-section-7-div-2-card-1">
             <img id="home-section-7-div-2-card-1-img" src={item.img} alt={item.img} />
             </div>
             <div id="home-section-7-div-2-card-2">
              <p id="home-section-7-div-2-card-2-p-1">{item.name}</p>
             </div>
             <div id="home-section-7-div-2-card-3">
                <div id="home-section-7-div-2-card-3-1">
                   <FaFacebookF id="home-section-7-div-2-card-3-1-ico-1" />
                </div>
                <div id="home-section-7-div-2-card-3-2">
                   <FaInstagram id="home-section-7-div-2-card-3-2-ico-1" />
                </div>
                <div id="home-section-7-div-2-card-3-3">
                   <FaTwitter id="home-section-7-div-2-card-3-3-ico-1" />
                </div>
             </div>
         </div>
           ) )
         }
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

export default Team
