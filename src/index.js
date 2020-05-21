"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
var languageDirectionMap = {};

dataForCountries.forEach(function(country) {
  countryCodeMap[country.code.toLowerCase()] = country.name;
  countryNameMap[country.name.toLowerCase()] = country.code;
});

dataForLanguages.forEach(function(language) {
  languageCodeMap[language.code.toLowerCase()] = language.name;
  languageCodeMapForCountries[language.code.toLowerCase()] = language.country;
  languageNameMap[language.name.toLowerCase()] = language.code;
  languageDirectionMap[language.code.toLowerCase()] = language.direction;
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

var getLanguageDirection = function(code) {
  return languageDirectionMap[code.toLowerCase()];
};

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

exports.getCountryCode = getCountryCode;
exports.getCountryName = getCountryName;
exports.getLanguageCode = getLanguageCode;
exports.getLanguageCountry = getLanguageCountry;
exports.getLanguageName = getLanguageName;
exports.getLanguageDirection = getLanguageDirection;

exports.countries = dataForCountries;
exports.languages = dataForLanguages;

exports.default = {
  dataForCountries: dataForCountries,
  dataForLanguages: dataForLanguages
};
