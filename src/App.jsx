import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Subscription from './pages/Subscription'

// We will also import the global CSS here so Vite processes it properly
import '../public/css/styles.css'

function App() {
  const { i18n } = useTranslation();

  // Effect to update HTML dir and lang attributes when language changes
  useEffect(() => {
    // Current active language (e.g. 'en', 'ku', 'ar')
    const currentLang = i18n.language;
    
    // Safely attempt to read the 'dir' and 'lang' from the translation file itself
    // We specified these in en.json, ku.json, and ar.json
    const dir = i18n.t('dir', { defaultValue: 'ltr' });
    const htmlLang = i18n.t('lang', { defaultValue: currentLang });

    document.documentElement.dir = dir;
    document.documentElement.lang = htmlLang;
  }, [i18n.language]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/business-subscription" element={<Subscription />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
