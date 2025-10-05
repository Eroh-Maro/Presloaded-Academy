import React from "react";
import { useNavigate } from "react-router-dom";
import coursesData from "./course.json";

const CourseCard = ({ containerClass = "" }) => {
  const navigate = useNavigate();

  const handleEnroll = (course) => {
    navigate("/checkout", { state: { course } });
  };

  return (
    <div className={containerClass}>
      {coursesData.courses.map((course, idx) => (
        <div className="courseCard" key={idx} data-aos="fade-up">
          <div className="courseImageContainer">
            <img
              src={
                course.image?.startsWith("http")
                  ? course.image
                  : `/images/courses/${course.image}`
              }
              alt={course.name}
              className="courseImage"
            />
          </div>
          <div className="courseInfo">
            <h3 className="courseTitle">{course.name}</h3>
            <p className="coursePrice">{course.price}</p>
            <p className="courseIntro">{course.intro}</p>
            <div className="BuyContainer">
              <button
                className="Buy"
                onClick={() => handleEnroll(course)}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;