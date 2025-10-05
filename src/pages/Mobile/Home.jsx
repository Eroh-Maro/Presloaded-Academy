import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import intersection from "../../assets/website/circles-intersection.png";
import briefcase from "../../assets/website/briefcase-outline.png";
import eye from "../../assets/website/lucide_eye.png";
import JoinUsBG from "../../assets/joinUs.jpg";

import Mfooter from "../../components/Mfooter";
import Mnavbar from "../../components/Mnavbar";



const Home = () => {

  return (
    
    <div>
      <div className="m-HomeContainer">
        <Navbar/>
        <div className="heroContainer" data-aos="zoom-in">
          <img
            src="https://i.pinimg.com/1200x/a6/81/4b/a6814bff76c0730e7778235ca1b7bb05.jpg"
            alt=""
            className="HeroPic"
          />
        </div>
        <div className="m-heroText">
          <h1 data-aos="fade-up" className="m-Heading1">
            Ignite Your Future with Technology and Innovation{" "}
          </h1>
          <div className="m-heroSub" data-aos="fade-up">
            <p className="m-heroSubtext">
              At Presloaded Tech Academy, we empower aspiring tech enthusiasts
              to transform their ideas into reality. Join us for a journey of
              creativity, collaboration, and real-world experience.
            </p>
            <div className="m-heroBtnFlex">
              <Link to={"/courses"} className="m-a">
                <button className="Herobtn Enroll">Enroll</button>
              </Link>
              <Link to={"/about"} className="m-a">
                <button className="Herobtn Learn">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
        <section className="m-BenefitsSection" data-aos="fade-up">
          <h3 className="m-benefit">Benefits</h3>
          <h2 className="m-benefit">Unlock Your Potential with Us</h2>
          <p className="m-benefit">
            At Presloaded Tech Academy, we empower students through
            collaboration, real-world experiences, and enhanced visibility in
            the tech industry. Our unique approach ensures that you not only
            learn but also apply your skills in practical settings.
          </p>
        </section>
              <div className="m-benefitCardContainer">
                <div className="m-BenefitsCard one" data-aos="flip-left">
                  <div className="benefitIconContainer">
                    <img src={intersection} alt="" className="benefitIcon" />
                  </div>
                  <h2>Collaborative Learning for Future Innovators</h2>
                  <p>Join a community where ideas thrive together.</p>
                </div>
                <div className="m-BenefitsCard two" data-aos="flip-left">
                  <div className="benefitIconContainer">
                    <img src={briefcase} alt="" className="benefitIcon" />
                  </div>
                  <h2>Gain Real-World Experience While You Learn</h2>
                  <p>Our internships provide hands-on experience in the field.</p>
                </div>
                <div className="m-BenefitsCard three" data-aos="flip-left">
                  <div className="benefitIconContainer">
                    <img src={eye} alt="" className="benefitIcon" />
                  </div>
                  <h2>Enhance Your Visibility in the Tech Industry</h2>
                  <p>Position yourself to be seen by your potential employers</p>
                </div>
              </div>
                  <div className="m-JoinUsSection" data-aos="zoom-in-up">
                  <div className="m-joinUsBG">
                  <img src={JoinUsBG} alt=""  className="m-JoinUsImage"/>
                   </div>
               <div className="m-joinUsContent">
                  <h2 className="JoinUsHeading">Join Us Today!</h2>
                  <p className="JoinUsParagraph">Unlock your potential with hands-on courses designed
                     for real-world success at Presloaded Tech Academy.</p>
                               <Link to={"/courses"}>
                          <button className="Herobtn Enroll3">Enroll</button>
                        </Link>
                        <Link to={"/about"}>
                          <button className="Herobtn Learn3">Learn More</button>
                        </Link>
              
                  </div>
                  </div>
                  <Mfooter/>
      </div>
    </div>
  );
};

export default Home;
