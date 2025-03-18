import { Request, Response } from 'express';
import { addEventsToUserCalendar } from '../services/userService';

export const addEventsToCalendar = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { countryCode, year, holidays } = req.body;

  try {
    const holidayNames = await addEventsToUserCalendar(
      userId,
      countryCode,
      year,
      holidays,
    );
    res
      .status(201)
      .json({ message: 'Events added to calendar', events: holidayNames });
  } catch (error) {
    console.error('Error adding events to calendar:', error);
    res.status(500).json({ message: 'Failed to add events to calendar' });
  }
};
