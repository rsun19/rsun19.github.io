import { useEffect, useState } from "react";

const useHeight = () => {
  const [smH, setSMH] = useState(window.innerHeight >= 650);

  useEffect(() => {
    const handleResize = () => {
      setSMH(window.innerHeight >= 650);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return smH;
};

export default useHeight;
