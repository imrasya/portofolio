import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { SmoothCursor } from "@/components/smooth-cursor";

const Layouts = ({ children, pageTitle = '' }) => {

  return (
    <>
      <Head>
        <title>Rasya{pageTitle}</title>
        <meta name="description" content="Creative Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      <div className="relative min-h-screen flex flex-col">
        <SmoothCursor />
        <div className="scanlines" />
        <div className="grain" />
        <Header />



        <main className="flex-grow relative z-10 pt-20 px-4 md:px-12 pb-24">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layouts;
