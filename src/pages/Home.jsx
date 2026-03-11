import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home = () => {
    const { t } = useTranslation();

    useEffect(() => {
        // Setup intersection observer for fade-up animations on load
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
        <div className="home-page">
            {/* Hero Section */}
            <section id="hero" className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="reveal-text">{t('hero_standard')}</span>
                    </h1>
                    <h1 className="hero-title secondary">
                        <span className="reveal-text serif-italic">{t('hero_grooming')}</span>
                    </h1>
                    <p className="hero-subtitle reveal-text delay-1">
                        {t('hero_subtitle')}
                    </p>
                    <div className="hero-ctas reveal-text delay-2">
                        <a href="#discover" className="btn-primary large">{t('hero_book_now')}</a>
                        <Link to="/business-subscription" className="btn-secondary large">{t('hero_partner')}</Link>
                    </div>
                </div>
                <div className="hero-imagery">
                    <div className="ambient-glow"></div>
                </div>
            </section>

            {/* Mission / Overview */}
            <section id="mission" className="mission-section section-padding">
                <div className="container">
                    <h2 className="section-title fade-up">{t('mission_title')}</h2>
                    <div className="mission-grid">
                        <p className="mission-text fade-up delay-1">
                            {t('mission_text')}
                        </p>
                        <div className="mission-stats fade-up delay-2">
                            <div className="stat">
                                <span className="stat-number">#1</span>
                                <span className="stat-label">{t('stat_platform')}</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">0</span>
                                <span className="stat-label">{t('stat_compromise')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dual Audience Section */}
            <section id="ecosystem" className="dual-ecosystem section-padding">
                <div className="container">
                    <div className="split-layout">
                        {/* Customer Side */}
                        <div className="split-pane customer-pane fade-up">
                            <span className="pane-label">{t('eco_customer_label')}</span>
                            <h3 className="pane-title">{t('eco_customer_title')}</h3>
                            <ul className="feature-list">
                                <li>{t('eco_customer_f1')}</li>
                                <li>{t('eco_customer_f2')}</li>
                                <li>{t('eco_customer_f3')}</li>
                            </ul>
                            <a href="#download" className="btn-link" dangerouslySetInnerHTML={{ __html: t('eco_customer_btn') }}></a>
                        </div>
                        
                        {/* Business Side */}
                        <div className="split-pane business-pane fade-up delay-1">
                            <span className="pane-label">{t('eco_biz_label')}</span>
                            <h3 className="pane-title">{t('eco_biz_title')}</h3>
                            <ul className="feature-list">
                                <li>{t('eco_biz_f1')}</li>
                                <li>{t('eco_biz_f2')}</li>
                                <li>{t('eco_biz_f3')}</li>
                            </ul>
                            <Link to="/business-subscription" className="btn-link" dangerouslySetInnerHTML={{ __html: t('eco_biz_btn') }}></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Showcase */}
            <section id="app" className="app-showcase section-padding">
                <div className="container text-center">
                    <h2 className="section-title fade-up">{t('app_title')}</h2>
                    <p className="section-subtitle fade-up delay-1">{t('app_subtitle')}</p>
                    
                    <div className="mockup-container fade-up delay-2">
                        <div className="mockup-frame">
                            <div className="mockup-screen bg-placeholder">
                                <div className="ui-skeleton">
                                    <div className="skel-header"></div>
                                    <div className="skel-card"></div>
                                    <div className="skel-card"></div>
                                    <div className="skel-card"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
