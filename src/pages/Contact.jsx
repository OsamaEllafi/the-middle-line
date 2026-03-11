import { useState } from 'react';

import { motion as _motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    // Fake submission
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6 bg-bg flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Contact Form */}
        <_motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-[800] uppercase tracking-tighter text-text mb-6">Initialize<br/><span className="text-primary">Contact.</span></h1>
          <p className="text-xl text-text/60 font-body mb-12 max-w-md">
            Deploy an inquiry to our central command. We'll synchronize within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-primary mb-2">Operator Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black/40 border border-white/10 p-4 text-text focus:outline-none focus:border-primary transition-colors font-body"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-primary mb-2">Comms Channel (Email)</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-black/40 border border-white/10 p-4 text-text focus:outline-none focus:border-primary transition-colors font-body"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-primary mb-2">Mission Directive</label>
              <textarea
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-black/40 border border-white/10 p-4 text-text focus:outline-none focus:border-primary transition-colors font-body resize-none"
                placeholder="Detail your operational requirements..."
              />
            </div>

            {status === 'error' && <p className="text-red-500 text-sm font-mono">Error: All fields are required.</p>}
            {status === 'success' && <p className="text-primary text-sm font-mono">Transmission successful. Awaiting response.</p>}

            <button type="submit" className="w-full py-4 bg-white/5 border border-primary text-primary hover:bg-primary hover:text-bg transition-colors uppercase font-bold tracking-widest text-sm mt-4 cursor-pointer">
              Transmit Data
            </button>
          </form>
        </_motion.div>

        {/* Map / Visual Placeholder */}
        <_motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-full min-h-[400px] border border-white/10 bg-black overflow-hidden flex items-center justify-center group"
        >
          {/* Radar Scanner Animation */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
             <div className="w-[150%] aspect-square rounded-full border border-primary/20 absolute" />
             <div className="w-[100%] aspect-square rounded-full border border-primary/30 absolute" />
             <div className="w-[50%] aspect-square rounded-full border border-primary/40 absolute" />

             <_motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="w-[100%] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent absolute origin-center"
             />
          </div>

          <div className="relative z-10 text-center">
            <div className="text-primary font-mono text-sm tracking-widest uppercase mb-2">HQ Coordinates</div>
            <div className="text-text/70 font-mono text-xs">
              40° 42' 46.0" N<br/>
              74° 00' 21.6" W
            </div>
          </div>

          <div className="absolute bottom-4 right-4 text-[10px] font-mono text-text/30 uppercase">
            Global Network Offline // Simulating connection
          </div>
        </_motion.div>

      </div>
    </div>
  );
}
