import React from 'react';
import "./Service.css";
import service_img_1 from "../../Assets/service_img_1.png";
import service_img_2 from "../../Assets/service_img_2.png";
import service_img_3 from "../../Assets/service_img_3.png";
import service_ico_2 from "../../Assets/service_ico_2.png";
import con_img_1 from "../../Assets/con_img_1.png";
import con_img_2 from "../../Assets/con_img_2.png";
import con_img_3 from "../../Assets/con_img_3.png";
import con_img_4 from "../../Assets/con_img_4.png";
import { FaLocationArrow } from "react-icons/fa";

function Service() {

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
    <div id="service">
        {/* Service 1 */}
       <section id="service-section-1">
            <div className='container' id="service-section-1-div-1">
               <p id="service-section-1-div-1-p-1">Services</p>
               <p id="service-section-1-div-1-p-2">Home > Services</p>
            </div>
       </section>
       {/* service 2 */}
      
      <section id="service-section-2">
         <div className='container' id="service-section-2-div-1">
             <p id="service-section-2-div-1-p-1">Services</p>
             <p id="service-section-2-div-1-p-2">Check Out Our Best Services</p>
         </div>


         <div className='container' id="service-section-2-div-2">
           <div  id="service-section-2-div-2-1"> 
             <img id="service-section-2-div-2-1-img" src={service_img_1} alt={service_img_1} />
           </div>
           <div  id="service-section-2-div-2-2"> 
            <div  id="service-section-2-div-2-2-1"> 
              <p id="service-section-2-div-2-2-1-p-1">Flagship Service</p>
            </div>
            <div  id="service-section-2-div-2-2-2"> 
              <p id="service-section-2-div-2-2-2-p-1">Wrightberg offers a robust suite of flagship services designed to address core business needs and unlock growth opportunities. Our revenue growth strategies leverage market insights and operational excellence to drive profits. Strategic consulting ensures your business navigates challenges and seizes opportunities effectively. Through marketing consulting and branding expertise, we enhance visibility and build strong brand identities. We also specialize in business valuation and exit planning, ensuring maximum value at every step. By integrating digital transformation and operational efficiency improvements, we enable sustainable and scalable success for businesses of all sizes.</p>
            </div>
            <div id="service-section-2-div-2-2-3"> 
                <div id="service-section-2-div-2-2-3-1">
                  <div id="service-section-2-div-2-2-3-1-1">
                      <img id="service-section-2-div-2-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
                      <p id="service-section-2-div-2-2-3-1-1-p-1">Revenue Growth</p>
                  </div>
                  <div id="service-section-2-div-2-2-3-1-1">
                      <img id="service-section-2-div-2-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
                      <p id="service-section-2-div-2-2-3-1-1-p-1">Strategic Consulting</p>
                  </div>
                  <div id="service-section-2-div-2-2-3-1-1">
                      <img id="service-section-2-div-2-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
                      <p id="service-section-2-div-2-2-3-1-1-p-1">Marketing Consulting</p>
                  </div>
                </div>
                <div id="service-section-2-div-2-2-3-1">
                  <div id="service-section-2-div-2-2-3-1-1">
                      <img id="service-section-2-div-2-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
                      <p id="service-section-2-div-2-2-3-1-1-p-1">Branding</p>
                  </div>
                  <div id="service-section-2-div-2-2-3-1-1">
                      <img id="service-section-2-div-2-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
                      <p id="service-section-2-div-2-2-3-1-1-p-1">Company Valuation</p>
                  </div>
                  <div id="service-section-2-div-2-2-3-1-1">
                      <img id="service-section-2-div-2-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
                      <p id="service-section-2-div-2-2-3-1-1-p-1">Business Transformation</p>
                  </div>
                </div>
                <div id="service-section-2-div-2-2-3-1">
                  <div id="service-section-2-div-2-2-3-1-1">
                      <img id="service-section-2-div-2-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
                      <p id="service-section-2-div-2-2-3-1-1-p-1">Operational Efficiency</p>
                  </div>
                  <div id="service-section-2-div-2-2-3-1-1">
                      <img id="service-section-2-div-2-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
                      <p id="service-section-2-div-2-2-3-1-1-p-1">Digital Transformation</p>
                  </div>
                  <div id="service-section-2-div-2-2-3-1-1">
                      <img id="service-section-2-div-2-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
                      <p id="service-section-2-div-2-2-3-1-1-p-1">M&A Advisory</p>
                  </div>
                </div>
            </div>
           </div>
         </div>

         



<div className='container' id="service-section-2-div-3">
<div  id="service-section-2-div-3-1"> 
  <img id="service-section-2-div-3-1-img" src={service_img_2} alt={service_img_2} />
</div>
<div  id="service-section-2-div-3-2"> 
 <div  id="service-section-2-div-3-2-1"> 
   <p id="service-section-2-div-3-2-1-p-1">Niche Services</p>
 </div>
 <div  id="service-section-2-div-3-2-2"> 
   <p id="service-section-2-div-3-2-2-p-1">Our niche services provide targeted solutions to address complex challenges and unlock unique opportunities. Sustainability consulting equips businesses to thrive while respecting the environment. Crisis management offers actionable strategies during uncertain times. Franchise development consulting enables scalable business growth through strategic partnerships. With data-driven decision support and customer experience transformation, we deliver precise insights and improved engagement. Additional services include go-to-market strategies, private equity advisory, regulatory compliance guidance, corporate culture consulting, and technology adoption strategies. Each service is designed to cater to specific business needs with precision and effectiveness.</p>
 </div>
 <div id="service-section-2-div-3-2-3"> 
     <div id="service-section-2-div-3-2-3-1">
       <div id="service-section-2-div-3-2-3-1-1">
           <img id="service-section-2-div-3-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-3-2-3-1-1-p-1">Sustainability Consulting</p>
       </div>
       <div id="service-section-2-div-3-2-3-1-1">
           <img id="service-section-2-div-3-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-3-2-3-1-1-p-1">Crisis Management</p>
       </div>
       <div id="service-section-2-div-3-2-3-1-1">
           <img id="service-section-2-div-3-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-3-2-3-1-1-p-1">Data-Driven Decision Support</p>
       </div>
     </div>
     <div id="service-section-2-div-3-2-3-1">
       <div id="service-section-2-div-3-2-3-1-1">
           <img id="service-section-2-div-3-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-3-2-3-1-1-p-1">Franchise Development</p>
       </div>
       <div id="service-section-2-div-3-2-3-1-1">
           <img id="service-section-2-div-3-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-3-2-3-1-1-p-1">Go-to-Market Strategy</p>
       </div>
       <div id="service-section-2-div-3-2-3-1-1">
           <img id="service-section-2-div-3-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-3-2-3-1-1-p-1">Customer Experience Transformation</p>
       </div>
     </div>
     <div id="service-section-2-div-3-2-3-1">
       <div id="service-section-2-div-3-2-3-1-1">
           <img id="service-section-2-div-3-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-3-2-3-1-1-p-1">Private Equity Advisory</p>
       </div>
       <div id="service-section-2-div-3-2-3-1-1">
           <img id="service-section-2-div-3-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-3-2-3-1-1-p-1">Corporate Culture Consulting</p>
       </div>
       <div id="service-section-2-div-3-2-3-1-1">
           <img id="service-section-2-div-3-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-3-2-3-1-1-p-1">Technology Adoption Strategy</p>
       </div>
     </div>
 </div>
</div>
</div>

{/* Part-4 */}

<div className='container' id="service-section-2-div-4">
<div  id="service-section-2-div-4-1"> 
  <img id="service-section-2-div-4-1-img" src={service_img_3} alt={service_img_3} />
</div>
<div  id="service-section-2-div-4-2"> 
 <div  id="service-section-2-div-4-2-1"> 
   <p id="service-section-2-div-4-2-1-p-1">Industries Served</p>
 </div>
 <div  id="service-section-2-div-4-2-2"> 
   <p id="service-section-2-div-4-2-2-p-1">At Wrightberg, we pride ourselves on versatility and adaptability across industries. Our expertise spans hospitality, where we help brands enhance guest experiences, and retail, where we optimize operations and customer engagement. In electronics and digital enterprises, we assist with innovation and market positioning. We work with educational institutions to improve operational efficiency and create impactful learning environments. In telecommunications and healthcare, we address unique industry challenges, while tourism and content creators benefit from our branding and marketing expertise. From manufacturing to real estate, we bring tailored solutions to help your business excel.</p>
 </div>
 <div id="service-section-2-div-4-2-3"> 
     <div id="service-section-2-div-4-2-3-1">
       <div id="service-section-2-div-4-2-3-1-1">
           <img id="service-section-2-div-4-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-4-2-3-1-1-p-1">Hospitality</p>
       </div>
       <div id="service-section-2-div-4-2-3-1-1">
           <img id="service-section-2-div-4-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-4-2-3-1-1-p-1">Retail</p>
       </div>
       <div id="service-section-2-div-4-2-3-1-1">
           <img id="service-section-2-div-4-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-4-2-3-1-1-p-1">Electronics</p>
       </div>
     </div>
     <div id="service-section-2-div-4-2-3-1">
       <div id="service-section-2-div-4-2-3-1-1">
           <img id="service-section-2-div-4-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-4-2-3-1-1-p-1">Digital Enterprises</p>
       </div>
       <div id="service-section-2-div-4-2-3-1-1">
           <img id="service-section-2-div-4-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-4-2-3-1-1-p-1">Educational Institutions</p>
       </div>
       <div id="service-section-2-div-4-2-3-1-1">
           <img id="service-section-2-div-4-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-4-2-3-1-1-p-1">Telecommunications</p>
       </div>
     </div>
     <div id="service-section-2-div-4-2-3-1">
       <div id="service-section-2-div-4-2-3-1-1">
           <img id="service-section-2-div-4-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-4-2-3-1-1-p-1">Healthcare</p>
       </div>
       <div id="service-section-2-div-4-2-3-1-1">
           <img id="service-section-2-div-4-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-4-2-3-1-1-p-1">Tourism</p>
       </div>
       <div id="service-section-2-div-4-2-3-1-1">
           <img id="service-section-2-div-4-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-4-2-3-1-1-p-1">Content Creators</p>
       </div>
     </div>
     <div id="service-section-2-div-4-2-3-1">
       <div id="service-section-2-div-4-2-3-1-1">
           <img id="service-section-2-div-4-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-4-2-3-1-1-p-1">Manufacturing</p>
       </div>
       <div id="service-section-2-div-4-2-3-1-1">
           <img id="service-section-2-div-4-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-4-2-3-1-1-p-1">E-commerce</p>
       </div>
       <div id="service-section-2-div-4-2-3-1-1">
           <img id="service-section-2-div-4-2-3-1-1-img" src={service_ico_2} alt={service_ico_2} />
           <p id="service-section-2-div-4-2-3-1-1-p-1">Real Estate</p>
       </div>
     </div>
 </div>
</div>
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

export default Service;
