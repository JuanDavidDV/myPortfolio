import { useLocation } from 'react-router-dom';
import React from "react";

const ScrollToTop = () => {
  const location = useLocation();

  // Scroll to the top whenever the route changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
