import Link from 'next/link';
import Image from 'next/image';
import Layouts from '@/components/Layouts';
import { motion } from 'framer-motion';
import { Edits } from '@/data/Edits';
import { useEffect, useRef } from 'react';
import { ProjectCardAnimation, FadeAnimation } from '@/components/Animations';

const Works = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const scrollToLeft = () => (element.style.transform = `translateX(${-window.scrollY}px)`);

    window.addEventListener('scroll', scrollToLeft);
    return () => window.removeEventListener('scroll', scrollToLeft);
  }, []);

  return (
    <Layouts pageTitle=" | Edits">
      <section className="relative flex h-[450vh] items-center justify-center">
        <motion.span {...FadeAnimation} className="title-page">
          EDITS
        </motion.span>

        <div className="fixed left-1/2 top-[30%] flex md:left-1/4" ref={ref}>
          {Edits.map((edits) => (
            <div key={edits.id}>
              <motion.div {...ProjectCardAnimation} className="mx-12 flex w-72 flex-col items-center justify-center rounded-md border-4 border-primary-light bg-primary-light p-[2px]">
                <Link href={`/edits/${edits.slug}`}>
                  <motion.a {...FadeAnimation} className="relative h-44 w-full overflow-hidden rounded-md bg-primary-dark">
                    <Image src={`/images/edits/${edits.img}.png`} layout="fill" alt={edits.name} className="relative transition-all duration-500 hover:scale-125" />
                  </motion.a>
                </Link>
                <div className="py-2 text-md font-small text-primary-dark">{edits.name}</div>
                <div className="flex mx-auto px-3 pt-1 pb-4">
                  <a href={edits.videos} target="_blank" rel="noreferrer">
                    <span className="rounded-md border-2 border-primary-dark px-3 py-2 font-semibold text-primary-dark transition-all duration-500 hover:bg-primary-dark hover:text-primary-light">View Video</span>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="fixed top-0 -right-1 h-screen w-1/12 bg-primary-dark" />
        <div className="fixed top-3 -left-1 hidden h-3/4 w-1/12 bg-primary-dark md:block" />

        <div className="fixed bottom-40 flex flex-col items-center">
          <span className="text-primary-light">Scroll</span>
          <div className="absolute top-6 h-4 w-4 rotate-45 rounded border-b-4 border-r-4 border-secondary-light" />
          <div className="absolute top-6 h-7 w-7 rotate-45 rounded border-b-4 border-r-4 border-primary-light" />
        </div>
      </section>
    </Layouts>
  );
};

export default Works;
