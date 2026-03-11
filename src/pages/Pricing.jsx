
import { motion as _motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

function Counter({ from, to }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  return <_motion.span>{rounded}</_motion.span>;
}

const plans = [
  { name: 'Basic Scan', price: 999, features: ['100 Acres Coverage', '2D Orthomosaic', 'Standard Resolution', '48h Delivery'] },
  { name: 'Pro Analytics', price: 2499, features: ['500 Acres Coverage', '3D Point Cloud (LiDAR)', 'Thermal Imaging', '24h Delivery', 'AI Anomaly Report'], highlight: true },
  { name: 'Enterprise Fleet', price: 8999, features: ['Unlimited Coverage', 'Live Data Streaming', 'Dedicated Pilot Team', 'Instant Delivery', 'API Integration'] },
];

export default function Pricing() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6 bg-bg flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full text-center mb-20">
        <_motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-[800] uppercase tracking-tighter"
        >
          Investment
        </_motion.h1>
        <_motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-xl text-text/60 font-body max-w-2xl mx-auto"
        >
          Transparent pricing for autonomous aerial solutions.
        </_motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, idx) => (
          <_motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className={`p-10 border ${plan.highlight ? 'border-primary bg-primary/5 relative' : 'border-white/10 bg-black/40'} flex flex-col h-full`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-bg px-4 py-1 text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <h2 className="text-2xl font-bold uppercase tracking-tight text-text mb-4">{plan.name}</h2>
            <div className="text-5xl font-[800] text-primary mb-8 font-display flex items-baseline">
              <span className="text-3xl mr-1">$</span>
              <Counter from={0} to={plan.price} />
            </div>

            <ul className="flex-1 space-y-4 mb-10">
              {plan.features.map((feat, fidx) => (
                <li key={fidx} className="flex items-center text-text/70 font-body">
                  <span className="w-1.5 h-1.5 bg-accent mr-3 block" />
                  {feat}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 uppercase font-bold text-sm tracking-widest transition-colors ${plan.highlight ? 'bg-primary text-bg hover:bg-white' : 'border border-white/20 hover:border-primary text-text'}`}>
              Select Plan
            </button>
          </_motion.div>
        ))}
      </div>
    </div>
  );
}
