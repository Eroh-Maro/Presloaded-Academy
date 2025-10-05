import React from "react";
import Navbar from "../../components/Navbar";
import sendIcon from "../../assets/website/send-light.png";
import newMessage from "../../assets/website/new-message.png";
import contactUs from "../../assets/contactUsMobile.jpg";
import FAQdropdown from "../../components/FAQdropdown";
import TestimonialCard from "../../components/Testimonials";
import Mfooter from "../../components/Mfooter";

const Contact = () => {
  return (
    <div className="m-contact-container">
      <Navbar />
      <div className="contactHeroContainer">
        <img src={contactUs} alt="" className="contactHeroPic" />
      </div>
      <section className="m-getInTouch">
        <div className="m-getInTouchText">
          <h2>Get in Touch</h2>
          <p>
            Have a question about the Presloaded? We're happy to help! Send us a
            message using the form below, or stay updated on the latest news and
            announcements by following us on social media.
          </p>
          <button className="m-sendBTN">
            Send a message
            <img src={newMessage} alt="" className="newMessage" />
          </button>
        </div>
        <form action="">
          <div className="inputField">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="formInput"
            />
            <input
              type="email"
              placeholder="yourmail.@gmail.com"
              className="formInput"
            />
          </div>
          <input type="text" placeholder="Message" className="formInput" />
          <button className="formBTN">
            Submit
            <img src={sendIcon} alt="" className="sendIcon" />
          </button>
        </form>
      </section>
      <section className="FAQsection">
        <h2 className="FAQheader">Frequently Asked Questions</h2>

        <div className="FAQcontainer">
          <FAQdropdown />
        </div>
      </section>
                <section className='testimonialsSection'>
                <h2 className='FAQheader'>Testimonials</h2>
                <div className="testimonialsContainer">
                    <TestimonialCard/>
                </div>
            </section>
            <Mfooter/>
    </div>
  );
};

export default Contact;
