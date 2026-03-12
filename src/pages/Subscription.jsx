import { useTranslation } from 'react-i18next';
import { CalendarCheck, BarChart3, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/9647501853167';

const Subscription = () => {
  const { t } = useTranslation();

  const benefits = [
    { icon: CalendarCheck, key: 'sub_b1' },
    { icon: BarChart3, key: 'sub_b2' },
    { icon: Sparkles, key: 'sub_b3' },
  ];

  return (
    <section className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4 border border-gold-500/30 px-4 py-1.5 rounded-full">
            {t('sub_hero_1')}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('sub_hero_2')}</h1>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">{t('sub_intro')}</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {benefits.map((b, i) => (
            <div key={i} className={`glass-card rounded-2xl p-8 hover:border-gold-500/40 transition-all group fade-up delay-${i + 1}`}>
              <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-all">
                <b.icon size={24} className="text-dark-950" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t(`${b.key}_title`)}</h3>
              <p className="text-dark-300 leading-relaxed">{t(`${b.key}_desc`)}</p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="relative rounded-2xl overflow-hidden fade-up">
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent pointer-events-none" />
          <div className="glass-card rounded-2xl p-10 md:p-14 text-center relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">{t('sub_contact_title')}</h2>
            <p className="text-dark-300 text-lg max-w-xl mx-auto mb-8">{t('sub_contact_desc')}</p>
            <Link
              to="/contact"
              className="accent-gradient text-dark-950 font-bold text-lg px-8 py-4 rounded-full inline-flex items-center gap-2 hover:shadow-xl hover:shadow-gold-500/20 transition-all"
            >
              <MessageCircle size={22} /> {t('sub_btn_wa')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
