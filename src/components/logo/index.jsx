import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="header-logo">
      <Link className="ps-logo" to="/">
        <img alt="" src="../../assets/img/logo.png" />
      </Link>
    </div>
  );
}

export default Logo;
