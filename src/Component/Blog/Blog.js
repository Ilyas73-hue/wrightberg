import React from 'react';
import "./Blog.css";
import blog_card_img_1 from "../../Assets/blog_card_img_1.png";
import blog_card_img_2 from "../../Assets/blog_card_img_2.png";
import blog_card_img_3 from "../../Assets/blog_card_img_2.png";
import blog_card_img_4 from "../../Assets/blog_card_img_4.png";
import con_img_1 from "../../Assets/con_img_1.png";
import con_img_2 from "../../Assets/con_img_2.png";
import con_img_3 from "../../Assets/con_img_3.png";
import con_img_4 from "../../Assets/con_img_4.png";
import { FaLocationArrow } from "react-icons/fa";

function Blog() {

    const blog_card_data = [{
        id:1, 
        name: "Developing an Innovation-Driven Culture",
        img:`${blog_card_img_1}`,
        location: "/blog_1"
    }, {
        id:2, 
        name: "Entrepreneurship in the Modern Age",
        img:`${blog_card_img_2}`,
        location: "/blog_2"
    }, {
        id:3, 
        name: "The Future of Business in India",
        img:`${blog_card_img_3}`,
        location: "/blog_3" 
    }, {
        id:4, 
        name: "The Power of Strategic Consulting in Business Growth",
        img:`${blog_card_img_4}`,
        location: "/blog_4"  
    }, {
        id:5, 
        name: "The Role of AI in Business Transformation",
        img:`${blog_card_img_1}`,
        location: "/blog_5"   
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
    <div id="blog">
       {/* blog 1 */}
 <section id="blog-section-1">
 <div className='container' id="blog-section-1-div-1">
    <p id="blog-section-1-div-1-p-1">Blog</p>
    <p id="blog-section-1-div-1-p-2">Home > Blog</p>
 </div>
</section>

  {/* Blog 2 */}

<section id="blog-section-2">
   <div className='container' id="blog-section-2-div-1">
      <p id="blog-section-2-div-1-p-1">Blog</p>
      <p id="blog-section-2-div-1-p-2">Reads Our Latest Blogs</p>
   </div>
   <div className='container' id="blog-section-2-div-2">

{
    blog_card_data.map((item) => (
<div id="blog-section-2-div-2-card" onClick={() => window.location.href=`${item.location}`}>
       <div id="blog-section-2-div-2-card-1">
          <img id="blog-section-2-div-2-card-1-img" src={item.img} alt={item.img} />
       </div>
       <div id="blog-section-2-div-2-card-2">
          <p id="blog-section-2-div-2-card-2-p-1">{item.name}</p>
       </div>
    </div>
    ))
}
    
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

export default Blog
