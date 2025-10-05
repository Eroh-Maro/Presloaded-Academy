import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutUs from "../assets/aboutUs.jpg";
import classPic from "../assets/class.jpg";
import studioPic from "../assets/studio.jpg";
import whoImage from "../assets/WhoImage.jpg";
import { Link } from "react-router-dom";
import MemberCard from "../components/MemberCard";

const About = () => (
  <div className="about-container">
    <Navbar />
    <div className="aboutContainer" data-aos="zoom-in">
      <img src={aboutUs} alt="" className="aboutPic" />
      <h2 className="aboutUsheader">About Us</h2>
    </div>
    <section className="whyChoose">
      <div className="whyChooseContent" >
        <h2 className="aboutSectionHeader">Why Choose Presloaded?</h2>
        <p>
          Presloaded is more than an academy; it’s a hub for ideas, technology,
          growth, and innovation. Our mission is to inspire and nurture the tech
          potential in as many people as possible, showing the youth what’s
          truly achievable.
        </p>
      </div>
      <div className="whyChoosePictures">
        <div className="whyChoosePicture1-Container">
          <img src={classPic} alt="" className="whyChoosePicture1" />
        </div>
        <div className="whyChoosePicture2-Container">
          <img src={studioPic} alt="" className="whyChoosePicture1" />
        </div>
      </div>
    </section>
    <section className="who">
      <div className="whoImageContainer">
        <img src={whoImage} alt="" className="whoImage" />
      </div>
      <div className="whoContent">
        <div className="whoText">
          <h2 className="aboutSectionHeader">Who is presloaded for?</h2>
          <p>
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
    </section>
    <section className="MeetTheTeam">
         <h2 className="teamHeader">Meet the team</h2>
    <MemberCard/>
    </section>
    <Footer/>
  </div>
);

export default About;
