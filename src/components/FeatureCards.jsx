import React from 'react';

const FeatureCards = ({ language = 'ku' }) => {
  // Determine layout direction based on language
  const isRtl = language === 'ku' || language === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  // Content dictionary for translations
  const content = {
    ku: {
      card1: {
        title: "حجزکردنی خێرا",
        subtitle: "لە چەند چرکەیەکدا شوێنی خۆت لە باشترین شوێنەکان بگرە. بێ پەیوەندی، بێ چاوەڕوانی.",
      },
      card2: {
        title: "دۆزینەوەی ناوازە",
        subtitle: "بەدوای باشترین سەرتاش و ئارایشتگاکانی نزیک خۆتدا بگەڕێ کە بە وریاییەوە هەڵبژێردراون.",
      },
      card3: {
        title: "بەڕێوەبردنی خشتە",
        subtitle: "ئاگاداری کاتەکانت بە، بە ئاسانی کاتەکانت بگۆڕە، و هەرگیز حجزێک لەدەست مەدە.",
      }
    },
    ar: {
      card1: {
        title: "حجز سريع",
        subtitle: "احجز مكانك في أفضل الأماكن في ثوانٍ. بدون اتصال، بدون انتظار.",
      },
      card2: {
        title: "اكتشاف استثنائي",
        subtitle: "ابحث عن أفضل الحلاقين وصالونات التجميل القريبة منك والمختارة بعناية.",
      },
      card3: {
        title: "إدارة الجدول",
        subtitle: "تتبع وقتك، وقم بتغيير مواعيدك بسهولة، ولا تفوت أي حجز أبدًا.",
      }
    },
    en: {
      card1: {
        title: "Fast Booking",
        subtitle: "Secure your spot at the finest establishments in seconds. No calls, no waiting.",
      },
      card2: {
        title: "Discover the Best",
        subtitle: "Explore highly-rated barbers and salons near you, curated for excellence.",
      },
      card3: {
        title: "Schedule Management",
        subtitle: "Keep track of your time, easily reschedule, and never miss an appointment.",
      }
    }
  };

  const t = content[language] || content.en;

  return (
    <section className="py-20 bg-dark-900" dir={dir}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">{t.card1.title}</h3>
              <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="text-sm text-gray-300 pb-2 leading-relaxed">{t.card1.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">{t.card2.title}</h3>
              <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="text-sm text-gray-300 pb-2 leading-relaxed">{t.card2.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">{t.card3.title}</h3>
              <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="text-sm text-gray-300 pb-2 leading-relaxed">{t.card3.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
