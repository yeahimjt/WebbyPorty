import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    console.log(location)
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
          elem.scrollIntoView({behavior: "smooth"})
      }
    } else if (location.path !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;