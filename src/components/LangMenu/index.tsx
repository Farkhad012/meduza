import React, {
  FC,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
// import cn from 'classnames';

// import { flagBrazilIcon } from 'assets/images';
import { LocaleKey, localeNames } from 'constants/';

// import { Image } from 'components';

import { LanguageType, selectLanguage } from './menu';

import './styles.scss';

interface ILangMenu {
  isLabel?: boolean;
  classNameBox?: "account-lang-button" | "";
  classNameMenu?: string;
  classNameContainer?: string;
  langBanner?: string;
  onChangeLangBanner?: (v: string) => void;
  isBrazil?: boolean;
}

export const LangMenu: FC<ILangMenu> = memo(({
  onChangeLangBanner, classNameBox
}) => {
  const { i18n } = useTranslation();
  const currentLanguage = selectLanguage.find(({ value }) => value === i18n.language);
  const [language, setLanguage] = useState(currentLanguage || selectLanguage[0]);
  const [isOpenLang, setIsOpenLang] = useState(false);

  const languageAdditional = selectLanguage;

  const changeLanguage = useCallback((lang: LanguageType) => {
    setLanguage(lang);
    i18n.changeLanguage(lang.value);
    localStorage.setItem('lng', lang.value);

    setIsOpenLang(!isOpenLang);
  }, [isOpenLang, i18n, onChangeLangBanner]);

  return (
    <div
      className={`lang_controls_lang ${classNameBox === "account-lang-button" ?  classNameBox : ""}`}
    >
      <button
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onClick={changeLanguage}
        className={`header__button-round`}
      >
        {language.label}
      </button>
      {isOpenLang && (
        <div
          className="lang_controls_menu"
        >
          {languageAdditional.map((lang) => (
            <button
              key={lang.value}
              onClick={() => changeLanguage(lang)}
              className="header__button-round"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});
