import Link from 'next/link';
import Image from 'next/image';
import Layouts from '@/components/Layouts';
import { motion } from 'framer-motion';
import { Edits } from '@/data/Edits';
import { useEffect, useRef } from 'react';
import { ProjectCardAnimation, FadeAnimation } from '@/components/Animations';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
        {/* <motion.span {...FadeAnimation} className="title-page">
          EDITS
        </motion.span> */}

        <div className="fixed left-1/2 top-[30%] flex md:left-1/4" ref={ref}>
          {Edits.map((edits, index) => (
            <div key={edits.id} className="mx-12 relative" style={{ zIndex: Edits.length - index }}>
              <motion.div 
                {...ProjectCardAnimation} 
                className="w-72 relative"
              >
                <Card 
                  className={`bg-muted border-2 border-black overflow-visible ${index % 2 === 0 ? 'rotate-2' : 'rotate-[-2deg]'}`}
                >
                  <div className="relative h-44 w-full border-b-2 border-black overflow-hidden">
                    <Image 
                      src={`/images/edits/${edits.img}.png`} 
                      alt={edits.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <CardContent className="p-3">
                    <Link href={`/edits/${edits.slug}`}>
                      <a>
                        <div className="py-2 text-md font-bold text-black hover:text-primary transition-colors">{edits.name}</div>
                      </a>
                    </Link>
                  </CardContent>
                  
                  <CardFooter className="flex justify-center pt-1 pb-4">
                    <a href={edits.videos} target="_blank" rel="noreferrer">
                      <Button variant="default" className="bg-green-400 text-black">
                        View Video
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-40 flex flex-col items-center">
          <span className="text-black font-bold">Scroll</span>
          <div className="absolute top-6 h-4 w-4 rotate-45 rounded border-b-4 border-r-4 border-black" />
          <div className="absolute top-6 h-7 w-7 rotate-45 rounded border-b-4 border-r-4 border-primary" />
        </div>
      </section>
    </Layouts>
  );
};

export default Works;
