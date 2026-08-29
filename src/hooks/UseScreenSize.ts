import { useEffect, useState } from 'react';

export const MIN_SCREEN_WIDTH = 1440;

export function useScreenSize() {
  const [isSupported, setIsSupported] = useState(() => window.innerWidth >= MIN_SCREEN_WIDTH);

  useEffect(() => {
    const handleResize = () => {
      setIsSupported(window.innerWidth >= MIN_SCREEN_WIDTH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSupported;
}
