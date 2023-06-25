import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div style={{ width: "95%", color: "#0c64d1", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <p className="lead mb-1 mt-2" style={{ fontWeight: 500 }}>{skill}</p>
    </div>
  );
}

export default SkillsBar;
