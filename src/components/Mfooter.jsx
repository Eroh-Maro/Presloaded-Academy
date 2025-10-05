import React from "react";
import { Link } from "react-router-dom";
import PresloadedLogo from "../assets/website/presloadedLogo.png";

const Mfooter = () => {
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
        
      </div>


      </div>
            <p className="copyRight">© {currentYear} Presloaded Tech Academy. All rights reserved.</p>

    </footer>
  );
};

export default Mfooter;
