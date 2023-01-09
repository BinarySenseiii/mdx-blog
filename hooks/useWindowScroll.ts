import { useEffect, useState } from 'react';

const useWindowScroll = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition((prevScrollPosition) => ({
        ...prevScrollPosition,
        y: window.scrollY,
        x: window.scrollX,
      }));
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default useWindowScroll;
