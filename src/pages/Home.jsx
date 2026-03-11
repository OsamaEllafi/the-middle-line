import { useRef, useLayoutEffect } from 'react';

import { motion as _motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 75%',
        }
      });
      tl.from('.service-card', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden">
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center relative px-6 z-10">
        <div className="max-w-7xl mx-auto w-full relative">
          <_motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8rem] font-[800] tracking-tighter leading-[0.9] uppercase text-text relative z-20"
          >
            Automated <br/> <span className="text-primary">Drone Tech.</span>
          </_motion.h1>
          <_motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 text-xl md:text-2xl text-text/80 max-w-2xl font-body font-light"
          >
            Revolutionizing industries through precision, autonomy, and cutting-edge aerial innovation. Welcome to the future.
          </_motion.p>
        </div>

        {/* MARQUEE */}
        <div className="absolute bottom-20 left-0 w-full overflow-hidden flex z-0 opacity-20 pointer-events-none">
          <_motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="whitespace-nowrap flex gap-12"
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-[12rem] font-[800] uppercase text-transparent tracking-tighter" style={{ WebkitTextStroke: '2px #0ff' }}>
                THE MIDDLE LINE
              </span>
            ))}
          </_motion.div>
        </div>
      </section>

      {/* SERVICES TEASER SECTION */}
      <section className="services-section min-h-screen bg-secondary py-32 px-6 flex flex-col justify-center transition-colors duration-700">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl md:text-7xl font-[800] uppercase tracking-tighter mb-16 text-text">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Mapping', 'Surveillance', 'Delivery'].map((srv, idx) => (
              <div key={idx} className="service-card group bg-bg p-12 border border-white/5 hover:border-primary transition-colors duration-500 cursor-pointer">
                <div className="text-primary font-bold text-xl mb-4 opacity-50 font-display uppercase tracking-widest">0{idx + 1}</div>
                <h3 className="text-3xl font-[700] mb-4 uppercase text-text group-hover:text-primary transition-colors">{srv}</h3>
                <p className="text-text/60 font-body leading-relaxed">
                  High-precision automated {srv.toLowerCase()} solutions powered by next-generation drone technology. Designed for scale and efficiency.
                </p>
                <div className="mt-12 w-12 h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
