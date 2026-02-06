import { motion } from 'framer-motion';
import { Projects } from '@/data/Projects';
import { ContentAnimation } from '@/components/Animations';
import { CornerBracket } from '@/components/ui/CornerBracket';
import Image from 'next/image';

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 md:py-32 scroll-mt-20">
            <motion.div {...ContentAnimation} className="mb-12 text-center md:text-left flex justify-between items-end">
                <div className="neo-card bg-card p-6 md:p-8 -rotate-1 hover:rotate-0 transition-transform duration-300 inline-block rounded-lg relative overflow-hidden">
                    <CornerBracket position="top-left" />
                    <h2 className="text-4xl md:text-6xl font-black text-primary uppercase">My Projects</h2>
                    <div className="flex items-center gap-2 mt-2 font-mono text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        SYSTEM.ALL SYSTEMS GO
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Projects.map((project, index) => {
                    const cardStyles = [
                        { color: 'bg-primary', rotate: 'rotate-1', pattern: 'pattern-stripes' },
                        { color: 'bg-secondary', rotate: '-rotate-1', pattern: 'pattern-dots' },
                        { color: 'bg-primary-dark', rotate: 'rotate-2', pattern: 'pattern-checkerboard' },
                        { color: 'bg-slate-800', rotate: '-rotate-2', pattern: 'pattern-stripes' },
                        { color: 'bg-black', rotate: 'rotate-1', pattern: 'pattern-dots' },
                    ];
                    const style = cardStyles[index % cardStyles.length];
                    const isLarge = index === 0;

                    return (
                        <div key={project.id} className={`group ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                            <div className={`neo-card bg-card ${style.rotate} hover:rotate-0 transition-all duration-300 h-full flex flex-col overflow-hidden rounded-lg relative`}>
                                <CornerBracket position="top-right" size="w-4 h-4" color="border-white/20" />
                                <CornerBracket position="bottom-left" size="w-4 h-4" color="border-white/20" />

                                <div className={`${style.color} ${style.pattern} p-4 flex justify-between items-center`}>
                                    <h3 className="text-xl md:text-2xl font-black text-white uppercase truncate">{project.name}</h3>
                                    <span className="font-mono text-[10px] bg-black/20 px-2 py-1 rounded text-white">ID: {project.id}</span>
                                </div>
                                <div className="relative h-48 md:h-64 w-full overflow-hidden bg-muted group-hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                                    <Image src={`/images/projects/${project.img}.png`} alt={project.name} layout="fill" objectFit="cover" className="transition-all duration-500 group-hover:scale-110 group-hover:opacity-90" />
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                                </div>
                                <div className="p-5 md:p-6 flex-grow flex flex-col">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech?.map((tech, i) => (
                                            <span key={i} className="inline-flex items-center justify-center px-2 py-1 text-xs font-mono font-bold bg-background text-foreground border border-primary/20 rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-sm font-medium text-foreground/70 mb-4 flex-grow line-clamp-3 leading-relaxed font-sans">{project.description}</p>
                                    <div className="flex gap-3 mt-auto">
                                        <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 neo-button bg-primary text-white text-center text-sm py-3 hover:bg-primary/90 rounded-md uppercase font-black tracking-wide">View Demo</a>
                                        <a href={project.sourceCode} target="_blank" rel="noreferrer" className="flex-1 neo-button bg-primary-dark text-white text-center text-sm py-3 hover:bg-primary-dark/90 rounded-md uppercase font-black tracking-wide">Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProjectsSection;
