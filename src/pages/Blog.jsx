
import { motion as _motion } from 'framer-motion';

const articles = [
  { id: 1, title: 'The Future of Autonomous Agriculture', date: 'Oct 12, 2024', category: 'Industry', excerpt: 'How LiDAR-equipped drones are redefining crop yield predictions and reducing fertilizer waste by over 40%.' },
  { id: 2, title: 'Thermal Imaging in Search & Rescue', date: 'Sep 28, 2024', category: 'Technology', excerpt: 'Deploying UAV fleets in zero-visibility environments. Case study from the recent mountain rescue operation.' },
  { id: 3, title: 'Navigating FAA Regulations in 2025', date: 'Sep 15, 2024', category: 'Compliance', excerpt: 'A comprehensive breakdown of the upcoming BVLOS (Beyond Visual Line of Sight) rule changes and what they mean for enterprise operators.' },
  { id: 4, title: 'Integrating Drone Data with BIM', date: 'Aug 30, 2024', category: 'Construction', excerpt: 'Bridging the gap between aerial point clouds and Building Information Modeling software for seamless project management.' },
  { id: 5, title: 'Next-Gen Battery tech for UAVs', date: 'Aug 12, 2024', category: 'Hardware', excerpt: 'Exploring solid-state batteries and their impact on extending flight times for heavy-lift delivery drones.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50 } }
};

export default function Blog() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6 bg-bg text-text selection:bg-primary selection:text-bg">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <_motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-[800] uppercase tracking-tighter text-text"
          >
            Insights.
          </_motion.h1>
          <_motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
            className="h-1 w-full bg-primary mt-8 origin-left"
          />
        </div>

        <_motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-8"
        >
          {articles.map((article) => (
            <_motion.article
              key={article.id}
              variants={itemVariants}
              className="group border border-white/10 p-8 hover:border-primary transition-colors duration-300 cursor-pointer bg-black/20"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                <span className="text-xs font-mono text-primary uppercase tracking-widest">{article.category}</span>
                <span className="text-sm font-body text-text/50">{article.date}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-text group-hover:text-primary transition-colors duration-300 mb-4">
                {article.title}
              </h2>
              <p className="text-text/70 font-body text-lg leading-relaxed max-w-3xl">
                {article.excerpt}
              </p>

              <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                Read Article <span className="ml-2">→</span>
              </div>
            </_motion.article>
          ))}
        </_motion.div>
      </div>
    </div>
  );
}
