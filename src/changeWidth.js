import { useEffect, useState } from 'react';

const useWidth = () => {
  const [md, setMd] = useState(window.innerWidth >= 850);

  useEffect(() => {
    const handleResize = () => {
      setMd(window.innerWidth >= 850);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return md;
};

export default useWidth;
