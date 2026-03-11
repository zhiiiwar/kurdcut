import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home = () => {
    const { t } = useTranslation();
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    useEffect(() => {
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

    const faqs = [
        { q: t('faq_q1'), a: t('faq_a1') },
        { q: t('faq_q2'), a: t('faq_a2') },
        { q: t('faq_q3'), a: t('faq_a3') },
        { q: t('faq_q4'), a: t('faq_a4') },
        { q: t('faq_q5'), a: t('faq_a5') },
    ];

    return (
        <div className="home-page">
            {/* ── Hero ── */}
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
                        <a href="#download" className="btn-accent large">{t('hero_book_now')}</a>
                        <Link to="/business-subscription" className="btn-secondary large">{t('hero_partner')}</Link>
                    </div>
                </div>
                <div className="hero-imagery">
                    <div className="ambient-glow"></div>
                </div>
            </section>

            {/* ── Stats Strip ── */}
            <section className="stats-strip">
                <div className="container">
                    <div className="stats-grid fade-up">
                        <div className="stat">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">{t('stats_barbers')}</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">10K+</span>
                            <span className="stat-label">{t('stats_bookings')}</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">{t('stats_cities')}</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">4.9</span>
                            <span className="stat-label">{t('stats_rating')}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mission / Overview ── */}
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

            {/* ── How It Works ── */}
            <section id="discover" className="how-it-works section-padding">
                <div className="container text-center">
                    <h2 className="section-title fade-up">{t('hiw_title')}</h2>
                    <p className="section-subtitle fade-up delay-1">{t('hiw_subtitle')}</p>
                    <div className="steps-grid">
                        <div className="step-card fade-up">
                            <span className="step-icon">🔍</span>
                            <span className="step-number">1</span>
                            <h3>{t('hiw_step1_title')}</h3>
                            <p>{t('hiw_step1_desc')}</p>
                        </div>
                        <div className="step-card fade-up delay-1">
                            <span className="step-icon">📅</span>
                            <span className="step-number">2</span>
                            <h3>{t('hiw_step2_title')}</h3>
                            <p>{t('hiw_step2_desc')}</p>
                        </div>
                        <div className="step-card fade-up delay-2">
                            <span className="step-icon">✨</span>
                            <span className="step-number">3</span>
                            <h3>{t('hiw_step3_title')}</h3>
                            <p>{t('hiw_step3_desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Dual Audience ── */}
            <section id="ecosystem" className="dual-ecosystem section-padding">
                <div className="container">
                    <div className="split-layout">
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

            {/* ── Testimonials ── */}
            <section className="testimonials-section section-padding">
                <div className="container text-center">
                    <h2 className="section-title fade-up">{t('test_title')}</h2>
                    <p className="section-subtitle fade-up delay-1">{t('test_subtitle')}</p>
                    <div className="testimonials-grid">
                        <div className="testimonial-card fade-up">
                            <div className="testimonial-stars">★★★★★</div>
                            <blockquote>{t('test_1_quote')}</blockquote>
                            <div className="testimonial-author">
                                <div className="author-avatar">A</div>
                                <div className="author-info">
                                    <strong>{t('test_1_name')}</strong>
                                    <span>{t('test_1_role')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card fade-up delay-1">
                            <div className="testimonial-stars">★★★★★</div>
                            <blockquote>{t('test_2_quote')}</blockquote>
                            <div className="testimonial-author">
                                <div className="author-avatar">S</div>
                                <div className="author-info">
                                    <strong>{t('test_2_name')}</strong>
                                    <span>{t('test_2_role')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card fade-up delay-2">
                            <div className="testimonial-stars">★★★★★</div>
                            <blockquote>{t('test_3_quote')}</blockquote>
                            <div className="testimonial-author">
                                <div className="author-avatar">D</div>
                                <div className="author-info">
                                    <strong>{t('test_3_name')}</strong>
                                    <span>{t('test_3_role')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── App Showcase ── */}
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

            {/* ── FAQ ── */}
            <section className="faq-section section-padding">
                <div className="container text-center">
                    <h2 className="section-title fade-up">{t('faq_title')}</h2>
                    <p className="section-subtitle fade-up delay-1">{t('faq_subtitle')}</p>
                    <div className="faq-list fade-up delay-2">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`}>
                                <button className="faq-question" onClick={() => toggleFaq(i)}>
                                    <span>{faq.q}</span>
                                    <span className="faq-icon">+</span>
                                </button>
                                <div className="faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Download CTA ── */}
            <section id="download" className="download-cta section-padding">
                <div className="container text-center download-content">
                    <h2 className="section-title fade-up">{t('dl_title')}</h2>
                    <p className="section-subtitle fade-up delay-1">{t('dl_subtitle')}</p>
                    <div className="store-badges fade-up delay-2">
                        <a href="#" className="store-badge">
                            <span className="store-badge-icon">🍎</span>
                            <div className="store-badge-text">
                                <small>{t('dl_available')}</small>
                                <strong>App Store</strong>
                            </div>
                        </a>
                        <a href="#" className="store-badge">
                            <span className="store-badge-icon">▶️</span>
                            <div className="store-badge-text">
                                <small>{t('dl_get_it')}</small>
                                <strong>Google Play</strong>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
