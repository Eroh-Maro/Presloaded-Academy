import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import CoursesBG from "../assets/CoursesBG.jpg";
import CoursesTabletBG from "../assets/CoursesTabletBG.jpg";
import Mfooter from "../components/Mfooter";
import Footer from "../components/Footer";
import { useIsMobile } from "../hooks/useIsMobile";

const Courses = () => {
  const isMobile = useIsMobile(768); 
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkTablet();
    window.addEventListener("resize", checkTablet);
    return () => window.removeEventListener("resize", checkTablet);
  }, []);

  return (
    <div className="course-container">
      <Navbar className="coursePageNavbar" />
      <div className="CoursesHero">
        <img
          src={isTablet ? CoursesTabletBG : CoursesBG}
          alt="Courses Hero"
          className="CoursesHeroImage"
        />
        <h2 className="courseHeader">Courses</h2>
      </div>
      <div className="CourseSectionHeader">
        <h2>Explore Our Featured courses</h2>
        <p>Discover skills that empower your future</p>
      </div>
      <CourseCard containerClass="courseCardContainer" />
      {isMobile ? <Mfooter /> : <Footer />}
    </div>
  );
};

export default Courses;
