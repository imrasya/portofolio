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

        <motion.div {...ContentAnimation} className="relative order-1 w-1/3 md:order-2 z-10">
          <div className="neo-card p-6 rotate-3 bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-700">
            <h3 className="-mb-5 text-base font-normal text-indigo-900">Hi! My name is</h3>
            <h1 className="-ml-1 mb-1 text-7xl font-bold text-purple-600">rasya</h1>
            <h4 className="text-sm font-bold text-indigo-800">FrontEnd Developer || Student</h4>
          </div>
        </motion.div>
      </section>
    </Layouts>
  );
};

export default Home;
