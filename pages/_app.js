import '../styles/globals.css';
import Preloader from '@/components/Preloader';
import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);

  // Initialize Lenis exactly once
  useEffect(() => {
    // 1. Force Scroll Reset
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // 2. Init Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Control Scroll Locking based on isLoading
  useEffect(() => {
    const lenis = lenisRef.current;

    if (isLoading) {
      // LOCK SCROLL
      if (lenis) lenis.stop();
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      // UNLOCK SCROLL
      if (lenis) lenis.start();
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, [isLoading]);

  return (
    <>
      <Component {...pageProps} />
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
    </>
  );
}

export default MyApp;