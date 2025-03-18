import express from 'express';
import {
  fetchCountries,
  fetchCountryInfo,
} from '../controllers/countryController';

const router = express.Router();

router.get('/', fetchCountries);
router.get('/:code', fetchCountryInfo);

export default router;
