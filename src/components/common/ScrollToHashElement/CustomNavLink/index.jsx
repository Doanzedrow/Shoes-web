import { Link, useLocation } from "react-router-dom";

const CustomNavLink = ({ to, children }) => {
  const location = useLocation();
  return (
    <Link
      to={to}
      className={to === location.pathname + location.hash ? "active" : ""}
    >
      {children}
    </Link>
  );
};

export default CustomNavLink;
