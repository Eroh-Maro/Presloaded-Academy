import React from "react";
import { Link } from "react-router-dom";
import PresloadedLogo from "../assets/website/presloadedLogo.png";

const Footer = () => {
  const currentDate = new Date();
const currentYear = currentDate.getFullYear();
  return (
    
    <footer data-aos="zoom-in">
                    <div className="line"></div>
      <div className="footerContent">

      <div className="footer-Info">
        <Link to={"/"} className="logo-link">
          <div className="logo">
            <div className="logoContainer">
              <img
                src={PresloadedLogo}
                alt=""
                className="logoPic"
                data-aos="fade-right"
              />
            </div>
            <h2 className="PresloadedLogoHeading">Presloaded Academy</h2>
          </div>
        </Link>
        <h3 className="detail">
          Address:
          <span className="Info">
            Back of sudoz fuel station opposite living world church, Abraka,
            Delta state
          </span>
        </h3>
        <h3 className="detail">
          Mail:<span className="Info">presloaded@gmail.com</span>
        </h3>
        <div className="socialMediaLinkContainer">
          
        </div>
        
      </div>
      <div className="footerLinksContainer">
        <ul className="footerLinks">         
        <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/courses"}>Courses</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
      </div>
            <div className="footerLinksContainer"> 
              <ul className="footerLinks">         
        <li><Link to={"/contact"}>FAQs</Link></li>
          <li><Link to={"/about"}>Team</Link></li>
          <li><Link to={"/contact"}>Testimonials</Link></li>
          <li><Link to={"/contact"}>Support</Link></li>
          </ul>
      </div>
      </div>
            <p className="copyRight">© {currentYear} Presloaded Tech Academy. All rights reserved.</p>

    </footer>
  );
};

export default Footer;
