import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-6">
        <h1 className="text-8xl md:text-9xl font-bold text-gold-500 mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">{t('nf_title')}</h2>
        <p className="text-dark-300 text-lg max-w-md mx-auto mb-10">{t('nf_desc')}</p>
        <Link
          to="/"
          className="accent-gradient text-dark-950 font-bold px-8 py-3.5 rounded-full text-base hover:shadow-xl hover:shadow-gold-500/20 transition-all inline-flex items-center gap-2"
        >
          <Home size={18} /> {t('nf_btn')}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
