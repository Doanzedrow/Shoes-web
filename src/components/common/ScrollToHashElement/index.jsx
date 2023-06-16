import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    const element = document.getElementById(hash.slice(1));

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        // block: "end",
        inline: "nearest",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;
