import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from '../locales/en.json';
import kuTranslation from '../locales/ku.json';
import arTranslation from '../locales/ar.json';

const resources = {
  en: {
    translation: enTranslation
  },
  ku: {
    translation: kuTranslation
  },
  ar: {
    translation: arTranslation
  }
};

// Retrieve language from localStorage or default to English
const savedLanguage = localStorage.getItem('i18nextLng') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
