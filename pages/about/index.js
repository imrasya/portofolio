import Layouts from '@/components/Layouts';
import { Skills } from '@/data/Skills';
import { motion } from 'framer-motion';
import { ContentAnimation, FadeAnimation } from '@/components/Animations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <Layouts pageTitle=" | About">
      <section className="relative flex w-full flex-col items-center justify-evenly pt-32 pb-24 md:h-screen md:flex-row md:overflow-hidden md:pt-40 md:pb-28 px-2">
        {/* <motion.span {...FadeAnimation} className="title-page">
          ABOUT
        </motion.span> */}

        <motion.div {...ContentAnimation} className="relative order-2 flex w-full max-w-xs flex-col items-end justify-end md:order-1 md:w-1/3 z-10 mb-6 md:mb-0">
          <Card className="w-full bg-indigo-100 rotate-[-3deg] border-2 border-indigo-700 neo-card">
            <CardHeader className="bg-indigo-200 border-b border-indigo-300">
              <CardTitle className="text-indigo-800 text-lg md:text-xl">My Skills</CardTitle>
            </CardHeader>
            <CardContent className="bg-gradient-to-br from-indigo-50 to-purple-50">
              <div className="flex w-full flex-wrap justify-evenly">
                {Skills.map((skill) => (
                  <div key={skill.id} className="skills-icon hover:scale-110 transition-transform duration-300 fill-indigo-700 hover:fill-purple-600">
                    <svg className="p-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d={skill.svg} />
                    </svg>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div {...ContentAnimation} className="relative order-1 w-full max-w-xs my-10 text-justify md:order-2 md:my-0 md:w-1/4 z-10">
          <Card className="bg-gradient-to-br from-purple-100 to-pink-100 rotate-3 border-2 border-purple-700 neo-card">
            <CardContent className="p-4 md:p-6">
              <p className="text-sm md:text-md font-medium text-purple-900 mb-4">
                {`Hi, my name is Rasya. I'm FrontEnd Developer I'm love coding because it's fun, writing lines of code to produce something. I'm like about computers since 2 years ago. I live in Surabaya, Indonesia. I was born on July 10, 2007, yeah I'm 16 years old. I'm like listening to music, especially slow or speed up genres, i also like cats :3`}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge className="bg-pink-500 hover:bg-pink-600 text-white neo-button text-xs md:text-sm">Frontend</Badge>
                <Badge className="bg-purple-500 hover:bg-purple-600 text-white neo-button text-xs md:text-sm">Developer</Badge>
                <Badge className="bg-indigo-500 hover:bg-indigo-600 text-white neo-button text-xs md:text-sm">Student</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </Layouts>
  );
};

export default About;
