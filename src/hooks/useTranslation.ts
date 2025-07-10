import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/index';

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
  
  // Return the full translation object for the current language
  return translations[currentLanguage];
};