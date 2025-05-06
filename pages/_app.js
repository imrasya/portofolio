import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingPage from '@/components/LoadingPage';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 3800);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}

export default MyApp;