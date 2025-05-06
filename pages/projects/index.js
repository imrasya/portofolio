import Link from 'next/link';
import Image from 'next/image';
import Layouts from '@/components/Layouts';
import { motion } from 'framer-motion';
import { Projects } from '@/data/Projects';
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
    <Layouts pageTitle=" | Projects">
      <section className="relative flex h-[450vh] items-center justify-center">
        {/* <motion.span {...FadeAnimation} className="title-page">
          PROJECTS
        </motion.span> */}

        <div className="fixed left-1/2 top-[30%] flex md:left-1/4 z-10" ref={ref}>
          {Projects.map((project, index) => (
            <div key={project.id} className="mx-12 relative" style={{ zIndex: Projects.length - index }}>
              <motion.div
                {...ProjectCardAnimation}
                className="w-72 relative"
              >
                <Card
                  className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-purple-50 to-indigo-100 rotate-3' : 'from-indigo-50 to-purple-100 rotate-[-3deg]'} border-2 border-indigo-700 overflow-visible`}
                >
                  <div className="relative h-44 w-full border-b-2 border-indigo-700 overflow-hidden">
                    <Image
                      src={`/images/projects/${project.img}.png`}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-500 hover:scale-110"
                    />
                  </div>

                  <CardContent className="p-3">
                    <Link href={`/projects/${project.slug}`}>
                      <a>
                        <div className="py-2 text-xl font-bold text-indigo-900 hover:text-purple-600 transition-colors">{project.name}</div>
                      </a>
                    </Link>
                    <div className="flex flex-wrap gap-2 my-2">
                      {project.tech?.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center justify-center rounded-none border-2 border-purple-500 shadow-[2px_2px_0px_0px_rgba(168,85,247,0.2)] px-2 py-0.5 text-xs font-bold bg-purple-100 text-purple-800 neo-button"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex w-full justify-between px-3 pt-1 pb-4">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <Button variant="default" size="sm" className="bg-pink-500 hover:bg-pink-600 text-white transition-colors neo-button">
                        View Demo
                      </Button>
                    </a>
                    <a href={project.sourceCode} target="_blank" rel="noreferrer">
                      <Button variant="default" size="sm" className="bg-indigo-500 hover:bg-indigo-600 text-white transition-colors neo-button">
                        Source Code
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-10 flex flex-col items-center z-10">
          <span className="text-indigo-900 font-bold">Scroll</span>
          <div className="absolute top-6 h-4 w-4 rotate-45 rounded border-b-4 border-r-4 border-indigo-900" />
          <div className="absolute top-6 h-7 w-7 rotate-45 rounded border-b-4 border-r-4 border-purple-500" />
        </div>
      </section>
    </Layouts>
  );
};

export default Works;
