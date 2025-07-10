import { useLanguage } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { currentLanguage, setLanguage, languages } = useLanguage();
  
  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <Select value={currentLanguage} onValueChange={setLanguage}>
        <SelectTrigger className="w-auto border-none bg-transparent hover:bg-accent/50 transition-colors">
          <SelectValue>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{currentLang?.flag}</span>
              <span className="hidden sm:inline text-sm">{currentLang?.name}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languages.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              <div className="flex items-center space-x-2">
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;