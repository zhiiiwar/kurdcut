import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Privacy = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  console.log("Privacy component rendered");

  return (
    <section className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className="text-center mb-12 fade-up">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white">{t('privacy_title')}</h1>
          <p className="text-dark-400 text-sm">{t('privacy_eff')}</p>
        </div>

        <div className="space-y-8 text-dark-200 leading-relaxed fade-up delay-1 visible">
          <p>{t('privacy_p1')}</p>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">{t('privacy_h1')}</h2>
            <p className="mb-3">{t('privacy_h1_intro')}</p>
            <ul className="list-disc list-inside space-y-2 ps-2 text-dark-300">
              <li>{t('privacy_h1_li1')}</li>
              <li>{t('privacy_h1_li2')}</li>
              <li>{t('privacy_h1_li3')}</li>
              <li>{t('privacy_h1_li4')}</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">{t('privacy_h2')}</h2>
            <p className="mb-3">{t('privacy_h2_intro')}</p>
            <ul className="list-disc list-inside space-y-2 ps-2 text-dark-300">
              <li>{t('privacy_h2_li1')}</li>
              <li>{t('privacy_h2_li2')}</li>
              <li>{t('privacy_h2_li3')}</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">{t('privacy_h3')}</h2>
            <p>{t('privacy_h3_p')}</p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">{t('privacy_h4')}</h2>
            <p>
              {t('privacy_h4_p')}{' '}
              <a href={`mailto:${t('privacy_h4_email')}`} className="text-gold-500 hover:text-gold-400 transition-colors underline underline-offset-4">
                {t('privacy_h4_email')}
              </a>
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Privacy;
