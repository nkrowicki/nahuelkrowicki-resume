import esTranslations from '../locales/es/translation';
import enTranslations from '../locales/en/translation';


const useGetTranslation = () => {
    // Get Language
    const lang = typeof window !== 'undefined' ? window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') : '';

    // const lang = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
    
    const data = lang === 'es' ? esTranslations : enTranslations;

    return data;
}

export default useGetTranslation;