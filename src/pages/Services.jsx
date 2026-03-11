import { useRef, useLayoutEffect, useState } from 'react';

import { motion as _motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  { id: 1, title: 'LiDAR Mapping', desc: 'Sub-centimeter precision 3D mapping for construction, agriculture, and urban planning. Our autonomous drones generate dense point clouds with AI-assisted anomaly detection.', color: 'bg-primary' },
  { id: 2, title: 'Thermal Surveillance', desc: 'Night-vision and thermal imaging arrays for search and rescue, perimeter security, and infrastructure inspection. Unparalleled clarity in zero-visibility conditions.', color: 'bg-accent' },
  { id: 3, title: 'Heavy-Lift Delivery', desc: 'Point-to-point autonomous cargo transport. Capable of lifting up to 50kg with dynamic obstacle avoidance and precision landing protocols.', color: 'bg-secondary' },
];

export default function Services() {
  const containerRef = useRef(null);
  const [activeService, setActiveService] = useState(0);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.service-item');
      items.forEach((item) => {
        gsap.fromTo(item,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen pt-32 pb-24 px-6 selection:bg-accent">
      <div className="max-w-7xl mx-auto">
        <_motion.h1
          initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="text-5xl md:text-8xl font-[800] uppercase tracking-tighter mb-24"
        >
          Operations
        </_motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">

          {/* LEFT: Services List */}
          <div className="flex flex-col gap-16">
            {servicesData.map((srv, idx) => (
              <div
                key={srv.id}
                className="service-item cursor-pointer group"
                onMouseEnter={() => setActiveService(idx)}
              >
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-xl font-display text-text/40 group-hover:text-primary transition-colors">0{srv.id}</span>
                  <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-text group-hover:text-primary transition-colors duration-300">
                    {srv.title}
                  </h2>
                </div>
                <p className="text-lg text-text/70 font-body leading-relaxed max-w-lg border-l-2 border-primary/20 pl-6 group-hover:border-primary transition-colors duration-300">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT: Interactive Demo Block (Sticky) */}
          <div className="hidden lg:block relative h-full">
            <div className="sticky top-32 w-full aspect-square border border-white/10 bg-black/50 p-8 overflow-hidden flex flex-col justify-between">

              <div className="flex justify-between items-start z-10">
                <div className="uppercase font-mono text-sm tracking-widest text-primary/70 animate-pulse">
                  Sys_Active: {servicesData[activeService].title}
                </div>
                <div className="text-xs text-text/40 font-mono text-right">
                  LAT: 40.7128° N<br/>
                  LNG: 74.0060° W
                </div>
              </div>

              {/* Fake Drone Demo Interaction */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <_motion.div
                  key={activeService}
                  initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  className={`w-64 h-64 border border-dashed rounded-full flex items-center justify-center relative ${servicesData[activeService].color.replace('bg-', 'border-')}/50`}
                >
                  <_motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="absolute inset-4 border-t border-r border-primary rounded-full opacity-30"
                  />
                  <div className={`w-12 h-12 rounded-full blur-xl ${servicesData[activeService].color}`} />
                  <div className="w-2 h-2 bg-white rounded-full absolute" />
                </_motion.div>
              </div>

              <div className="z-10 mt-auto">
                <div className="h-1 w-full bg-white/10 mb-2 overflow-hidden">
                  <_motion.div
                    key={activeService + "progress"}
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className={`h-full ${servicesData[activeService].color}`}
                  />
                </div>
                <div className="text-xs uppercase font-mono text-text/50">Calibration Complete</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
