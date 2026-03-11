import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';

const WA = 'https://wa.me/9647501853167';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-900 border-t border-dark-600/50">
      {/* Massive Final CTA */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('ft_cta_title')}</h2>
          <p className="text-dark-300 text-lg mb-8">{t('ft_cta_desc')}</p>
          <a href={WA} target="_blank" rel="noopener" className="accent-gradient text-dark-950 font-bold text-lg px-8 py-4 rounded-full inline-flex items-center gap-2 hover:shadow-xl hover:shadow-gold-500/20 transition-all">
            <MessageCircle size={22} /> {t('ft_cta_btn')}
          </a>
        </div>
      </div>

      {/* App badges + Link Columns */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <h3 className="text-xl font-bold tracking-widest mb-4">
            KURD<span className="text-gold-500">CUT</span>
          </h3>
          <p className="text-dark-400 text-sm mb-6">{t('ft_slogan')}</p>
          <div className="flex gap-3">
            <a href="#" className="border border-dark-600 rounded-lg px-4 py-2 flex items-center gap-2 hover:border-dark-400 transition-colors">
              <span className="text-xl">🍎</span>
              <span className="text-xs text-dark-400 leading-tight">{t('dl_apple')}<br /><span className="text-white font-semibold text-sm">App Store</span></span>
            </a>
            <a href="#" className="border border-dark-600 rounded-lg px-4 py-2 flex items-center gap-2 hover:border-dark-400 transition-colors">
              <span className="text-xl">▶️</span>
              <span className="text-xs text-dark-400 leading-tight">{t('dl_google')}<br /><span className="text-white font-semibold text-sm">Google Play</span></span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-400 mb-4">{t('ft_product')}</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#customers" className="text-dark-200 hover:text-gold-500 transition-colors">{t('nav_customers')}</a></li>
            <li><a href="#partners" className="text-dark-200 hover:text-gold-500 transition-colors">{t('nav_partners')}</a></li>
            <li><a href="#pricing" className="text-dark-200 hover:text-gold-500 transition-colors">{t('nav_pricing')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-400 mb-4">{t('ft_support')}</h4>
          <ul className="space-y-3 text-sm">
            <li><a href={WA} target="_blank" rel="noopener" className="text-dark-200 hover:text-gold-500 transition-colors">{t('ft_contact')}</a></li>
            <li><a href={WA} target="_blank" rel="noopener" className="text-dark-200 hover:text-gold-500 transition-colors">{t('ft_help')}</a></li>
            <li><a href={WA} target="_blank" rel="noopener" className="text-dark-200 hover:text-gold-500 transition-colors">{t('nav_partner_login')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-400 mb-4">{t('ft_legal')}</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/terms" className="text-dark-200 hover:text-gold-500 transition-colors">{t('ft_terms')}</Link></li>
            <li><Link to="/privacy" className="text-dark-200 hover:text-gold-500 transition-colors">{t('ft_privacy')}</Link></li>
            <li><a href={WA} target="_blank" rel="noopener" className="text-dark-200 hover:text-gold-500 transition-colors">{t('ft_data')}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-dark-600/50 py-6 text-center text-dark-500 text-sm">
        © 2026 KurdCut. {t('ft_rights')}
      </div>
    </footer>
  );
};

export default Footer;
