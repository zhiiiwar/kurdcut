import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'ku', label: 'KU' },
  { code: 'ar', label: 'AR' },
];

const WA = 'https://wa.me/9647501853167';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('i18nextLng', code);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-950/80 backdrop-blur-xl border-b border-dark-600/50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="text-xl font-bold tracking-widest">
          KURD<span className="text-gold-500">CUT</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/#customers" className="text-sm text-dark-300 hover:text-white transition-colors">{t('nav_customers')}</a>
          <a href="/#partners" className="text-sm text-dark-300 hover:text-white transition-colors">{t('nav_partners')}</a>
          <a href="/#pricing" className="text-sm text-dark-300 hover:text-white transition-colors">{t('nav_pricing')}</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex border border-dark-600 rounded-full p-0.5">
            {LANGS.map(l => (
              <button
                key={l.code}
                onClick={() => changeLang(l.code)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${i18n.language === l.code ? 'accent-gradient text-dark-950' : 'text-dark-400 hover:text-white'}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <Link to="/contact" className="text-sm text-dark-400 hover:text-white transition-colors">
            {t('nav_partner_login')}
          </Link>
          <a href="/#download" className="accent-gradient text-dark-950 font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-gold-500/20 transition-all">
            {t('nav_download')}
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark-900 border-t border-dark-600/50 px-6 py-6 flex flex-col gap-4">
          <a href="/#customers" onClick={() => setOpen(false)} className="text-dark-300 hover:text-white py-2">{t('nav_customers')}</a>
          <a href="/#partners" onClick={() => setOpen(false)} className="text-dark-300 hover:text-white py-2">{t('nav_partners')}</a>
          <a href="/#pricing" onClick={() => setOpen(false)} className="text-dark-300 hover:text-white py-2">{t('nav_pricing')}</a>
          <hr className="border-dark-600" />
          {/* Language Switcher (mobile) */}
          <div className="flex gap-2">
            {LANGS.map(l => (
              <button
                key={l.code}
                onClick={() => { changeLang(l.code); setOpen(false); }}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${i18n.language === l.code ? 'accent-gradient text-dark-950' : 'border border-dark-600 text-dark-400'}`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <Link to="/contact" className="text-dark-400 text-sm py-2" onClick={() => setOpen(false)}>
            {t('nav_partner_login')}
          </Link>
          <a href="/#download" className="accent-gradient text-dark-950 font-semibold text-center px-5 py-2.5 rounded-full">
            {t('nav_download')}
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
