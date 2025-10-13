import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // Check if we're in a browser environment
      if (typeof window !== 'undefined') {
        // First, check for touch capability as an additional mobile indicator
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        // Check screen width
        const screenWidth = window.innerWidth;
        
        // Consider it mobile if either screen width is below breakpoint or it's a touch device
        const mobileStatus = screenWidth < breakpoint || isTouchDevice;
        
        setIsMobile(mobileStatus);
      }
    };

    // Initial check
    checkIsMobile();

    // Add resize listener
    window.addEventListener('resize', checkIsMobile);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;