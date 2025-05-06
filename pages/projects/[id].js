import Image from 'next/image';
import Layouts from '@/components/Layouts';
import { motion } from 'framer-motion';
import { Projects } from '@/data/Projects';
import { withRouter } from 'next/router';
import { ContentAnimation } from '@/components/Animations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectDetail = withRouter(
  ({
    router: {
      query: { id },
    },
  }) => {
    const getProject = Projects.find((project) => project.slug === id);

    return (
      <Layouts pageTitle=" | Projects">
        <section className="relative flex w-full items-center justify-center py-40 md:h-screen">
          <span className="title-page">PROJECTS</span>

          {id != undefined ? (
            <motion.div {...ContentAnimation} className="relative w-72 md:w-3/4">
              <Card className="p-6 bg-white rotate-1">
                <CardContent className="p-0 flex flex-col md:flex-row md:justify-between md:gap-6">
                  <div className="mb-6 w-full md:mb-0 md:w-[480px]">
                    <div className="relative mb-4 h-44 w-full md:h-[294px] border-2 border-black overflow-hidden">
                      <Image src={`/images/projects/${getProject.img}.png`} priority layout="fill" alt={getProject.name} className="relative" />
                    </div>
                    <div className="flex w-full justify-between gap-2">
                      <a href={getProject.demo} target="_blank" rel="noreferrer" className="flex-1">
                        <Button variant="default" className="w-full bg-pink-500 text-white">
                          View Demo
                        </Button>
                      </a>
                      <a href={getProject.sourceCode} target="_blank" rel="noreferrer" className="flex-1">
                        <Button variant="default" className="w-full bg-blue-500 text-white">
                          Source Code
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="flex w-full flex-col justify-between md:w-[480px]">
                    <div>
                      <h1 className="mb-4 text-center text-4xl font-bold text-black md:text-5xl">{getProject.name}</h1>
                      
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        {getProject.tech?.map((tech, i) => (
                          <Badge key={i} variant="accent">{tech}</Badge>
                        ))}
                      </div>
                      
                      <p className="text-justify font-medium mb-6">{getProject.description}</p>
                    </div>
                    
                    <div className="mt-4 p-4 bg-muted border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
                      <h3 className="font-bold mb-2">Project Information</h3>
                      <p className="text-sm">This project was created with modern web technologies and follows best practices for performance and accessibility.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            ''
          )}
        </section>
      </Layouts>
    );
  }
);

export default ProjectDetail;
