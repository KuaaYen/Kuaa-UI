import { useState, useEffect } from "react";


const useScrollY = (threshold: number = 100): boolean => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const newIsScrolled = scrollY > threshold;
        
        setIsScrolled(prev => prev !== newIsScrolled ? newIsScrolled : prev);
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);
  
    return isScrolled;
};

export default useScrollY;