import React from "react";
import "../../assets/sass/components/section.scss";

function Section({ children, ...props }) {
  return (
    <section className="section" {...props}>
      <div className="container">{children}</div>
    </section>
  );
}

export default Section;
