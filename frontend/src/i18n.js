import { createI18n } from 'vue-i18n';
import en from './locales/en.js';
import hi from './locales/hi.js';

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    hi
  },
  globalInjection: true,
  compositionOnly: false
});

export default i18n;
