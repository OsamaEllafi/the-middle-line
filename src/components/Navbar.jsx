import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 mix-blend-difference">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-primary font-bold text-2xl tracking-tighter uppercase">
          TML.
        </Link>
        <div className="hidden md:flex gap-8">
          <Link to="/services" className="text-text hover:text-primary transition-colors uppercase text-sm font-semibold tracking-wide">Services</Link>
          <Link to="/pricing" className="text-text hover:text-primary transition-colors uppercase text-sm font-semibold tracking-wide">Pricing</Link>
          <Link to="/blog" className="text-text hover:text-primary transition-colors uppercase text-sm font-semibold tracking-wide">Blog</Link>
          <Link to="/case-studies" className="text-text hover:text-primary transition-colors uppercase text-sm font-semibold tracking-wide">Cases</Link>
          <Link to="/contact" className="text-text hover:text-primary transition-colors uppercase text-sm font-semibold tracking-wide">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
