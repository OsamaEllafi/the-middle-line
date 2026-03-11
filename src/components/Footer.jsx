export default function Footer() {
  return (
    <footer className="w-full bg-bg py-12 px-6 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-70 hover:opacity-100 transition-opacity">
        <h2 className="text-xl font-bold tracking-tighter text-primary uppercase">The Middle Line</h2>
        <p className="text-sm mt-4 md:mt-0 font-body">© {new Date().getFullYear()} TML Drone Services. All rights reserved.</p>
      </div>
    </footer>
  );
}
