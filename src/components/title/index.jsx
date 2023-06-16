import React from "react";
import "../../assets/sass/components/title.scss";

function Title({ label }) {
  return (
    <div className="title title-1">
      <h3>{label}</h3>
    </div>
  );
}

export default Title;
