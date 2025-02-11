import React, {useState} from 'react';
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
import { IoIosArrowForward } from "react-icons/io";
import home_drop_data_slide_img from "../../Assets/writeberg_slide_img.png";
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
  }];


  // Dropdown click

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  //DropDown Data

  const Dropdata = [
    {
      id: 1,
      name: "Initial Consultation",
      description:
        "We begin with an in-depth discussion to understand your business, its challenges, and its goals. This step sets the foundation for a strong partnership and ensures alignment with your vision.",
    },
    {
      id: 2,
      name: "Needs Assessment",
      description:
        "Our team conducts a thorough analysis of your current operations, market position, and organizational strengths and weaknesses to identify areas for improvement and growth opportunities.",
    },
    {
      id: 3,
      name: "Strategic Planning",
      description:
        "Based on our assessment, we develop a tailored strategy that aligns with your business objectives. This includes short-term tactics and long-term plans for sustainable success.",
    },
    {
      id: 4,
      name: "Goal Setting and KPIs",
      description:
        "Clear and measurable goals are established, along with key performance indicators (KPIs) to track progress and ensure accountability throughout the process.",
    },
    {
      id: 5,
      name: "Market and Competitor Analysis",
      description:
        "We perform detailed market research and competitor benchmarking to position your business effectively within the industry and identify untapped opportunities.",
    },
    {
      id: 6,
      name: "Solution Design",
      description:
        "Our experts design customized solutions that address your unique challenges. This may include operational improvements, branding strategies, revenue growth initiatives, or digital transformation plans.",
    },
    {
      id: 7,
      name: "Implementation Support",
      description:
        "Wrightberg doesn’t just deliver recommendations; we actively support the implementation of strategies, working alongside your team to ensure seamless execution.",
    },
    {
      id: 8,
      name: "Monitoring and Optimization",
      description:
        "We closely monitor the implementation phase, analyzing outcomes and making necessary adjustments to maximize effectiveness and ensure desired results are achieved.",
    },
    {
      id: 9,
      name: "Evaluation and Reporting",
      description:
        "Regular evaluations are conducted to measure success against predefined KPIs. Comprehensive reports provide insights into progress, achievements, and areas for further improvement.",
    },
    {
      id: 10,
      name: "Continuous Improvement",
      description:
        "Consulting doesn’t end with the initial project. We offer ongoing support to refine strategies, adapt to market changes, and drive sustained growth for your business. ",
    },
  ];

 // card data

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
]

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
            <button onClick={() => window.location.href=`/about`} id="carousel-content-1-div-3-button">Read More</button>
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
             <button onClick={() => window.location.href=`/about`} id="home-section-2-div-1-2-4-button">Learn More</button>
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
               <button  onClick={() => window.location.href=`/service`} id="home-section-3-div-3-1-card-1-3-button">Read more <img src={service_ico_1} alt={service_ico_1} /></button>
            </div>
          </div>
          ))
        }
      </div>
  </div>
</section>

{/* Home-section-4 */}

<section id='home-section-4'>
   <div className='container' id="home-section-4-div-1">
          <p id="home-section-4-div-1-p-1">Weightberg Process</p>
   </div>
   <div className='container' id="home-section-4-div-2">
    <p id="home-section-4-div-2-p-1">At Wrightberg, we pride ourselves on delivering comprehensive and results-oriented consulting services. Our consulting process is structured to provide clarity, efficiency, and measurable outcomes for every client. Here are the 10 key steps that define our approach:</p>
   </div>

  <div className='container' id="home-section-4-div-3">
    <div id="home-section-4-div-3-div">
    
    {
      Dropdata.map((item, i) => (
        <div id='home-section-4-div-3-1' onClick={() => toggle(i)}>
        <div id='home-section-4-div-3-1-1'>
          <div id='home-section-4-div-3-1-1-1'>
          <div id='home-section-4-div-3-1-1-1-1'>
            <p id='home-section-4-div-3-1-1-1-1-p-1'>{item.id}</p>
          </div>
          <div id='home-section-4-div-3-1-1-1-2'>
            <p id="home-section-4-div-3-1-1-1-2-p-1">{item.name}</p>
          </div>
          </div>
          <div id='home-section-4-div-3-1-1-2'>
            <div id="home-section-4-div-3-1-1-2-1"> 
            <IoIosArrowForward id="home-section-4-div-3-1-1-2-1-ico" />
            </div>
          </div>
        </div>
  {
    selected === i && <div id='home-section-4-div-3-1-2'>
    <p id='home-section-4-div-3-1-2-p-1'>{item.description}</p>
 </div >
  }
        
  
       </div>
      ))
    }
 </div>
      <div id='home-section-4-div-3-2'>
         <img id='home-section-4-div-3-2-img' src={home_drop_data_slide_img} alt={home_drop_data_slide_img} />
     </div>
  </div>

</section>


{/* section 5 */}
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

{/* section 6 */}

<section id="home-section-6">

<div className='container' id="home-section-6-div-1">
    <p id="home-section-6-div-1-p-1">Consulting Videos</p>
</div>

<div id="home-section-6-div-2">
  {
    consulting_card.map((item) => (
<img id="home-section-6-div-2-img" src={item.img} alt={item.img} />
    ))
  }
  
</div>

</section> 

{/* Section 7 */}

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

{/* Section 8 */}


<section id="home-section-8">
  <div className='container' id="home-section-8-div-1">
   <p id="home-section-8-div-1-p-1">Looking to grow, scale, or increase your revenue? Let’s connect!”</p>
  </div>
  <div className='container' id="home-section-8-div-2">
    <input id="home-section-8-div-2-input" type="text" placeholder="Enter Email" />
    <button id="home-section-8-div-2-button"><FaLocationArrow id="home-section-8-div-2-button-ico" /></button>
  </div>
</section>





    </div>
  )
}

export default Home;
