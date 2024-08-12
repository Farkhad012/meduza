import { LocaleKey, localeNames } from 'constants/';


export type LanguageType = {
  value: LocaleKey;
  label: string;
};

export const selectLanguage: LanguageType[] = [
  {
    label: localeNames.en,
    value: LocaleKey.en,
  },
  {
    label: localeNames.ru,
    value: LocaleKey.ru,
  },
  {
    label: localeNames.cn,
    value: LocaleKey.cn,
  },  
];
