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


    </div>
  )
}

export default Home;
