import React from "react";
import teamData from "./team.json";
import "./MemberCard.css";

const MemberCard = ({ containerClass = "" }) => {
  const members = teamData.team ?? teamData; // handles both { team: [] } and []

  return (
    <div className={`team-grid ${containerClass}`}>
       
      {members.map((member, idx) => (
        <div className="member-card" key={member.id ?? idx} data-aos="flip-down">
          <div className="avatar">
            <img
              src={
                member.image?.startsWith("http")
                  ? member.image
                  : `/images/team/${member.image}`
              }
              alt={member.name}
              loading="lazy"
            />
          </div>
          <h3 className="name">{member.name}</h3>
          <p className="position">{member.position}</p>
        </div>
      ))}
    </div>
  );
};

export default MemberCard;
