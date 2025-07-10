import { useLanguage } from '@/contexts/LanguageContext';
import translations, { Translations } from '@/translations/index';

export const useTranslation = (): Translations => {
  const { currentLanguage } = useLanguage();
  return translations[currentLanguage];
};