import React, {useState, useEffect} from 'react';
import "./Home.css";
import home_carousel_img_1 from "../../Assets/home_bg_1.png";
import home_carousel_img_2 from "../../Assets/home_bg_2.png";
import home_carousel_img_3 from "../../Assets/home_bg_3.png";
import home_about_slide_img from "../../Assets/about_slide.png";
import mission from "../../Assets/mission.png";
import vision from "../../Assets/vision.png";
import service_ico from "../../Assets/service_ico.png";
import service_ico_1 from "../../Assets/service_ico_1.png";
import service_card_img_1 from "../../Assets/service_card_img_1.png";
import service_card_img_2 from "../../Assets/service_card_img_2.png";
import service_card_img_3 from "../../Assets/service_card_img_3.png";

function Home() {


  const service_card_data = [{
    id: 1,
    name:"Flagship Services",
    description:"Wrightberg offers a robust suite of flagship services designed to address core business needs and unlock growth opportunities.",
    img: `${service_card_img_1}`
  }, {
    id: 2,
    name:"Niche Services",
    description:"Our niche services provide targeted solutions to address complex challenges and unlock unique opportunities. Sustainability consulting.",
    img: `${service_card_img_2}`
  }, {
    id: 3,
    name:"Industries Served",
    description:"At Wrightberg, we pride ourselves on versatility and adaptability across industries. Our expertise spans hospitality, where.",
    img: `${service_card_img_3}`
  }]

  return (
    <div id="home">

      {/* home-section-1 */}

        <section id="home-section-1">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div id="carousel-image">
    <div class="carousel-item active">
      <img src={home_carousel_img_1} class="d-block" id="d-block" alt={home_carousel_img_1} />
    </div>
    <div class="carousel-item">
      <img src={home_carousel_img_2} class="d-block" id="d-block" alt={home_carousel_img_2} />
    </div>
    <div class="carousel-item">
      <img src={home_carousel_img_3} class="d-block" id="d-block" alt={home_carousel_img_3} />
    </div>
    </div>
    <div id="carousel-content">
        <div id="carousel-content-1">
          <div
          className='container' id="carousel-content-1-div-2">
           <h6 id="carousel-content-1-div-2-h6-1">Building Brands, Scaling Heights,
           Transforming Futures</h6>
          </div>
          <div

          className='container' id="carousel-content-1-div-3">
           <p id="carousel-content-1-div-3-p-1">Strategic consulting for SMEs, MSMEs, and publicly listed companies to grow, scale, and thrive.</p>
          </div>
          <div
          className='container' id="carousel-content-1-div-3">
            <button id="carousel-content-1-div-3-button">Read More</button>
          </div>
        </div>
    </div>
   
  </div>
</div>
        </section>

{/* Home section 2 */}

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
           <div id="home-section-2-div-1-2-4">
             <button id="home-section-2-div-1-2-4-button">Learn More</button>
           </div>
         </div>
     </div>
</section>

{/* Home-section-3 */}

<section id="home-section-3">
 
 <div className='container' id="home-section-3-div-1">
    <button id="home-section-3-div-1-button-1">Service</button>
    <button id="home-section-3-div-1-button-2">All Services <img src={service_ico} alt={service_ico} /></button>
 </div>

 <div className='container' id="home-section-3-div-2">
 <p id="home-section-3-div-2-p-1">Check Out Our Best Services</p>
 </div>

  <div className='container' id="home-section-3-div-3">
      <div id="home-section-3-div-3-1">
        {
          service_card_data.map((item) => (
            <div id="home-section-3-div-3-1-card-1">
            <div id="home-section-3-div-3-1-card-1-1">
             <img id="home-section-3-div-3-1-card-1-1-img" src={item.img} alt={item.img} />
            </div>
            <div id="home-section-3-div-3-1-card-1-2">
              <p id="home-section-3-div-3-1-card-1-2-p-1">{item.name}</p>
              <p id="home-section-3-div-3-1-card-1-2-p-2">{item.description}</p>
            </div>
            <div id="home-section-3-div-3-1-card-1-3">
               <button id="home-section-3-div-3-1-card-1-3-button">Read more <img src={service_ico_1} alt={service_ico_1} /></button>
            </div>
          </div>
          ))
        }
      </div>
  </div>

</section>


    </div>
  )
}

export default Home;
