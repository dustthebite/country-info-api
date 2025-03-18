import express from 'express';
import { addEventsToCalendar } from '../controllers/userController';

const router = express.Router();

router.post('/:userId/calendar/holidays', addEventsToCalendar);

export default router;
