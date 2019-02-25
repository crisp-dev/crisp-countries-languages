/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import dataForCountries from "./data/countries.js";
import dataForLanguages from "./data/languages.js";

/**************************************************************************
 * FUNCTIONS
 ***************************************************************************/

var countryCodeMap = {};
var countryNameMap = {};
var languageCodeMap = {};
var languageNameMap = {};

dataForCountries.forEach(function(country) {
  countryCodeMap[country.code.toLowerCase()] = country.name;
  countryNameMap[country.name.toLowerCase()] = country.code;
});

dataForLanguages.forEach(function(language) {
  languageCodeMap[language.code.toLowerCase()] = language.name;
  languageNameMap[language.name.toLowerCase()] = language.code;
});

export const getCountryCode = function(name) {
  return countryNameMap[name.toLowerCase()];
};

export const getCountryName = function(code) {
  return countryCodeMap[code.toLowerCase()];
};

export const getLanguageCode = function(name) {
  return languageNameMap[name.toLowerCase()];
};

export const getLanguageName = function(code) {
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
