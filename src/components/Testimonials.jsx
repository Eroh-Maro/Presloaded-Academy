// TestimonialCard.jsx
import React from "react";
import testimonialData from "./testimonialData.json";

const TestimonialCard = ({ className = "" }) => {
  return (
    <div className={`testimonials-grid ${className}`}>
      {testimonialData.testimonials.map((item) => (
        <div key={item.id} className="tcard" data-aos="zoom-in">
          <div className="tcard-avatar">
            <img
              src={
                item.image?.startsWith("http")
                  ? item.image
                  : `/images/testimonials/${item.image}`
              }
              alt={item.name}
              loading="lazy"
            />
          </div>

          <h4 className="tcard-name">{item.name}</h4>
          <p className="tcard-text">{item.testimony}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
