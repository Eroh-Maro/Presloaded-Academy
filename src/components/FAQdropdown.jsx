import React, { useState } from "react";
import faqData from "./faq.json"; // adjust path if needed

const FAQdropdown = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-grid">
      {faqData.faqs.map((item, index) => (
        <div key={item.id} className="faq-container">
          {/* Question */}
          <div
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            <span>{item.question}</span>
            <span className="faq-toggle">
              {openIndex === index ? "−" : "+"}
            </span>
          </div>

          {/* Answer */}
          {openIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}

          {/* Line */}
          <hr className="faq-divider" />
        </div>
      ))}
    </div>
  );
};

export default FAQdropdown;
