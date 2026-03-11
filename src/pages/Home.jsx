import { useState } from 'react';
import {
  Clock, Star, Bell, CalendarCheck, Users, MessageSquare,
  ChevronDown, QrCode, ArrowRight, Smartphone, Monitor,
  UserPlus, ListPlus, CreditCard, Rocket, Quote, Check
} from 'lucide-react';

/* ═══════════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════════ */
const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px]" />
    </div>

    <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      {/* Copy */}
      <div>
        <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4 border border-gold-500/30 px-4 py-1.5 rounded-full">
          Now Live in Iraq 🇮🇶
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          The Future of <br />
          <span className="text-gold-500">Booking</span> in Iraq.
        </h1>
        <p className="text-dark-300 text-lg max-w-xl mb-10 leading-relaxed">
          Find top-rated barbers in seconds, or list your salon and let our software manage your schedule 24/7.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#download" className="accent-gradient text-dark-950 font-bold px-8 py-3.5 rounded-full text-base hover:shadow-xl hover:shadow-gold-500/20 transition-all flex items-center gap-2">
            <Smartphone size={18} /> Get the App
          </a>
          <a href="#pricing" className="border border-dark-600 text-white font-semibold px-8 py-3.5 rounded-full text-base hover:border-gold-500 transition-all flex items-center gap-2">
            <Monitor size={18} /> List Your Shop
          </a>
        </div>
      </div>

      {/* Mockups */}
      <div className="flex items-end justify-center gap-6 lg:gap-8">
        {/* Phone mockup */}
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

        {/* Dashboard mockup */}
        <div className="mockup-dashboard p-3 flex flex-col gap-2 self-center hidden sm:flex">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 bg-dark-700 rounded-lg p-3 grid grid-cols-7 gap-1">
            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className={`h-4 rounded text-[6px] flex items-center justify-center
                  ${i === 8 || i === 15 || i === 22 ? 'bg-gold-500/30 text-gold-400' : 'bg-dark-600/40'}`}
              >
                {i === 8 && '•'}
                {i === 15 && '•'}
                {i === 22 && '•'}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   2. CUSTOMER FEATURES
   ═══════════════════════════════════════════════════ */
const customerFeatures = [
  { icon: Clock, title: 'Zero Waiting', desc: 'See live availability and book instantly. No calls, no queues — just tap and go.' },
  { icon: Star, title: 'Read Reviews', desc: 'Know you\'re getting a great cut from top-rated professionals trusted by your community.' },
  { icon: Bell, title: 'Never Forget', desc: 'Get automatic push notifications and reminders so you never miss an appointment.' },
];

const CustomerFeatures = () => (
  <section id="customers" className="py-24 border-t border-dark-600/30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">For Customers</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Your Freshest Cut, Just 3 Taps Away.</h2>
        <p className="text-dark-300 text-lg max-w-2xl mx-auto">Download the app and discover the easiest booking experience in Iraq.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {customerFeatures.map((f, i) => (
          <div key={i} className="glass-card rounded-2xl p-8 hover:border-gold-500/40 transition-all group">
            <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-all">
              <f.icon size={24} className="text-dark-950" />
            </div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-dark-300 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* QR Code */}
      <div className="hidden lg:flex items-center justify-center gap-6 glass-card rounded-2xl p-6 max-w-md mx-auto">
        <QrCode size={64} className="text-gold-500" />
        <div>
          <p className="font-semibold">Scan to download the app</p>
          <p className="text-dark-400 text-sm">Available on iOS and Android</p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   3. PARTNER FEATURES (ZIG-ZAG)
   ═══════════════════════════════════════════════════ */
const partnerFeatures = [
  {
    icon: CalendarCheck,
    title: 'Automated Master Calendar',
    desc: 'Prevent double-booking with real-time sync. Every slot, every barber — perfectly managed in one dashboard.',
  },
  {
    icon: Users,
    title: 'Staff Management',
    desc: 'Set custom schedules, working hours, and service menus for every staff member in your shop.',
  },
  {
    icon: MessageSquare,
    title: 'Reduce No-Shows',
    desc: 'Automated SMS reminders keep your chairs full and your revenue safe. Never lose a customer again.',
  },
];

const PartnerFeatures = () => (
  <section id="partners" className="py-24 bg-dark-900/50 border-t border-dark-600/30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">For Business Partners</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Fill Your Chairs. End the Phone Calls.</h2>
        <p className="text-dark-300 text-lg max-w-2xl mx-auto">Powerful tools to automate your shop and grow your clientele.</p>
      </div>

      <div className="space-y-20">
        {partnerFeatures.map((f, i) => (
          <div key={i} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:direction-rtl' : ''}`}>
            <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
              <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center mb-6">
                <f.icon size={24} className="text-dark-950" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{f.title}</h3>
              <p className="text-dark-300 text-lg leading-relaxed mb-6">{f.desc}</p>
              <a href="#pricing" className="text-gold-500 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Get Started <ArrowRight size={16} />
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

/* ═══════════════════════════════════════════════════
   4. PRICING
   ═══════════════════════════════════════════════════ */
const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  const tiers = [
    {
      name: 'Solo Barber',
      desc: 'Perfect for independent barbers.',
      priceM: 15,
      priceY: 10,
      features: ['1 Staff Member', 'Basic Calendar', 'App Listing & Profile', 'Customer Notifications', 'Email Support'],
    },
    {
      name: 'Pro Salon',
      desc: 'For growing salons and shops.',
      priceM: 35,
      priceY: 25,
      popular: true,
      features: ['Up to 5 Staff Members', 'Advanced Analytics Dashboard', 'Priority Placement in App', 'SMS Reminders', 'Dedicated Account Manager'],
    },
  ];

  return (
    <section id="pricing" className="py-24 border-t border-dark-600/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Simple, Transparent Pricing.</h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto mb-8">Choose the plan that fits your business. Cancel anytime.</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-dark-400'}`}>Monthly</span>
            <label className="pricing-toggle relative inline-block cursor-pointer">
              <input type="checkbox" className="sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
              <div className="toggle-slider" />
            </label>
            <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-dark-400'}`}>
              Annually <span className="text-gold-500 text-xs font-bold ml-1">Save 30%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tiers.map((tier, i) => (
            <div key={i} className={`rounded-2xl p-8 border transition-all relative ${tier.popular
                ? 'border-gold-500/50 bg-gradient-to-b from-gold-500/5 to-transparent shadow-xl shadow-gold-500/5'
                : 'border-dark-600 bg-dark-800'
              }`}>
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 accent-gradient text-dark-950 text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
              <p className="text-dark-400 text-sm mb-6">{tier.desc}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">${annual ? tier.priceY : tier.priceM}</span>
                <span className="text-dark-400 text-sm ml-1">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-dark-200 text-sm">
                    <Check size={16} className="text-gold-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`block text-center font-semibold py-3 rounded-full transition-all ${tier.popular
                  ? 'accent-gradient text-dark-950 hover:shadow-lg hover:shadow-gold-500/20'
                  : 'border border-dark-600 text-white hover:border-gold-500'
                }`}>
                Get Started
              </a>
              <p className="text-dark-500 text-xs text-center mt-4">Supports local payment gateways</p>
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
const steps = [
  { icon: UserPlus, title: 'Create Account', desc: 'Sign up in 2 minutes' },
  { icon: ListPlus, title: 'Add Services & Staff', desc: 'Build your menu' },
  { icon: CreditCard, title: 'Choose Subscription', desc: 'Pick your plan' },
  { icon: Rocket, title: 'Go Live', desc: 'Start receiving bookings' },
];

const Timeline = () => (
  <section className="py-24 bg-dark-900/50 border-t border-dark-600/30">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">How It Works</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Live in 4 Simple Steps.</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="text-center group">
            <div className="w-16 h-16 rounded-full border-2 border-gold-500/50 flex items-center justify-center mx-auto mb-4 group-hover:accent-gradient group-hover:border-transparent transition-all">
              <s.icon size={24} className="text-gold-500 group-hover:text-dark-950" />
            </div>
            <div className="text-gold-500 text-xs font-bold mb-2">Step {i + 1}</div>
            <h4 className="font-bold text-sm mb-1">{s.title}</h4>
            <p className="text-dark-400 text-xs">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   6. TESTIMONIALS
   ═══════════════════════════════════════════════════ */
const Testimonials = () => (
  <section className="py-24 border-t border-dark-600/30">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">Testimonials</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">Loved by Both Sides.</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* App user */}
        <div className="glass-card rounded-2xl p-8 hover:border-gold-500/30 transition-all">
          <Quote size={28} className="text-gold-500 mb-4" />
          <p className="text-lg text-dark-200 leading-relaxed mb-6 italic">
            "Easiest way to get a haircut! I just open the app, pick my barber, and I'm done. No more waiting for an hour."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full accent-gradient flex items-center justify-center text-dark-950 font-bold">R</div>
            <div>
              <p className="font-semibold">Rebwar K.</p>
              <p className="text-dark-400 text-sm">App User, Erbil</p>
            </div>
          </div>
        </div>

        {/* Partner */}
        <div className="glass-card rounded-2xl p-8 hover:border-gold-500/30 transition-all">
          <Quote size={28} className="text-gold-500 mb-4" />
          <p className="text-lg text-dark-200 leading-relaxed mb-6 italic">
            "KurdCut doubled my walk-ins! The calendar system saved us so much time and we never double-book anymore."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full accent-gradient flex items-center justify-center text-dark-950 font-bold">H</div>
            <div>
              <p className="font-semibold">Hawkar M.</p>
              <p className="text-dark-400 text-sm">Salon Owner, Sulaimani</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   7. FAQ
   ═══════════════════════════════════════════════════ */
const faqData = {
  users: [
    { q: 'Is KurdCut free to use?', a: 'Yes! The KurdCut app is completely free for customers. Download it, create an account, and start booking instantly.' },
    { q: 'How do I book an appointment?', a: 'Open the app, search for barbers or salons near you, pick a time slot, and send a booking request. You\'ll get a confirmation notification right away.' },
    { q: 'Can I cancel or reschedule?', a: 'Absolutely. You can cancel or reschedule directly in the app. We recommend doing so at least 2 hours before your appointment.' },
    { q: 'Which cities are supported?', a: 'We\'re currently live in Erbil, Sulaimani, and Duhok, with more cities launching soon across Iraq.' },
  ],
  partners: [
    { q: 'How do I list my shop?', a: 'Create a partner account, add your services and staff, choose a subscription plan, and you\'re live within minutes.' },
    { q: 'What payment methods do you accept?', a: 'We support local Iraqi payment gateways including FIB, Fastpay, and bank transfer for subscription payments.' },
    { q: 'Can I manage multiple staff members?', a: 'Yes! The Pro Salon plan supports up to 5 staff members with individual schedules and service menus.' },
    { q: 'Is there a free trial?', a: 'We offer a 14-day free trial on all plans so you can test every feature risk-free.' },
  ],
};

const FAQ = () => {
  const [tab, setTab] = useState('users');
  const [openIdx, setOpenIdx] = useState(null);

  const items = faqData[tab];

  return (
    <section className="py-24 bg-dark-900/50 border-t border-dark-600/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-8">Got Questions?</h2>

          {/* Tab switcher */}
          <div className="inline-flex bg-dark-800 rounded-full p-1 border border-dark-600">
            <button
              onClick={() => { setTab('users'); setOpenIdx(null); }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${tab === 'users' ? 'accent-gradient text-dark-950' : 'text-dark-300 hover:text-white'}`}
            >
              App Users
            </button>
            <button
              onClick={() => { setTab('partners'); setOpenIdx(null); }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${tab === 'partners' ? 'accent-gradient text-dark-950' : 'text-dark-300 hover:text-white'}`}
            >
              Business Partners
            </button>
          </div>
        </div>

        <div className="space-y-0">
          {items.map((item, i) => (
            <div key={i} className="border-b border-dark-600/50">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex justify-between items-center py-5 text-left hover:text-gold-500 transition-colors"
              >
                <span className="font-semibold pr-4">{item.q}</span>
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
const DownloadCTA = () => (
  <section id="download" className="py-24 border-t border-dark-600/30 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-[100px]" />
    </div>
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Download KurdCut.</h2>
      <p className="text-dark-300 text-lg max-w-xl mx-auto mb-10">Available on iOS and Android. Start booking your next grooming experience today.</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="#" className="border border-dark-600 rounded-xl px-6 py-3 flex items-center gap-3 hover:border-gold-500 transition-all bg-dark-800/50">
          <span className="text-2xl">🍎</span>
          <div className="text-left">
            <div className="text-dark-400 text-[10px] uppercase tracking-wider">Download on the</div>
            <div className="font-semibold">App Store</div>
          </div>
        </a>
        <a href="#" className="border border-dark-600 rounded-xl px-6 py-3 flex items-center gap-3 hover:border-gold-500 transition-all bg-dark-800/50">
          <span className="text-2xl">▶️</span>
          <div className="text-left">
            <div className="text-dark-400 text-[10px] uppercase tracking-wider">Get it on</div>
            <div className="font-semibold">Google Play</div>
          </div>
        </a>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   HOME PAGE (combines all sections)
   ═══════════════════════════════════════════════════ */
const Home = () => {
  return (
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
};

export default Home;
