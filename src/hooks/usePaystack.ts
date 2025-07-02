import { useEffect, useState } from 'react';

export const usePaystack = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (window.PaystackPop) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    
    script.onload = () => {
      if (window.PaystackPop) {
        setIsLoaded(true);
      } else {
        setError('Paystack failed to load properly');
      }
    };
    
    script.onerror = () => {
      setError('Failed to load Paystack script');
    };

    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://js.paystack.co/v1/inline.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return { isLoaded, error };
};