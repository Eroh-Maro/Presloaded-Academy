import React from "react";

import aboutUs from "../../assets/aboutUs.jpg";
import classPic from "../../assets/class.jpg";
import studioPic from "../../assets/studio.jpg";
import whoImage from "../../assets/WhoImage.jpg";
import { Link } from "react-router-dom";
import MemberCard from "../../components/MemberCard";
import Mfooter from "../../components/Mfooter";
import Navbar from "../../components/Navbar";

const About = () => (
  <div className="m-about-container">
    <Navbar />
    <div className="m-aboutContainer" data-aos="zoom-in">
      <img src={aboutUs} alt="" className="aboutPic" />
      <h2 className="aboutUsheader">About Us</h2>
    </div>
    <section className="m-whyChoose" data-aos="fade-up">
      <div className="m-whyChooseContent" >
        <h2 className="m-aboutSectionHeader">Why Choose Presloaded?</h2>
        <p className="whyChooseParagraph">
          Presloaded is more than an academy; it’s a hub for ideas, technology,
          growth, and innovation. Our mission is to inspire and nurture the tech
          potential in as many people as possible, showing the youth what’s
          truly achievable.
        </p>
      </div>
      <div className="m-whyChoosePictures">
        <div className="whyChoosePicture1-Container">
          <img src={classPic} alt="" className="whyChoosePicture1" />
        </div>
        <div className="whyChoosePicture2-Container">
          <img src={studioPic} alt="" className="whyChoosePicture1" />
        </div>
      </div>
    </section>
    <section className="m-who">

      <div className="m-whoContent" data-aos="fade-left">
        <div className="whoText">
          <h2 className="aboutSectionHeader">Who is presloaded for?</h2>
          <p className="whyChooseParagraph">
            Anyone with an interest in technology and a genuine will to learn,
            regardless of their background or experience, can find a place here.
            Whether you’re just starting your journey or looking to enhance your
            skills, all you need is curiosity, dedication, and a passion for
            growth.
          </p>
        </div>
       <Link to="/courses">
        <span className="aboutCTA">Join The Academy</span></Link>
      </div>
            <div className="m-whoImageContainer">
        <img src={whoImage} alt="" className="m-whoImage" />
      </div>
    </section>
    <section className="MeetTheTeam">
         <h2 className="teamHeader">Meet the team</h2>
    <MemberCard/>
    </section>
    <Mfooter/>
  </div>
);

export default About;
