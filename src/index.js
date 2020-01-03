/**************************************************************************
 * IMPORTS
 ***************************************************************************/

var dataForCountries = require("./data/countries.js");
var dataForLanguages = require("./data/languages.js");

/**************************************************************************
 * FUNCTIONS
 ***************************************************************************/

var countryCodeMap = {};
var countryNameMap = {};
var languageCodeMap = {};
var languageCodeMapForCountries = {};
var languageNameMap = {};

dataForCountries.forEach(function(country) {
  countryCodeMap[country.code.toLowerCase()] = country.name;
  countryNameMap[country.name.toLowerCase()] = country.code;
});

dataForLanguages.forEach(function(language) {
  languageCodeMap[language.code.toLowerCase()] = language.name;
  languageCodeMapForCountries[language.code.toLowerCase()] = language.country;
  languageNameMap[language.name.toLowerCase()] = language.code;
});

var getCountryCode = function(name) {
  return countryNameMap[name.toLowerCase()];
};

var getCountryName = function(code) {
  return countryCodeMap[code.toLowerCase()];
};

var getLanguageCode = function(name) {
  return languageNameMap[name.toLowerCase()];
};

var getLanguageCountry = function(code) {
  return languageCodeMapForCountries[code.toLowerCase()];
};

var getLanguageName = function(code) {
  return languageCodeMap[code.toLowerCase()];
};

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

module.exports.getCountryCode = getCountryCode;
module.exports.getCountryName = getCountryName;
module.exports.getLanguageCode = getLanguageCode;
module.exports.getLanguageCountry = getLanguageCountry;
module.exports.getLanguageName = getLanguageName;

module.exports.countries = dataForCountries;
module.exports.languages = dataForLanguages;
