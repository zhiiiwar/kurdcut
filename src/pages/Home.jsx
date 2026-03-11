import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Clock, Star, Bell, CalendarCheck, Users, MessageSquare,
  ChevronDown, QrCode, ArrowRight, Smartphone, Monitor,
  UserPlus, ListPlus, CreditCard, Rocket, Quote, Check,
  MessageCircle
} from 'lucide-react';

const WA = 'https://wa.me/9647501853167';

/* ═══════════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════════ */
const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4 border border-gold-500/30 px-4 py-1.5 rounded-full">
            {t('hero_badge')}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t('hero_title_1')} <br />
            <span className="text-gold-500">{t('hero_title_2')}</span> {t('hero_title_3')}
          </h1>
          <p className="text-dark-300 text-lg max-w-xl mb-10 leading-relaxed">
            {t('hero_desc')}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#download" className="accent-gradient text-dark-950 font-bold px-8 py-3.5 rounded-full text-base hover:shadow-xl hover:shadow-gold-500/20 transition-all flex items-center gap-2">
              <Smartphone size={18} /> {t('hero_cta_app')}
            </a>
            <a href={WA} target="_blank" rel="noopener" className="border border-dark-600 text-white font-semibold px-8 py-3.5 rounded-full text-base hover:border-gold-500 transition-all flex items-center gap-2">
              <Monitor size={18} /> {t('hero_cta_shop')}
            </a>
          </div>
        </div>
        <div className="flex items-end justify-center gap-6 lg:gap-8">
          <div className="mockup-phone p-4 flex flex-col gap-3">
            <div className="h-3 w-12 bg-dark-600 rounded-full mx-auto" />
            <div className="flex-1 bg-dark-700 rounded-2xl p-3 flex flex-col gap-2">
              <div className="h-5 w-24 bg-dark-600 rounded" />
              <div className="h-16 bg-dark-600/50 rounded-xl" />
              <div className="h-16 bg-dark-600/50 rounded-xl" />
              <div className="h-16 bg-dark-600/50 rounded-xl" />
              <div className="mt-auto h-10 accent-gradient rounded-xl" />
            </div>
          </div>
          <div className="mockup-dashboard p-3 flex-col gap-2 self-center hidden sm:flex">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 bg-dark-700 rounded-lg p-3 grid grid-cols-7 gap-1">
              {Array.from({ length: 35 }).map((_, i) => (
                <div key={i} className={`h-4 rounded text-[6px] flex items-center justify-center ${[8,15,22].includes(i) ? 'bg-gold-500/30 text-gold-400' : 'bg-dark-600/40'}`}>
                  {[8,15,22].includes(i) && '•'}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════
   2. CUSTOMER FEATURES
   ═══════════════════════════════════════════════════ */
const CustomerFeatures = () => {
  const { t } = useTranslation();
  const features = [
    { icon: Clock, key: 'cf_1' },
    { icon: Star, key: 'cf_2' },
    { icon: Bell, key: 'cf_3' },
  ];
  return (
    <section id="customers" className="py-24 border-t border-dark-600/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">{t('cf_label')}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">{t('cf_title')}</h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">{t('cf_desc')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 hover:border-gold-500/40 transition-all group">
              <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-all">
                <f.icon size={24} className="text-dark-950" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t(`${f.key}_title`)}</h3>
              <p className="text-dark-300 leading-relaxed">{t(`${f.key}_desc`)}</p>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex items-center justify-center gap-6 glass-card rounded-2xl p-6 max-w-md mx-auto">
          <QrCode size={64} className="text-gold-500" />
          <div>
            <p className="font-semibold">{t('cf_qr_title')}</p>
            <p className="text-dark-400 text-sm">{t('cf_qr_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════
   3. PARTNER FEATURES (ZIG-ZAG)
   ═══════════════════════════════════════════════════ */
const PartnerFeatures = () => {
  const { t } = useTranslation();
  const features = [
    { icon: CalendarCheck, key: 'pf_1' },
    { icon: Users, key: 'pf_2' },
    { icon: MessageSquare, key: 'pf_3' },
  ];
  return (
    <section id="partners" className="py-24 bg-dark-900/50 border-t border-dark-600/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">{t('pf_label')}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">{t('pf_title')}</h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">{t('pf_desc')}</p>
        </div>
        <div className="space-y-20">
          {features.map((f, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-12 items-center`}>
              <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
                <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center mb-6">
                  <f.icon size={24} className="text-dark-950" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{t(`${f.key}_title`)}</h3>
                <p className="text-dark-300 text-lg leading-relaxed mb-6">{t(`${f.key}_desc`)}</p>
                <a href={WA} target="_blank" rel="noopener" className="text-gold-500 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  {t('pf_cta')} <ArrowRight size={16} />
                </a>
              </div>
              <div className={i % 2 !== 0 ? 'md:order-1' : ''}>
                <div className="glass-card rounded-2xl p-8 aspect-video flex items-center justify-center">
                  <f.icon size={80} className="text-dark-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════
   4. PRICING
   ═══════════════════════════════════════════════════ */
const Pricing = () => {
  const { t } = useTranslation();
  const [annual, setAnnual] = useState(false);

  const tiers = [
    {
      name: t('pr_t1_name'), desc: t('pr_t1_desc'),
      priceM: '15,000', priceY: '10,000',
      features: [t('pr_t1_f1'), t('pr_t1_f2'), t('pr_t1_f3'), t('pr_t1_f4'), t('pr_t1_f5')],
    },
    {
      name: t('pr_t2_name'), desc: t('pr_t2_desc'),
      priceM: '35,000', priceY: '25,000',
      popular: true,
      features: [t('pr_t2_f1'), t('pr_t2_f2'), t('pr_t2_f3'), t('pr_t2_f4'), t('pr_t2_f5')],
    },
  ];

  return (
    <section id="pricing" className="py-24 border-t border-dark-600/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">{t('pr_label')}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">{t('pr_title')}</h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto mb-8">{t('pr_desc')}</p>
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-dark-400'}`}>{t('pr_monthly')}</span>
            <label className="pricing-toggle relative inline-block cursor-pointer">
              <input type="checkbox" className="sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
              <div className="toggle-slider" />
            </label>
            <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-dark-400'}`}>
              {t('pr_annual')} <span className="text-gold-500 text-xs font-bold ms-1">{t('pr_save')}</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tiers.map((tier, i) => (
            <div key={i} className={`rounded-2xl p-8 border transition-all relative ${tier.popular ? 'border-gold-500/50 bg-gradient-to-b from-gold-500/5 to-transparent shadow-xl shadow-gold-500/5' : 'border-dark-600 bg-dark-800'}`}>
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 accent-gradient text-dark-950 text-xs font-bold px-4 py-1 rounded-full">
                  {t('pr_popular')}
                </span>
              )}
              <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
              <p className="text-dark-400 text-sm mb-6">{tier.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">{annual ? tier.priceY : tier.priceM}</span>
                <span className="text-dark-400 text-sm ms-1">{t('pr_currency')}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-dark-200 text-sm">
                    <Check size={16} className="text-gold-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href={WA} target="_blank" rel="noopener" className={`flex items-center justify-center gap-2 text-center font-semibold py-3 rounded-full transition-all ${tier.popular ? 'accent-gradient text-dark-950 hover:shadow-lg hover:shadow-gold-500/20' : 'border border-dark-600 text-white hover:border-gold-500'}`}>
                <MessageCircle size={18} /> {t('pr_contact_wa')}
              </a>
              <p className="text-dark-500 text-xs text-center mt-4">{t('pr_note')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════
   5. TIMELINE
   ═══════════════════════════════════════════════════ */
const Timeline = () => {
  const { t } = useTranslation();
  const steps = [
    { icon: UserPlus, key: 'tl_1' },
    { icon: ListPlus, key: 'tl_2' },
    { icon: CreditCard, key: 'tl_3' },
    { icon: Rocket, key: 'tl_4' },
  ];
  return (
    <section className="py-24 bg-dark-900/50 border-t border-dark-600/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">{t('tl_label')}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">{t('tl_title')}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 rounded-full border-2 border-gold-500/50 flex items-center justify-center mx-auto mb-4 group-hover:border-transparent transition-all">
                <s.icon size={24} className="text-gold-500" />
              </div>
              <div className="text-gold-500 text-xs font-bold mb-2">{t('tl_step')} {i + 1}</div>
              <h4 className="font-bold text-sm mb-1">{t(`${s.key}_title`)}</h4>
              <p className="text-dark-400 text-xs">{t(`${s.key}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════
   6. TESTIMONIALS
   ═══════════════════════════════════════════════════ */
const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 border-t border-dark-600/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">{t('ts_label')}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">{t('ts_title')}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-8 hover:border-gold-500/30 transition-all">
            <Quote size={28} className="text-gold-500 mb-4" />
            <p className="text-lg text-dark-200 leading-relaxed mb-6 italic">"{t('ts_1_quote')}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full accent-gradient flex items-center justify-center text-dark-950 font-bold">{t('ts_1_initial')}</div>
              <div>
                <p className="font-semibold">{t('ts_1_name')}</p>
                <p className="text-dark-400 text-sm">{t('ts_1_role')}</p>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-8 hover:border-gold-500/30 transition-all">
            <Quote size={28} className="text-gold-500 mb-4" />
            <p className="text-lg text-dark-200 leading-relaxed mb-6 italic">"{t('ts_2_quote')}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full accent-gradient flex items-center justify-center text-dark-950 font-bold">{t('ts_2_initial')}</div>
              <div>
                <p className="font-semibold">{t('ts_2_name')}</p>
                <p className="text-dark-400 text-sm">{t('ts_2_role')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════
   7. FAQ
   ═══════════════════════════════════════════════════ */
const FAQ = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState('users');
  const [openIdx, setOpenIdx] = useState(null);

  const items = [1,2,3,4].map(n => ({
    q: t(`faq_${tab}_q${n}`),
    a: t(`faq_${tab}_a${n}`),
  }));

  return (
    <section className="py-24 bg-dark-900/50 border-t border-dark-600/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">{t('faq_label')}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-8">{t('faq_title')}</h2>
          <div className="inline-flex bg-dark-800 rounded-full p-1 border border-dark-600">
            <button
              onClick={() => { setTab('users'); setOpenIdx(null); }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${tab === 'users' ? 'accent-gradient text-dark-950' : 'text-dark-300 hover:text-white'}`}
            >{t('faq_tab_users')}</button>
            <button
              onClick={() => { setTab('partners'); setOpenIdx(null); }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${tab === 'partners' ? 'accent-gradient text-dark-950' : 'text-dark-300 hover:text-white'}`}
            >{t('faq_tab_partners')}</button>
          </div>
        </div>
        <div>
          {items.map((item, i) => (
            <div key={`${tab}-${i}`} className="border-b border-dark-600/50">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex justify-between items-center py-5 text-left hover:text-gold-500 transition-colors">
                <span className="font-semibold pe-4">{item.q}</span>
                <ChevronDown size={20} className={`text-gold-500 flex-shrink-0 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIdx === i ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                <p className="text-dark-300 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════
   8. DOWNLOAD CTA
   ═══════════════════════════════════════════════════ */
const DownloadCTA = () => {
  const { t } = useTranslation();
  return (
    <section id="download" className="py-24 border-t border-dark-600/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('dl_title')}</h2>
        <p className="text-dark-300 text-lg max-w-xl mx-auto mb-10">{t('dl_desc')}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#" className="border border-dark-600 rounded-xl px-6 py-3 flex items-center gap-3 hover:border-gold-500 transition-all bg-dark-800/50">
            <span className="text-2xl">🍎</span>
            <div className="text-start">
              <div className="text-dark-400 text-[10px] uppercase tracking-wider">{t('dl_apple')}</div>
              <div className="font-semibold">App Store</div>
            </div>
          </a>
          <a href="#" className="border border-dark-600 rounded-xl px-6 py-3 flex items-center gap-3 hover:border-gold-500 transition-all bg-dark-800/50">
            <span className="text-2xl">▶️</span>
            <div className="text-start">
              <div className="text-dark-400 text-[10px] uppercase tracking-wider">{t('dl_google')}</div>
              <div className="font-semibold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════
   HOME
   ═══════════════════════════════════════════════════ */
const Home = () => (
  <div>
    <Hero />
    <CustomerFeatures />
    <PartnerFeatures />
    <Pricing />
    <Timeline />
    <Testimonials />
    <FAQ />
    <DownloadCTA />
  </div>
);

export default Home;
