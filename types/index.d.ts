export interface Country {
  code: string;
  name: string;
}

export interface Language {
  code: string;
  country: string;
  name: string;
  direction: string;
}

export function getCountryCode(name: string): string | void;
export function getCountryName(code: string): string | void;
export function getLanguageCode(name: string): string | void;
export function getLanguageCountry(code: string): string | void;
export function getLanguageName(code: string): string | void;
export function getLanguageDirection(code: string): string | void;

export const countries: Array<Country>;
export const languages: Array<Language>;

declare const crispCountriesLanguages: {
  getCountryCode: (name: string) => string | void;
  getCountryName: (code: string) => string | void;
  getLanguageCode: (name: string) => string | void;
  getLanguageCountry: (code: string) => string | void;
  getLanguageName: (code: string) => string | void;
  getLanguageDirection: (code: string) => string | void;

  dataForCountries: Array<Country>;
  dataForLanguages: Array<Language>;
};

export = crispCountriesLanguages;
