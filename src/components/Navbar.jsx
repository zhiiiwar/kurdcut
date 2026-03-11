import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    
    // We get the lang from translation metadata or current language
    const currentLang = i18n.language;

    const handleLangChange = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
    };

    // Add scroll effect similar to original main.js
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar && location.pathname === '/') {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Initial check
        handleScroll();

        // If not on home page, add scrolled class immediately (like original EJS setup for legal pages)
        const navbar = document.querySelector('.navbar');
        if (navbar && location.pathname !== '/') {
            navbar.classList.add('scrolled');
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    return (
        <header className={`navbar ${location.pathname === '/' ? 'hidden-onload' : 'scrolled'}`}>
            <div className="navbar-container">
                <Link to="/" className="brand-logo">KURD CUT</Link>
                
                {/* Only show full nav links on Home or if preserving from original */}
                {location.pathname === '/' ? (
                    <nav className="nav-links">
                        <a href="#discover" className="nav-link" data-lang={currentLang}>{t('nav_discover')}</a>
                        <Link to="/business-subscription" className="nav-link" data-lang={currentLang}>{t('nav_business')}</Link>
                        <a href="#app" className="nav-link" data-lang={currentLang}>{t('nav_app')}</a>
                    </nav>
                ) : (
                    <div className="nav-actions" style={{ marginLeft: 'auto', marginRight: 'var(--spacing-md)' }}>
                         <Link to="/" className="btn-secondary">{t('nav_return', 'Return Home')}</Link>
                    </div>
                )}

                <div className="nav-actions">
                    <div className="lang-selector">
                        <button 
                            className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`} 
                            onClick={() => handleLangChange('en')}
                        >EN</button>
                        <button 
                            className={`lang-btn ${currentLang === 'ku' ? 'active' : ''}`} 
                            onClick={() => handleLangChange('ku')}
                        >KU</button>
                        <button 
                            className={`lang-btn ${currentLang === 'ar' ? 'active' : ''}`} 
                            onClick={() => handleLangChange('ar')}
                        >AR</button>
                    </div>
                    {location.pathname === '/' && (
                        <a href="#download" className="btn-primary" data-lang={currentLang}>{t('nav_get_app')}</a>
                    )}
                </div>
                
                <button className="mobile-menu-toggle">
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
