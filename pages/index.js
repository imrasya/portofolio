import Image from 'next/image';
import Layouts from '@/components/Layouts';
import { motion } from 'framer-motion';
import { ContentAnimation, FadeAnimation, CardHomeAnimation } from '@/components/Animations';

const Home = () => {
  return (
    <Layouts>
      <section className="relative flex w-full flex-col items-center justify-evenly pt-32 pb-24 md:h-screen md:flex-row md:overflow-hidden md:pt-40 md:pb-28">
        {/* <motion.span {...FadeAnimation} className="title-page">
          RASYA
        </motion.span> */}

        <motion.div {...ContentAnimation} className="relative order-2 flex w-1/2 justify-end md:order-1 md:w-1/3 z-10">
          <motion.div {...CardHomeAnimation} animate={{ rotate: -12 }} className="card-home absolute bg-pink-500" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: -3 }} className="card-home absolute bg-indigo-200" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: 2 }} className="card-home relative bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-indigo-700">
            <motion.div {...FadeAnimation} className="relative flex h-full w-full items-center justify-center overflow-hidden">
              <Image src="/images/profile/profile.png" priority layout="intrinsic" width={500} height={500} alt="Rasya" className="relative" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div {...ContentAnimation} className="relative order-1 w-full px-4 sm:px-0 sm:w-4/5 md:order-2 md:w-1/3 z-10">
          <div className="max-w-sm mx-auto p-6 rounded-lg bg-white border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rotate-[4deg]">
            {/* Elemen dekoratif neobrutalist */}
            <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-purple-500 opacity-70"></div>
            <div className="absolute -bottom-14 -right-14 w-28 h-28 rounded-full bg-blue-300 opacity-70"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                {/* Icon coding dengan style neobrutalist */}
                <div className="w-10 h-10 flex items-center justify-center bg-purple-400 border-2 border-black">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" stroke="black" strokeWidth="2.5" strokeLinecap="square" />
                  </svg>
                </div>
                <span className="text-black font-bold text-base font-poppins">Hi! My name is</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-600 font-montserrat tracking-tight my-2">rasya</h1>

              <div className="mt-3 bg-indigo-100 border-2 border-black p-2">
                <h2 className="text-black text-base sm:text-lg font-bold font-poppins">FrontEnd Developer <span className="text-purple-500">||</span> Student</h2>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </Layouts>
  );
};

export default Home;
