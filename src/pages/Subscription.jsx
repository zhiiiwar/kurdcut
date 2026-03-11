import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Subscription = () => {
    const { t } = useTranslation();

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        setTimeout(() => {
            document.querySelectorAll('.fade-up').forEach(el => {
                observer.observe(el);
            });
        }, 100);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="container">
            <div className="subscription-header fade-up">
                <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                    {t('sub_hero_1')}
                </h1>
                <h2 className="hero-title secondary">
                    <span className="serif-italic" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                        {t('sub_hero_2')}
                    </span>
                </h2>
            </div>

            <p className="intro-text text-center fade-up delay-1">
                {t('sub_intro')}
            </p>

            <div className="benefits-grid fade-up delay-2">
                <div className="benefit-card">
                    <h3 className="benefit-title">{t('sub_b1_title')}</h3>
                    <p className="benefit-desc">{t('sub_b1_desc')}</p>
                </div>
                <div className="benefit-card">
                    <h3 className="benefit-title">{t('sub_b2_title')}</h3>
                    <p className="benefit-desc">{t('sub_b2_desc')}</p>
                </div>
                <div className="benefit-card">
                    <h3 className="benefit-title">{t('sub_b3_title')}</h3>
                    <p className="benefit-desc">{t('sub_b3_desc')}</p>
                </div>
            </div>

            <div className="contact-box fade-up delay-1" style={{ marginBottom: 'var(--spacing-xxl)' }}>
                <h2 className="contact-title">{t('sub_contact_title')}</h2>
                <p className="contact-desc">
                    {t('sub_contact_desc')}
                </p>
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="mailto:partnerships@kurdcut.com" className="btn-primary large">{t('sub_btn_email')}</a>
                    <a href="tel:+1234567890" className="btn-secondary large">{t('sub_btn_call')}</a>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
