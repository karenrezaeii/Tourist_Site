// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component renders nothing. It just watches the current URL,
// and every time it changes (i.e. every time we navigate to a new
// page), it scrolls the window back to the very top.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
