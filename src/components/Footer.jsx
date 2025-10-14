import React from "react";
import { Link } from "react-router-dom";
import PresloadedLogo from "../assets/website/PresloadedLogo.png";
import instagram from "../assets/website/instagram-fill.png";
import facebook from "../assets/website/facebook.png";
import tiktok from "../assets/website/tiktok-solid.png";


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
          <div className="socialMediaLinkContainer"></div>
        </div>
        <div className="footerLinksContainer">
          <ul className="footerLinks">
            <li>
              <Link to={"/"}  className="footerAnchor">Home</Link>
            </li>
            <li>
              <Link to={"/about"}  className="footerAnchor">About</Link>
            </li>
            <li>
              <Link to={"/courses"}  className="footerAnchor">Courses</Link>
            </li>
            <li>
              <Link to={"/contact"}  className="footerAnchor">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footerLinksContainer">
          <ul className="footerLinks">
            <li>
              <Link to={"/contact"}  className="footerAnchor">FAQs</Link>
            </li>
            <li> 
              <Link to={"/about"}  className="footerAnchor">Team</Link>
            </li>
            <li>
              <Link to={"/contact"}  className="footerAnchor">Testimonials</Link>
            </li>
            <li>
              <Link to={"/contact"}  className="footerAnchor">Support</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="socialMediaLinksContainer">
        {/* Instagram - external link */}
        <a
          href="https://instagram.com/presloaded.academy?igsh=ZWFpbXlqNXNjMHpv"
          target="_blank"
          rel="noopener noreferrer"
          className="socialMediaLinks"
        >
          <div className="socialMediaIconContainer">
            <img src={instagram} alt="Instagram" className="socialMediaIcon" />
          </div>
        </a>

        {/* Facebook - external link */}
        <a
          href=" https://www.facebook.com/share/15pNRmmq4J/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="socialMediaLinks"
        >
          <div className="socialMediaIconContainer">
            <img src={facebook} alt="Facebook" className="socialMediaIcon" />
          </div>
        </a>

        {/* tiktok - external link */}
        <a
          href=" https://www.tiktok.com/@presloaded_academy?_t=ZS-8ytdd0ZKci4&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="socialMediaLinks"
        >
          <div className="socialMediaIconContainer">
            <img src={tiktok} alt="LinkedIn" className="socialMediaIcon" />
          </div>
        </a>


      </div>
      <p className="copyRight">
        © {currentYear} Presloaded Tech Academy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
