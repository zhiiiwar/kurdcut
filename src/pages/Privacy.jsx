import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
    const { t } = useTranslation();

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);

        // Setup fade-up animation observer
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
                    {t('privacy_title')}
                </h1>
                <p className="section-subtitle">{t('privacy_eff')}</p>
            </div>

            <div className="legal-content fade-up delay-1">
                <p>{t('privacy_p1')}</p>

                <h2>1. Information We Collect</h2>
                <p>We collect several types of information from and about users of our Platform, including:</p>
                <ul>
                    <li><strong>Personal Data:</strong> Name, email address, phone number, and location (for Customer booking accounts).</li>
                    <li><strong>Business Data:</strong> Shop name, addresses, service menus, team members, and financial transaction metadata (for Business accounts).</li>
                    <li><strong>Usage Details:</strong> IP addresses, browser information, and details of your visits to our Platform.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use information that we collect about you or that you provide to us:</p>
                <ul>
                    <li>To present our Platform and its contents to you in the highest quality.</li>
                    <li>To facilitate and manage bookings between Customers and Businesses.</li>
                    <li>To process subscription payments for Business Shop accounts securely.</li>
                    <li>To notify you about changes to our Platform or any products or services we offer.</li>
                </ul>

                <h2>3. Data Security</h2>
                <p>We have implemented world-class measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind deep-encryption firewalls.</p>

                <h2>4. Contact Information</h2>
                <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:privacy@kurdcut.com" className="btn-link">privacy@kurdcut.com</a>.</p>
            </div>
        </div>
    );
};

export default Privacy;
