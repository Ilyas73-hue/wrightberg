import React from 'react';
import blog_img from "../../Assets/blog_3.png";
import message_ico from "../../Assets/message_ico.png";
import con_img_1 from "../../Assets/con_img_1.png";
import con_img_2 from "../../Assets/con_img_2.png";
import con_img_3 from "../../Assets/con_img_3.png";
import con_img_4 from "../../Assets/con_img_4.png";
import { FaLocationArrow } from "react-icons/fa";

function Blogthree() {

    const content_1 = [{
        id: 1,
    description: "India is rapidly emerging as a global hub for AI-driven business transformation. With strong government support through initiatives like Digital India and Startup India, the country is poised for exponential growth in AI adoption. These programs promote technological advancements and create an enabling environment for startups and established businesses to innovate and thrive."
    }];

    const content_2 = [{
        id: 1,
    description: "AI is already transforming sectors such as healthcare, retail, and agriculture. In healthcare, AI-driven diagnostics and telemedicine are improving accessibility and accuracy. AI-powered systems analyze vast amounts of medical data to identify patterns, enabling early diagnosis and personalized treatment plans. Telemedicine platforms supported by AI facilitate remote consultations, making healthcare more accessible to rural and underserved areas."
    }, {
        id: 2,
        description: "In retail, AI is enhancing inventory management and customer insights. Retailers use AI to predict demand, optimize supply chains, and provide personalized recommendations to customers. Chatbots and virtual assistants improve customer service, offering round-the-clock support and personalized experiences. AI also streamlines backend operations, reducing costs and increasing efficiency."  
    }, {
        id: 3,
        description: "Agriculture is leveraging AI for precision farming and yield optimization. AI-enabled tools analyze soil quality, monitor crop health, and provide insights for better resource utilization. Drones equipped with AI technologies help farmers assess field conditions and implement data-driven strategies, ultimately boosting productivity and sustainability."  
    }];

    const content_3 = [{
        id: 1,
    description: "The role of government policies in promoting AI infrastructure, workforce development, and data governance cannot be overstated. Investments in AI research, skill development programs, and public-private partnerships are laying the foundation for a robust AI ecosystem. Initiatives like the National AI Strategy and the creation of AI research centres are enabling innovation and accelerating AI adoption across industries."
    }, {
      id: 2,
    description: "Moreover, the government is focusing on ethical AI practices, data privacy, and cybersecurity. Policies encouraging transparency and accountability ensure responsible AI development while protecting user data. These efforts enhance public trust and create an environment conducive to AI integration."
    }];


    const content_4 = [{
        id: 1,
    description: "Businesses must prepare for this transformation by investing in AI tools, training employees for AI-driven roles, and forming partnerships to leverage technological advancements. Companies that embrace AI will not only thrive in this evolving environment but also lead the way in shaping the future of business in India."
    }, {
         id: 2,
    description: "Organizations need to foster a culture of innovation and adaptability. Investing in AI-driven analytics, automation tools, and machine learning platforms can streamline operations and unlock new growth opportunities. Upskilling the workforce through AI-focused training programs will equip employees with the knowledge and expertise to handle AI systems effectively."
    }, {
          id: 3,
    description: "Collaborations with AI startups and technology providers can further accelerate AI adoption. Companies can enhance decision-making, optimize workflows, and improve customer experiences by integrating AI into business processes."
    }];

    const content_5 = [{
        id: 1,
    description: "India’s growing startup ecosystem, coupled with advancements in AI and machine learning, positions the country as a leader in global innovation. Businesses that leverage AI for decision-making, process automation, and customer engagement will drive economic growth and set new benchmarks for success."
    }, {
         id: 2,
    description: "The integration of AI into industries will lead to smarter business strategies and more efficient operations. As Indian companies continue to innovate, they will attract global investments and collaborations, strengthening their presence in international markets."
    }, {
        id: 3,
    description: "AI is not just a tool for technological enhancement but a transformative force reshaping the future of business in India. With supportive government policies, an expanding talent pool, and a thriving startup culture, India is well-positioned to lead the AI revolution. Companies that embrace this change will be at the forefront of innovation, driving growth and redefining success in the digital age."
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
    <div id="blogtwo">
        {/* Blogtwo 1 */}

        <section id="blogtwo-section-1">
<div className='container' id="blogtwo-section-1-div-1">
   <p id="blogtwo-section-1-div-1-p-1">The Future of Business in India</p>
</div>
</section>

<section id="blogtwo-section-2">
<div className='conatiner' id="blogone-section-2-div-1">
                <img id="blogone-section-2-div-1-img" src={blog_img} alt={blog_img} />
                <p id="blogone-section-2-div-1-p-1">The Future of Business in India: AI and Beyond</p>
           </div>

           <div className='container' id="blogone-section-2-div-2">
            {
                content_1.map((item) => (
<div id="blogone-section-2-div-2-1">
            <img id="blogone-section-2-div-2-1-img" src={message_ico} alt={message_ico} />
            <p id="blogone-section-2-div-2-1-p-1">{item.description}</p>
            </div>
                ))
            }
            
           </div>
           <div className='container' id="blogone-section-2-div-2-2"> 
           <p id="blogone-section-2-div-2-2-p-1">Key Challenges in Modern Entrepreneurship</p>
           </div>

           <div className='container' id="blogone-section-3-div-1">
              <p id="blogone-section-3-div-1-p-1">AI Revolution Across Key Sectors</p>
              <div id="blogone-section-3-div-1-line"></div>
              <div className='container' id="blogone-section-3-div-2">
{
    content_2.map((item) => (
<div id="blogone-section-3-div-2-1">
<img id="blogone-section-3-div-2-1-img" src={message_ico} alt={message_ico} />
<p id="blogone-section-3-div-2-1-p-1">{item.description}</p>
</div>
    ))
}
</div>
           </div>

           <div className='container' id="blogone-section-3-div-1">
              <p id="blogone-section-3-div-1-p-1">Government’s Role in AI Advancement</p>
              <div id="blogone-section-3-div-1-line"></div>
              <div className='container' id="blogone-section-3-div-2">
{
    content_3.map((item) => (
<div id="blogone-section-3-div-2-1">
<img id="blogone-section-3-div-2-1-img" src={message_ico} alt={message_ico} />
<p id="blogone-section-3-div-2-1-p-1">{item.description}</p>
</div>
    ))
}
</div>
           </div>

           
           <div className='container' id="blogone-section-3-div-1">
              <p id="blogone-section-3-div-1-p-1">Preparing Businesses for the AI Era</p>
              <div id="blogone-section-3-div-1-line"></div>
              <div className='container' id="blogone-section-3-div-2">
{
    content_4.map((item) => (
<div id="blogone-section-3-div-2-1">
<img id="blogone-section-3-div-2-1-img" src={message_ico} alt={message_ico} />
<p id="blogone-section-3-div-2-1-p-1">{item.description}</p>
</div>
    ))
}
</div>
           </div>

           <div className='container' id="blogone-section-3-div-1">
              <p id="blogone-section-3-div-1-p-1">India as a Global Innovation Leader</p>
              <div id="blogone-section-3-div-1-line"></div>
              <div className='container' id="blogone-section-3-div-2">
{
    content_5.map((item) => (
<div id="blogone-section-3-div-2-1">
<img id="blogone-section-3-div-2-1-img" src={message_ico} alt={message_ico} />
<p id="blogone-section-3-div-2-1-p-1">{item.description}</p>
</div>
    ))
}
</div>
           </div>

          


</section>

{/* Blog 3 */}
       
       <section id="blog-section-3">
       <div id="blog-section-3-div-2">
         {
           consulting_card.map((item) => (
       <img id="blog-section-3-div-2-img" src={item.img} alt={item.img} />
           ))
         }
         
       </div>
       </section>
       
       {/* Blog 4 */}
       
       <section id="blog-section-4">
         <div className='container' id="blog-section-4-div-1">
          <p id="blog-section-4-div-1-p-1">Looking to grow, scale, or increase your revenue? Let’s connect!”</p>
         </div>
         <div className='container' id="blog-section-4-div-2">
           <input id="blog-section-4-div-2-input" type="text" placeholder="Enter Email" />
           <button id="blog-section-4-div-2-button"><FaLocationArrow id="blog-section-4-div-2-button-ico" /></button>
         </div>
       </section>

    </div>
  )
}

export default Blogthree;
