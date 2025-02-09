import React from 'react';
import "./Contact.css";
import { FaLocationArrow } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact">
       {/* contact 1 */}
 <section id="contact-section-1">
 <div className='container' id="contact-section-1-div-1">
    <p id="contact-section-1-div-1-p-1">Contact</p>
    <p id="contact-section-1-div-1-p-2">Home > Contact</p>
 </div>
</section>

  {/* contact 2 */}

  <section id="contact-section-2">
   <div className='container' id="contact-section-2-div-1">
     <p id="contact-section-2-div-1-p-1">Contact Form</p>
     <p id="contact-section-2-div-1-p-2">Reach out to Wrightberg to transform your business aspirations into reality. Our contact form is designed for simplicity and effectiveness. Provide your name, email, phone number, and a brief message outlining your needs. Whether you’re looking to grow, scale, or optimize your business, our expert team is ready to assist. Take the first step towards sustainable success by getting in touch with us today. At Wrightberg, your growth is our mission, and we’re here to support you every step of the way.</p>
   </div>

   <div className='container' id="contact-section-2-div-2">
    <form id="contact-section-2-div-2-1">
       <div id="contact-section-2-div-2-1-1">
           <div id="contact-section-2-div-2-1-1-1">
            <p id="contact-section-2-div-2-1-1-1-p-1">Your Name</p>
            <input id="contact-section-2-div-2-1-1-1-input" type="text" />
           </div>
           <div id="contact-section-2-div-2-1-1-2">
           <p id="contact-section-2-div-2-1-1-1-p-1">Your Email</p>
           <input id="contact-section-2-div-2-1-1-1-input" type="email" />
           </div>
       </div>
       <div id="contact-section-2-div-2-1-2">
       <p id="contact-section-2-div-2-1-2-p-1">Phone Number</p>
       <input id="contact-section-2-div-2-1-2-input" type="text" />
       </div>
       <div id="contact-section-2-div-2-1-3">
       <p id="contact-section-2-div-2-1-3-p-1">Address</p>
      <textarea type="message" id="contact-section-2-div-2-1-3-input"></textarea>
       </div>
       <div id="contact-section-2-div-2-1-4">
         <button id="contact-section-2-div-2-1-4-button"  type="submit">Send message</button>
       </div>
    </form>
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

export default Contact
