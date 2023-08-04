import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(768 > window.screen.availWidth);
  useEffect(() => {
    const handler = () => {
      const newIsMobile = 768 > window.screen.availWidth;
      setIsMobile(newIsMobile);
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return isMobile;
}