import axios from 'axios';

const BASE_URL_NAGER = 'https://date.nager.at/api/v3';
const BASE_URL_COUNTRIESNOW = 'https://countriesnow.space/api/v0.1';

interface SearchData {
  country: string;
  name: string;
}

export const getAvailableCountries = async () => {
  const response = await axios.get(`${BASE_URL_NAGER}/AvailableCountries`);
  return response.data;
};

export const getCountryInfo = async (countryCode: string) => {
  const [bordersRes, populationRes, flagRes] = await Promise.all([
    axios.get(`${BASE_URL_NAGER}/CountryInfo/${countryCode}`),
    axios.get(`${BASE_URL_COUNTRIESNOW}/countries/population`),
    axios.get(`${BASE_URL_COUNTRIESNOW}/countries/flag/images`),
  ]);

  const populationData = populationRes.data.data.find(
    (c: SearchData) => c.country === bordersRes.data.commonName,
  )?.populationCounts;

  const flagURL = flagRes.data.data.find(
    (c: SearchData) => c.name === bordersRes.data.commonName,
  )?.flag;

  return {
    borders: bordersRes.data.borders,
    populationData,
    flagURL,
  };
};
