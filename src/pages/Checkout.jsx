import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import checkMarkFilled from "../assets/website/checkmark-filled.png";
import checkMark from "../assets/website/checkmark-alt.png";
import lightbulbOutline from "../assets/website/lightbulbOutline.png";
import wallet from "../assets/website/wallet.png";
import Footer from "../components/Footer";

const LIMIT = 250; // ← adjust preview length here

// collapse excessive whitespace/newlines for preview
const normalize = (s = "") => s.replace(/\s+/g, " ").trim();

// cut at a word boundary, add ellipsis
const smartTruncate = (s = "", n = LIMIT) => {
  if (s.length <= n) return s;
  const slice = s.slice(0, n);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > Math.floor(n * 0.6) ? slice.slice(0, lastSpace) : slice;
  return cut.replace(/[.,;:!?–—-]$/, "") + "…";
};

const Checkout = () => {
  const location = useLocation();
  const course = location.state?.course;

  const benefits = [
    "Events to network with industry professionals, potential collaborators, and future employers.",
    "Mentors to learn from who guide you with real-world insights and feedback.",
    "Like-minded community to grow with, share ideas, and support your journey.",
  ];

  // Description preview/full
  const [expanded, setExpanded] = useState(false);
  const fullDesc = course?.description ?? "";
  const previewDesc = useMemo(() => smartTruncate(normalize(fullDesc), LIMIT), [fullDesc]);
  const isLong = useMemo(() => normalize(fullDesc).length > LIMIT, [fullDesc]);

  return (
    <div className="checkout-container">
      <Navbar />

      <div className="CourseheroContainer">
        <div className="checkOutHeroHeader">
          <h2 className="introHeader">{course?.name ?? "Course"}</h2>
          <p>{course?.intro}</p>
        </div>

        {course ? (
          <div className="checkoutCard">
            <img
              src={
                course.image?.startsWith("http")
                  ? course.image
                  : `/images/courses/${course.image}`
              }
              alt={course.name}
              className="courseImage"
              style={{
                height: "100%",
                width: "100%",
                maxWidth: "400px",
                marginBottom: "1rem",
                objectFit: "cover",
              }}
            />
            <div className="checkOutInfo">
              <h2 className="checkOutCardTitle">{course.name}</h2>
              <p>{course.price}</p>
              <p>{course.intro}</p>
              <button className="checkoutPagebtn">Checkout</button>
            </div>
          </div>
        ) : (
          <p>No course selected.</p>
        )}
      </div>

      {course?.checkoutHeading && (
        <h2 className="checkoutHeading2">{course.checkoutHeading}</h2>
      )}

      <section className="learnSection">
        <div className="line"></div>

        <div className="learnMainHeader">
          <img src={checkMarkFilled} alt="" className="checkMarkFilled" />
          <h2>{course?.checkoutHeading2 ?? "What you’ll learn"}</h2>
        </div>

        <div className="learnGrid">
          {/* Skill that Matters */}
          <div className="learnGrid1">
            <h3 className="learnHeader1">
              <img src={lightbulbOutline} alt="" className="lightbulbOutline" />
              Skill that Matters
            </h3>
            <p className="learnAnswer">{course?.skillText}</p>
          </div>

          {/* Portfolio that proves it */}
          <div className="learnGrid2">
            <h3 className="learnHeader2">Portfolio that proves it</h3>
            <p className="learnAnswer2">{course?.proofText}</p>
          </div>

          {/* Opportunities That Pay + benefits bullets */}
          <div className="learnGrid1">
            <h3 className="learnHeader1">
              <img src={wallet} alt="" className="lightbulbOutline" />
              Opportunities That Pay
            </h3>
            <ul className="benefits-list">
              {benefits.map((text, i) => (
                <li key={i} className="benefits-item">
                  <div className="benefit-circle"></div>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* What you’ll learn to do — mapped from JSON */}
          <div className="learnGrid2">
            <h3 className="learnHeader2">What you’ll learn to do</h3>

            {Array.isArray(course?.learningPoints) && course.learningPoints.length > 0 ? (
              <ul className="learning-list">
                {course.learningPoints.map((pt, i) => (
                  <li key={`${i}-${pt.slice(0, 10)}`} className="learning-item">
                    <img src={checkMark} alt="" aria-hidden="true" className="check-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="learnAnswer2">{course?.proofText}</p>
            )}
          </div>
        </div>
      </section>

      {/* ===== Description (250-char preview with toggle) ===== */}
      {fullDesc && (
        <section className="descriptionSection">
          <h3 className="descriptionTitle">Description</h3>
          <p id="course-desc" className="descriptionText unclamp">
            {expanded ? fullDesc : previewDesc}
          </p>
          {isLong && (
            <button
              type="button"
              className="course-desc__toggle"
              aria-expanded={expanded}
              aria-controls="course-desc"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "See less" : "See more"}
            </button>
          )}
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Checkout;
