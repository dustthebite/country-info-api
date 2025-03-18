import { Request, Response } from 'express';
import {
  getAvailableCountries,
  getCountryInfo,
} from '../services/countryService';

export const fetchCountries = async (req: Request, res: Response) => {
  try {
    const countries = await getAvailableCountries();
    res.json(countries);
  } catch {
    res.status(500).json({ error: 'Error fetching countries' });
  }
};

export const fetchCountryInfo = async (req: Request, res: Response) => {
  try {
    const countryInfo = await getCountryInfo(req.params.code);
    res.json(countryInfo);
  } catch {
    res.status(500).json({ error: 'Error fetching country details' });
  }
};
