import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';

const DataDeletion = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className="text-center mb-12 fade-up">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white">{t('dd_title')}</h1>
          {t('dd_eff') && <p className="text-dark-400 text-sm">{t('dd_eff')}</p>}
        </div>

        <div className="space-y-8 text-dark-200 leading-relaxed fade-up delay-1 visible">
          <p>{t('dd_p1')}</p>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">{t('dd_h1')}</h2>
            <p className="mb-3">{t('dd_h1_intro')}</p>
            <ul className="list-disc list-inside space-y-4 ps-2 text-dark-300">
              <li>{t('dd_h1_li1')}</li>
              <li>{t('dd_h1_li2')}</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">{t('dd_h2')}</h2>
            <p className="mb-3">{t('dd_h2_intro')}</p>
            <ul className="list-disc list-inside space-y-4 ps-2 text-dark-300">
              <li>{t('dd_h2_li1')}</li>
              <li>{t('dd_h2_li2')}</li>
              <li>{t('dd_h2_li3')}</li>
            </ul>
          </div>

          <div className="pt-6">
            <a 
              href="mailto:support@kurdcut.com?subject=Data Deletion Request"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-xl transition-colors"
            >
              {t('dd_btn')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DataDeletion;
