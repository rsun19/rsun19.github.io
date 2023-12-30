import { useEffect, useState } from "react";

const useWidth = () => {
  const [md, setMd] = useState(window.innerWidth >= 850);
  const [twoxl, set2xl] = useState(window.innerWidth >= 2000);

  useEffect(() => {
    const handleResize = () => {
      setMd(window.innerWidth >= 850);
      set2xl(window.innerWidth >= 2000);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { md, twoxl };
};

export default useWidth;
