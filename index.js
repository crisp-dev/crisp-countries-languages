/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import dataForCountries from "./data/countries.js";
import dataForLanguages from "./data/languages.js";

/**************************************************************************
 * FUNCTIONS
 ***************************************************************************/

var languageNameMap = {};
var languageCodeMap = {};

dataForLanguages.forEach(function(language) {
  languageCodeMap[language.code.toLowerCase()] = language.name;
  languageNameMap[language.name.toLowerCase()] = language.code;
});

export const getLanguageCode = function getLanguageCode(name) {
  return languageNameMap[name.toLowerCase()];
};

export const getLanguageName = function getLanguageNames(code) {
  return languageCodeMap[code.toLowerCase()];
};

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export default {
  dataForCountries,
  dataForLanguages
};

export const countries = dataForCountries;
export const languages = dataForLanguages;
