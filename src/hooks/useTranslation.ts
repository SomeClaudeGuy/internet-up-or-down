import { useLanguage } from '@/contexts/LanguageContext';
import translations, { Translations } from '@/translations';

export const useTranslation = (): Translations => {
  const { currentLanguage } = useLanguage();
  return translations[currentLanguage];
};