declare namespace CrispCountriesLanguages {
  interface Country {
    code: string;
    name: string;
  }

  interface Language {
    code: string;
    country: string;
    name: string;
    direction: string;
  }

  type Countries = { [code: string]: Country };
  type Languages = { [code: string]: Language };

  function getCountryCode(name: string): string | void;
  function getCountryName(code: string): string | void;
  function getLanguageCode(name: string): string | void;
  function getLanguageCountry(code: string): string | void;
  function getLanguageName(code: string): string | void;
  function getLanguageDirection(code: string): string | void;

  const countries: Countries;
  const languages: Languages;
}

export as namespace CrispCountriesLanguages;
