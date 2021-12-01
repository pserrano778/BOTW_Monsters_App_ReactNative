import en from './en.json'
import es from './es.json'
import I18n from 'i18n-js';

I18n.translations = {
    'es': es,
    'en': en
};
I18n.fallbacks = true;
I18n.defaultLocale='es'

export default I18n

export const changeLanguage = (lng: string) => {
    I18n.locale = lng;
}
