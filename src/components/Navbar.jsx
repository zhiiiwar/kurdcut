import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-950/80 backdrop-blur-xl border-b border-dark-600/50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold tracking-widest">
          KURD<span className="text-gold-500">CUT</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#customers" className="text-sm text-dark-300 hover:text-white transition-colors">For Customers</a>
          <a href="#partners" className="text-sm text-dark-300 hover:text-white transition-colors">For Partners</a>
          <a href="#pricing" className="text-sm text-dark-300 hover:text-white transition-colors">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm text-dark-400 hover:text-white transition-colors">Partner Login</a>
          <a href="#download" className="accent-gradient text-dark-950 font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-gold-500/20 transition-all">
            Download App
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark-900 border-t border-dark-600/50 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top">
          <a href="#customers" onClick={() => setOpen(false)} className="text-dark-300 hover:text-white py-2">For Customers</a>
          <a href="#partners" onClick={() => setOpen(false)} className="text-dark-300 hover:text-white py-2">For Partners</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="text-dark-300 hover:text-white py-2">Pricing</a>
          <hr className="border-dark-600" />
          <a href="#" className="text-dark-400 text-sm py-2">Partner Login</a>
          <a href="#download" className="accent-gradient text-dark-950 font-semibold text-center px-5 py-2.5 rounded-full">
            Download App
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
