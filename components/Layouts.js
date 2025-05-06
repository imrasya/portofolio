import Head from 'next/head';
import { motion } from 'framer-motion';

const Layouts = ({ children, pageTitle = '' }) => {
  return (
    <>
      <Head>
        <title>Rasya{pageTitle}</title>
        <meta name="description" content="Frontend Developer, Student" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative min-h-screen overflow-hidden bg-white">
        {/* Neobrutalism background elements */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          {/* Geometric shapes */}
          <motion.div
            className="absolute top-20 left-20 h-40 w-40 rotate-12 rounded-none border-4 border-indigo-300 bg-indigo-100/30"
            animate={{ rotate: [12, 7, 12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>

          <motion.div
            className="absolute top-[40%] right-10 h-32 w-32 -rotate-12 border-4 border-pink-400 bg-pink-100/20"
            animate={{ rotate: [-12, -5, -12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>

          <motion.div
            className="absolute bottom-20 left-[10%] h-24 w-24 rotate-45 border-4 border-purple-400 bg-purple-100/20"
            animate={{ rotate: [45, 35, 45] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>

          {/* Circles */}
          <motion.div
            className="absolute top-[30%] left-[15%] h-16 w-16 rounded-full border-4 border-indigo-400 bg-indigo-100/10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>

          <motion.div
            className="absolute bottom-[15%] right-[20%] h-24 w-24 rounded-full border-4 border-pink-400 bg-pink-100/10"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>

          {/* Zigzag lines */}
          <motion.div
            className="absolute top-[15%] right-[15%] h-4 w-40 border-b-4 border-dashed border-purple-400"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>

          <motion.div
            className="absolute bottom-[30%] left-[25%] h-4 w-32 border-b-4 border-dashed border-indigo-400"
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>

          {/* Cross element */}
          <motion.div
            className="absolute top-[60%] right-[30%]"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-20 w-4 rotate-45 bg-pink-200"></div>
            <div className="absolute top-[40%] left-[-8px] h-4 w-20 bg-pink-200"></div>
          </motion.div>

          {/* Dots pattern */}
          <motion.div
            className="absolute top-40 left-[40%] flex flex-wrap"
            style={{ width: "200px", height: "200px" }}
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            {[...Array(16)].map((_, i) => (
              <div key={i} className="m-2 h-3 w-3 rounded-full bg-purple-300"></div>
            ))}
          </motion.div>
        </div>

        {children}
      </div>
    </>
  );
};

export default Layouts;
