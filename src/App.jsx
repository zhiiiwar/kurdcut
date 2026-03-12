import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Subscription from './pages/Subscription'
import DataDeletion from './pages/DataDeletion'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const dir = (i18n.language === 'ku' || i18n.language === 'ar') ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
    document.documentElement.setAttribute('lang', i18n.language)
  }, [i18n.language])

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/business-subscription" element={<Subscription />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
