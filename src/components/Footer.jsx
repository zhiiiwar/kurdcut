import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();
    const location = useLocation();
    
    // Smooth scroll for anchor links if on home page
    const handleAnchorLink = (e, targetHash) => {
        if (location.pathname === '/') {
            e.preventDefault();
            const el = document.querySelector(targetHash);
            if(el) {
                window.scrollTo({
                    top: el.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <h2>KURD CUT</h2>
                    <p>{t('footer_slogan')}</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>{t('footer_platform')}</h4>
                        <a href="/#discover" onClick={(e) => handleAnchorLink(e, '#discover')}>{t('nav_discover')}</a>
                        <Link to="/business-subscription">{t('nav_business')}</Link>
                    </div>
                    <div className="link-group">
                        <h4>{t('footer_company')}</h4>
                        <Link to="/terms">{t('footer_terms')}</Link>
                        <Link to="/privacy">{t('footer_privacy')}</Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p dangerouslySetInnerHTML={{ __html: t('footer_copyright') }}></p>
            </div>
        </footer>
    );
};

export default Footer;
