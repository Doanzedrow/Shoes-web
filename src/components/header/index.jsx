import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../nav";
const DONT_SPACING = ["/", "/login", "/register"];
function Header() {
  const location = useLocation();
  const [needSpacing, setNeedSpacing] = useState(false);

  useEffect(() => {
    if (DONT_SPACING.findIndex((f) => f === location.pathname) !== -1) {
      setNeedSpacing(false);
    } else {
      setNeedSpacing(true);
    }
  }, [location]);
  return (
    <>
      <header className="header">
        <Nav />
      </header>
      {needSpacing && <div className="header-spacing"></div>}
    </>
  );
}

export default Header;
