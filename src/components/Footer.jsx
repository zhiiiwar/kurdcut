import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-600/50">
      {/* Massive Final CTA */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to modernize your salon?
          </h2>
          <p className="text-dark-300 text-lg mb-8">
            Join hundreds of businesses already thriving on KurdCut.
          </p>
          <a href="#pricing" className="accent-gradient text-dark-950 font-bold text-lg px-8 py-4 rounded-full inline-block hover:shadow-xl hover:shadow-gold-500/20 transition-all">
            Create a Partner Account
          </a>
        </div>
      </div>

      {/* App badges + Link Columns */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand + Badges */}
        <div className="col-span-2">
          <h3 className="text-xl font-bold tracking-widest mb-4">
            KURD<span className="text-gold-500">CUT</span>
          </h3>
          <p className="text-dark-400 text-sm mb-6">The premium booking standard for Iraq.</p>
          <div className="flex gap-3">
            <a href="#" className="border border-dark-600 rounded-lg px-4 py-2 flex items-center gap-2 hover:border-dark-400 transition-colors">
              <span className="text-xl">🍎</span>
              <span className="text-xs text-dark-400 leading-tight">Download on<br /><span className="text-white font-semibold text-sm">App Store</span></span>
            </a>
            <a href="#" className="border border-dark-600 rounded-lg px-4 py-2 flex items-center gap-2 hover:border-dark-400 transition-colors">
              <span className="text-xl">▶️</span>
              <span className="text-xs text-dark-400 leading-tight">Get it on<br /><span className="text-white font-semibold text-sm">Google Play</span></span>
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-400 mb-4">Product</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#customers" className="text-dark-200 hover:text-gold-500 transition-colors">For Customers</a></li>
            <li><a href="#partners" className="text-dark-200 hover:text-gold-500 transition-colors">For Partners</a></li>
            <li><a href="#pricing" className="text-dark-200 hover:text-gold-500 transition-colors">Pricing</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-400 mb-4">Support</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="mailto:support@kurdcut.com" className="text-dark-200 hover:text-gold-500 transition-colors">Contact Us</a></li>
            <li><a href="#" className="text-dark-200 hover:text-gold-500 transition-colors">Help Center</a></li>
            <li><a href="#" className="text-dark-200 hover:text-gold-500 transition-colors">Partner Login</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-400 mb-4">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/terms" className="text-dark-200 hover:text-gold-500 transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="text-dark-200 hover:text-gold-500 transition-colors">Privacy Policy</Link></li>
            <li><a href="#" className="text-dark-200 hover:text-gold-500 transition-colors">Data Deletion</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-600/50 py-6 text-center text-dark-500 text-sm">
        © 2026 KurdCut. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
