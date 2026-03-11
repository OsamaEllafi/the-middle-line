import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { motion as _motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    id: 1,
    client: 'HyperGrid Energy',
    title: 'High-Voltage Line Inspection',
    stats: ['400km covered', '0 accidents', '-60% inspection time'],
    description: 'Deployed an automated fleet of thermal-equipped drones to inspect high-voltage transmission lines across difficult terrain. The AI analysis identified 14 critical thermal anomalies before failure occurred.',
    align: 'left'
  },
  {
    id: 2,
    client: 'EcoAgri Co.',
    title: 'Precision Crop Yield Optimization',
    stats: ['12k Acres Mapped', '+18% Yield', '-30% Water Usage'],
    description: 'Utilized multispectral imaging to create detailed health maps of crops. The resulting data allowed for micro-targeted pesticide and water application, drastically reducing waste and environmental impact.',
    align: 'right'
  },
  {
    id: 3,
    client: 'MetroBuild Corp',
    title: 'Skyscraper Progress Tracking',
    stats: ['Daily Scans', '3mm Accuracy', 'BIM Integrated'],
    description: 'Daily automated flights generated sub-centimeter accurate point clouds of the construction site. This allowed the project managers to track progress against BIM models in real-time, catching a structural deviation early.',
    align: 'left'
  }
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.case-section');

      sections.forEach((section, index) => {
        const content = section.querySelector('.case-content');
        const visual = section.querySelector('.case-visual');

        const isLeft = index % 2 === 0;

        gsap.fromTo(content,
          { opacity: 0, x: isLeft ? -100 : 100 },
          {
            opacity: 1, x: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
            }
          }
        );

        gsap.fromTo(visual,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.2,
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen pt-32 pb-24 px-6 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <_motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32 text-center"
        >
          <h1 className="text-5xl md:text-8xl font-[800] uppercase tracking-tighter text-text">Proven Results</h1>
          <p className="mt-6 text-xl text-text/60 font-body max-w-2xl mx-auto">Real-world applications of our autonomous systems.</p>
        </_motion.div>

        <div className="flex flex-col gap-32">
          {cases.map((cs) => (
            <div key={cs.id} className={`case-section flex flex-col ${cs.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>

              {/* Content */}
              <div className="case-content flex-1 w-full">
                <div className="text-primary font-mono text-sm tracking-widest uppercase mb-4 opacity-70">
                  Client // {cs.client}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-text mb-6">
                  {cs.title}
                </h2>
                <p className="text-text/70 font-body text-lg leading-relaxed mb-8 border-l border-white/20 pl-6">
                  {cs.description}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {cs.stats.map((stat, sidx) => (
                    <div key={sidx} className="bg-black/40 border border-white/5 p-4 text-center">
                      <div className="text-primary font-bold text-lg md:text-xl font-display">{stat.split(' ')[0]}</div>
                      <div className="text-text/50 text-xs uppercase tracking-widest mt-1">{stat.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Placeholder */}
              <div className="case-visual flex-1 w-full aspect-video bg-black/60 border border-white/10 relative overflow-hidden group">
                {/* Fake tech UI overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="flex justify-between font-mono text-xs text-primary">
                    <span>REC _</span>
                    <span>HD 1080P</span>
                  </div>
                  <div className="flex justify-between items-end font-mono text-xs text-primary">
                    <div className="space-y-1">
                      <div>ALT: 324.5m</div>
                      <div>SPD: 12.8m/s</div>
                    </div>
                    <div className="w-16 h-16 border border-primary rounded-full flex items-center justify-center relative">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      <div className="absolute inset-2 border-t border-primary rounded-full animate-spin" />
                    </div>
                  </div>
                </div>

                {/* Visual Background Graphic */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-bg flex items-center justify-center -z-10">
                  <div className="w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#0ff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
