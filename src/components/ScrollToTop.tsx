import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
<<<<<<< HEAD
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
=======
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
>>>>>>> 87f75fca9afb605d6bc16848b8da0dac107fb7ff

  return null;
};

export default ScrollToTop;
