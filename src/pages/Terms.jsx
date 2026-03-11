import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Terms = () => {
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
            <div className="legal-header text-center fade-up">
                <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                    {t('terms_title')}
                </h1>
                <p className="section-subtitle">{t('terms_eff')}</p>
            </div>

            <div className="legal-content fade-up delay-1">
                <p>{t('terms_p1')}</p>

                <h2>1. User Accounts & Customer Usage</h2>
                <p>The Kurd Cut app is completely free for Customers. As a Customer, you agree to:</p>
                <ul>
                    <li>Provide accurate information during account registration.</li>
                    <li>Show up for appointments requested through the application, or cancel them with sufficient notice directly in the app.</li>
                    <li>Respect the professionals and business shops you book with.</li>
                </ul>

                <h2>2. Business Shop Obligations</h2>
                <p>Business Shops operate on a premium monthly subscription basis. By operating a business account, you agree to:</p>
                <ul>
                    <li>Only offer legitimate grooming, hair, nail, and beauty services.</li>
                    <li>Maintain a high standard of professional service befitting the Kurd Cut ecosystem.</li>
                    <li>Promptly accept or reject incoming booking requests to ensure excellent customer experience.</li>
                    <li>Pay the monthly or annual subscription fees as agreed upon during your manual onboarding process with the Kurd Cut admin team.</li>
                </ul>

                <h2>3. Service Reliability</h2>
                <p>While we strive to provide a world-class, uninterrupted platform, Kurd Cut does not guarantee that the Services will function without disruption, delay, or errors. We reserve the right to modify or discontinue features of the platform at any time.</p>

                <h2>4. Disputes & Liability</h2>
                <p>Kurd Cut acts solely as a booking and discovery facilitator between Customers and Business Shops. We are not liable for the quality of services provided by the shops, nor any disputes arising between Customers and Business owners regarding payments rendered at the shop.</p>
                
                <h2>5. Contact Information</h2>
                <p>For inquiries regarding these Terms of Service, contact us at: <a href="mailto:legal@kurdcut.com" className="btn-link">legal@kurdcut.com</a>.</p>
            </div>
        </div>
    );
};

export default Terms;
