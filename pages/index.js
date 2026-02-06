import Image from "next/image";
import Layouts from "@/components/Layouts";
import { motion, useScroll, useTransform } from "framer-motion";
import RotatingText from "@/components/rotate-text";
import { useRef, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ContentAnimation } from "@/components/Animations";
import { CornerBracket } from "@/components/ui/CornerBracket";
import gsap from "gsap";
import dynamic from "next/dynamic";

// Lazy Load Components
const ScrollMarquee = dynamic(() => import("@/components/ScrollMarquee"), {
  ssr: false,
});
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  loading: () => <p className="py-20 text-center">Loading Projects...</p>,
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <p className="py-20 text-center">Loading Contact...</p>,
});
const ProfileCard = dynamic(() => import("@/components/ProfileCard"), {
  loading: () => (
    <div className="h-[500px] w-full animate-pulse rounded-xl bg-card/50" />
  ),
});

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
        ease: "power3.out",
      });

      // Hero Images (Right)
      tl.from(
        ".hero-image-item",
        {
          y: 100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layouts>
      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative mb-20 flex min-h-[1vh] flex-col items-center justify-center pt-20 md:mb-32 md:pt-0"
      >
        {/* Massive Background Text */}
        <div className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center overflow-hidden opacity-10">
          <span className="text-[20vw] font-black leading-none text-foreground">
            RASYA
          </span>
          <div className="hero-content-item absolute bottom-10 right-10 font-mono text-xs text-primary opacity-50 md:text-sm">
            COORD: 07&deg; 15&apos; S 112&deg; 44&apos; E <br />
            SYS.STATUS: ONLINE
          </div>
        </div>

        <div className="z-10 grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-12">
          {/* Left Column: Content */}
          <div className="order-2 flex flex-col justify-center text-center md:order-1 md:col-span-7 md:text-left">
            <h1 className="hero-content-item mb-6 text-3xl font-black leading-[0.9] text-primary sm:text-4xl md:text-7xl lg:text-8xl">
              <span className="mb-2 block font-mono text-lg font-normal tracking-wider text-foreground md:text-2xl">
                HI, THERE!
              </span>
              I&apos;M RASYA DEAN, <br />
              <span className="mt-2 inline-block pb-2 text-3xl sm:text-4xl md:text-7xl lg:text-8xl">
                <RotatingText
                  texts={["AI ENTHUSIAST", "PYTHON DEV", "FRONTEND"]}
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

            <div className="hero-content-item mb-8 text-center text-xl font-bold text-muted-foreground md:text-left md:text-2xl">
              <p className="mx-auto max-w-xl md:mx-0">
                Building digital experiences with code and creativity.
              </p>
            </div>

            <div className="hero-content-item flex flex-col justify-center gap-4 md:flex-row md:justify-start">
              <button
                onClick={(e) => handleScroll(e, "projects")}
                className="neo-brutal-button group relative w-full overflow-hidden rounded-md md:w-auto"
              >
                <span className="relative z-10">VIEW WORK</span>
                <CornerBracket
                  position="top-left"
                  size="w-2 h-2"
                  color="border-white"
                />
                <CornerBracket
                  position="bottom-right"
                  size="w-2 h-2"
                  color="border-white"
                />
              </button>
              <button
                onClick={(e) => handleScroll(e, "contact")}
                className="neo-brutal-button w-full rounded-md bg-foreground !text-primary-dark md:w-auto"
              >
                CONTACT ME
              </button>
            </div>
          </div>

          {/* Right Column: Image - 3 Image Layout */}
          <div className="relative order-1 flex h-[450px] items-center justify-center md:order-2 md:col-span-5 md:h-[600px]">
            {/* Side Image Left (Profile 2) */}
            <div className="hero-image-item absolute left-2 top-8 z-10 block h-28 w-28 md:-left-8 md:top-20 md:h-44 md:w-44">
              <motion.div
                className="h-full w-full"
                initial={{ rotate: -10 }}
                animate={{ rotate: -6 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="relative h-full w-full transform rounded-lg border-2 border-primary bg-card p-2 shadow-neo transition-transform duration-300 hover:z-50 hover:rotate-0 hover:scale-110">
                  <div className="relative h-full w-full overflow-hidden rounded">
                    <Image
                      src="/images/profile/reze-melet.webp"
                      layout="fill"
                      objectFit="cover"
                      alt="Side Profile"
                      className="grayscale transition-all duration-500 hover:grayscale-0"
                      priority
                      sizes="(max-width: 768px) 112px, 176px"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Main Image (Center) - RPG Style */}
            <div className="hero-image-item relative z-20 h-[380px] w-[280px] md:h-[470px] md:w-[340px]">
              <motion.div
                className="h-full w-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-full w-full rotate-2 transition-transform duration-500 hover:rotate-0">
                  {/* Hard Shadow - Floating Effect */}
                  <div className="absolute inset-4 z-0 translate-x-5 translate-y-5 transform rounded-xl bg-primary-dark" />

                  {/* RPG Frame Container */}
                  <div className="absolute inset-4 z-10 rounded-xl border-[6px] border-primary-dark bg-card shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    {/* Image */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg">
                      <Image
                        src="/images/profile/profile.png"
                        layout="fill" // Keep layout fill for responsiveness
                        objectFit="cover"
                        alt="Main Profile"
                        className="grayscale transition-all duration-500 hover:grayscale-0"
                        priority
                        sizes="(max-width: 768px) 280px, 340px"
                      />
                    </div>

                    {/* Corner Brackets */}
                    <CornerBracket
                      position="top-left"
                      size="w-8 h-8"
                      color="border-primary"
                    />
                    <CornerBracket
                      position="bottom-right"
                      size="w-8 h-8"
                      color="border-primary"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Side Image Right (Detailed) */}
            <div className="hero-image-item absolute bottom-8 right-2 z-30 block h-28 w-28 md:-right-4 md:bottom-24 md:h-36 md:w-36">
              <motion.div
                className="h-full w-full"
                initial={{ rotate: 10 }}
                animate={{ rotate: 6 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="relative h-full w-full transform rounded-lg border-2 border-black bg-white p-2 shadow-neo transition-transform duration-300 hover:z-50 hover:rotate-0 hover:scale-110">
                  <div className="relative h-full w-full overflow-hidden rounded">
                    <Image
                      src="/images/profile/reze-wle.jpg"
                      layout="fill"
                      objectFit="cover"
                      alt="Chibi Profile"
                      className="grayscale transition-all duration-500 hover:grayscale-0"
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
      <ScrollMarquee
        baseVelocity={-2}
        className="marquee-container -mx-4 mb-24 rotate-1 border-y-2 border-primary font-mono text-sm font-black uppercase tracking-widest md:-mx-12 md:mb-32 md:text-2xl"
      >
        PYTHON DEV :: FRONTEND DEV :: UI/UX :: AI ENTHUSIAST ::
      </ScrollMarquee>

      {/* About Section */}
      <section id="about" className="scroll-mt-20 py-20 md:py-32">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          {/* About Content */}
          <motion.div {...ContentAnimation} className="order-2 md:order-1">
            <div className="neo-card group relative rotate-1 overflow-hidden rounded-lg bg-card p-8 transition-transform duration-300 hover:rotate-0">
              <CornerBracket position="top-left" />
              <CornerBracket position="bottom-right" />
              <h2 className="mb-6 text-4xl font-black uppercase text-primary md:text-6xl">
                Who Am I?
              </h2>
              <div className="mb-6">
                <h3 className="mb-2 font-mono text-2xl font-bold uppercase text-foreground">
                  Rasya
                </h3>
                <div className="flex gap-2 rounded bg-foreground/10 p-2 font-mono text-xs text-primary-dark">
                  <span>CLASS: DEV</span>
                  <span>LVL: 20+</span>
                </div>
              </div>
              <p className="mb-6 border-l-4 border-primary pl-4 text-justify text-lg font-medium leading-relaxed text-muted-foreground">
                {`Hi, I&apos;m Rasya Dean Syahputra, an 18-year-old developer based in Surabaya, Indonesia. For over two years, I&apos;ve been exploring the world of computing and building creative solutions from scratch. I specialize in Frontend Development and Python, with a focus on Telegram bots and automation. As a student who is constantly learning, I am deeply enthusiastic about the latest developments in AI and how they can be integrated into modern technology.`}
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="neo-button rounded-md bg-primary font-mono text-white">
                  Frontend
                </Badge>
                <Badge className="neo-button rounded-md bg-secondary font-mono text-white">
                  Python
                </Badge>
                <Badge className="neo-button rounded-md bg-primary-dark font-mono text-white">
                  Student
                </Badge>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          {/* Skills Grid - Profile Card with Tactical HUD - Lazy Loaded */}
          <motion.div
            {...ContentAnimation}
            className="order-1 h-full md:order-2"
          >
            <div className="relative flex h-full min-h-[500px] w-full items-center justify-center p-4">
              {/* Static HUD Elements */}
              <div className="pointer-events-none absolute inset-0 m-4 rounded-xl border-2 border-dashed border-primary/20" />
              <CornerBracket
                position="top-right"
                size="w-8 h-8"
                color="border-primary"
              />
              <CornerBracket
                position="bottom-left"
                size="w-8 h-8"
                color="border-primary"
              />

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
                  const contactSection = document.getElementById("contact");
                  if (contactSection)
                    contactSection.scrollIntoView({ behavior: "smooth" });
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
