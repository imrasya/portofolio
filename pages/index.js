import Image from 'next/image';
import Layouts from '@/components/Layouts';
import { motion, useScroll, useTransform } from 'framer-motion';
import RotatingText from '@/components/rotate-text';
import { useRef, useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { ContentAnimation } from '@/components/Animations';
import { CornerBracket } from '@/components/ui/CornerBracket';
import gsap from 'gsap';
import dynamic from 'next/dynamic';

// Lazy Load Components
const ScrollMarquee = dynamic(() => import('@/components/ScrollMarquee'), { ssr: false });
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), { loading: () => <p className="text-center py-20">Loading Projects...</p> });
const ContactSection = dynamic(() => import('@/components/ContactSection'), { loading: () => <p className="text-center py-20">Loading Contact...</p> });
const ProfileCard = dynamic(() => import('@/components/ProfileCard'), { loading: () => <div className="w-full h-[500px] animate-pulse bg-card/50 rounded-xl" /> });

const Home = () => {
    const heroRef = useRef(null);

    // GSAP Entry Animation (Synchronized with Preloader)
    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 2.9 });

            // Hero Content (Left)
            tl.from(".hero-content-item", {
                y: 100,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out"
            });

            // Hero Images (Right)
            tl.from(".hero-image-item", {
                y: 100,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.8");

        }, heroRef);
        return () => ctx.revert();
    }, []);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Layouts>
            {/* Hero Section */}
            <section id="home" ref={heroRef} className="relative min-h-[1vh] flex flex-col items-center justify-center pt-20 md:pt-0 mb-20 md:mb-32">

                {/* Massive Background Text */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0 opacity-10 select-none">
                    <span className="text-[20vw] font-black text-foreground leading-none">RASYA</span>
                    <div className="hero-content-item absolute bottom-10 right-10 font-mono text-xs md:text-sm text-primary opacity-50">
                        COORD: 07° 15' S 112° 44' E <br />
                        SYS.STATUS: ONLINE
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full z-10 max-w-7xl">

                    {/* Left Column: Content */}
                    <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1 text-center md:text-left">
                        <h1 className="hero-content-item text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black text-primary leading-[0.9] mb-6">
                            <span className="block text-lg md:text-2xl font-mono mb-2 text-foreground font-normal tracking-wider">HI, THERE!</span>
                            I'M RASYA DEAN, <br />
                            <span className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl inline-block mt-2 pb-2">
                                <RotatingText
                                    texts={['AI ENTHUSIAST', 'PYTHON DEV', 'FRONTEND']}
                                    mainClassName="text-primary py-0.5 sm:py-1 md:py-2 justify-start rounded-lg"
                                    staggerFrom="last"
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitBy="characters"
                                    rotationInterval={2000}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                />
                            </span>
                        </h1>

                        <div className="hero-content-item text-xl md:text-2xl font-bold text-muted-foreground mb-8 text-center md:text-left">
                            <p className="max-w-xl mx-auto md:mx-0">
                                Building digital experiences with code and creativity.
                            </p>
                        </div>

                        <div className="hero-content-item flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <button onClick={(e) => handleScroll(e, 'projects')} className="neo-brutal-button w-full md:w-auto rounded-md group relative overflow-hidden">
                                <span className="relative z-10">VIEW WORK</span>
                                <CornerBracket position="top-left" size="w-2 h-2" color="border-white" />
                                <CornerBracket position="bottom-right" size="w-2 h-2" color="border-white" />
                            </button>
                            <button onClick={(e) => handleScroll(e, 'contact')} className="neo-brutal-button bg-foreground !text-primary-dark w-full md:w-auto rounded-md">
                                CONTACT ME
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Image - 3 Image Layout */}
                    <div className="md:col-span-5 relative order-1 md:order-2 h-[450px] md:h-[600px] flex items-center justify-center">

                        {/* Side Image Left (Profile 2) */}
                        <div className="hero-image-item absolute left-2 top-8 md:-left-8 md:top-20 z-10 w-28 h-28 md:w-44 md:h-44 block">
                            <motion.div
                                className="w-full h-full"
                                initial={{ rotate: -10 }}
                                animate={{ rotate: -6 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                <div className="relative w-full h-full p-2 bg-card border-2 border-primary shadow-neo rounded-lg transform transition-transform hover:scale-110 hover:rotate-0 hover:z-50 duration-300">
                                    <div className="relative w-full h-full overflow-hidden rounded">
                                        <Image
                                            src="/images/profile/reze-melet.webp"
                                            layout="fill"
                                            objectFit="cover"
                                            alt="Side Profile"
                                            className="grayscale hover:grayscale-0 transition-all duration-500"
                                            priority
                                            sizes="(max-width: 768px) 112px, 176px"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Main Image (Center) - RPG Style */}
                        <div className="hero-image-item relative z-20 w-[280px] h-[380px] md:w-[340px] md:h-[470px]">
                            <motion.div
                                className="w-full h-full"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="w-full h-full relative rotate-2 hover:rotate-0 transition-transform duration-500">
                                    {/* Hard Shadow - Floating Effect */}
                                    <div className="absolute inset-4 bg-primary-dark z-0 transform translate-x-5 translate-y-5 rounded-xl" />

                                    {/* RPG Frame Container */}
                                    <div className="absolute inset-4 bg-card z-10 rounded-xl border-[6px] border-primary-dark shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                        {/* Image */}
                                        <div className="absolute inset-0 overflow-hidden rounded-lg">
                                            <Image
                                                src="/images/profile/profile.png"
                                                layout="fill" // Keep layout fill for responsiveness
                                                objectFit="cover"
                                                alt="Main Profile"
                                                className="grayscale hover:grayscale-0 transition-all duration-500"
                                                priority
                                                sizes="(max-width: 768px) 280px, 340px"
                                            />
                                        </div>

                                        {/* Corner Brackets */}
                                        <CornerBracket position="top-left" size="w-8 h-8" color="border-primary" />
                                        <CornerBracket position="bottom-right" size="w-8 h-8" color="border-primary" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Side Image Right (Detailed) */}
                        <div className="hero-image-item absolute right-2 bottom-8 md:-right-4 md:bottom-24 z-30 w-28 h-28 md:w-36 md:h-36 block">
                            <motion.div
                                className="w-full h-full"
                                initial={{ rotate: 10 }}
                                animate={{ rotate: 6 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                <div className="relative w-full h-full p-2 bg-white border-2 border-black shadow-neo rounded-lg transform transition-transform hover:scale-110 hover:rotate-0 hover:z-50 duration-300">
                                    <div className="relative w-full h-full overflow-hidden rounded">
                                        <Image
                                            src="/images/profile/reze-wle.jpg"
                                            layout="fill"
                                            objectFit="cover"
                                            alt="Chibi Profile"
                                            className="grayscale hover:grayscale-0 transition-all duration-500"
                                            priority
                                            sizes="(max-width: 768px) 112px, 144px"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infinite Marquee - Lazy Loaded */}
            <ScrollMarquee baseVelocity={-2} className="marquee-container -mx-4 md:-mx-12 rotate-1 mb-24 md:mb-32 border-y-2 border-primary font-mono text-sm md:text-2xl tracking-widest uppercase font-black">
                PYTHON DEV :: FRONTEND DEV :: UI/UX :: AI ENTHUSIAST ::
            </ScrollMarquee>

            {/* About Section */}
            <section id="about" className="py-20 md:py-32 scroll-mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* About Content */}
                    <motion.div {...ContentAnimation} className="order-2 md:order-1">
                        <div className="neo-card bg-card p-8 rotate-1 hover:rotate-0 transition-transform duration-300 rounded-lg relative overflow-hidden group">
                            <CornerBracket position="top-left" />
                            <CornerBracket position="bottom-right" />
                            <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 uppercase">Who Am I?</h2>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold uppercase mb-2 text-foreground font-mono">Rasya</h3>
                                <div className="flex gap-2 font-mono text-xs text-primary-dark bg-foreground/10 p-2 rounded">
                                    <span>CLASS: DEV</span>
                                    <span>LVL: 20+</span>
                                </div>
                            </div>
                            <p className="text-lg font-medium text-justify leading-relaxed mb-6 border-l-4 border-primary pl-4 text-muted-foreground">
                                {`Hi, I'm Rasya Dean Syahputra, an 18-year-old developer based in Surabaya, Indonesia. For over two years, I’ve been exploring the world of computing and building creative solutions from scratch. I specialize in Frontend Development and Python, with a focus on Telegram bots and automation. As a student who is constantly learning, I am deeply enthusiastic about the latest developments in AI and how they can be integrated into modern technology.`}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Badge className="neo-button bg-primary text-white rounded-md font-mono">Frontend</Badge>
                                <Badge className="neo-button bg-secondary text-white rounded-md font-mono">Python</Badge>
                                <Badge className="neo-button bg-primary-dark text-white rounded-md font-mono">Student</Badge>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Grid */}
                    {/* Skills Grid - Profile Card with Tactical HUD - Lazy Loaded */}
                    <motion.div {...ContentAnimation} className="order-1 md:order-2 h-full">
                        <div className="relative w-full h-full min-h-[500px] flex items-center justify-center p-4">
                            {/* Static HUD Elements */}
                            <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-xl m-4 pointer-events-none" />
                            <CornerBracket position="top-right" size="w-8 h-8" color="border-primary" />
                            <CornerBracket position="bottom-left" size="w-8 h-8" color="border-primary" />

                            {/* Dynamic Profile Card */}
                            <ProfileCard
                                name="Rasya Dean"
                                title="Frontend Developer"
                                status="Available"
                                contactText="Hire Me"
                                avatarUrl="/images/profile/reze-talk.png"
                                showUserInfo={false}
                                enableTilt={false}
                                behindGlowColor="rgba(168, 85, 247, 0.6)"
                                innerGradient="linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(88, 28, 135, 0.4) 100%)"
                                className="z-10"
                                onContactClick={() => {
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section - Lazy Loaded */}
            <ProjectsSection />

            {/* Contact Section - Lazy Loaded */}
            <ContactSection />

        </Layouts>
    );
};

export default Home;
