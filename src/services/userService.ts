import axios from 'axios';
import User from '../models/User';

interface Holiday {
  name: string;
}

export const fetchHolidays = async (
  countryCode: string,
  year: number,
  holidays: string[],
) => {
  const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`;
  const response = await axios.get(url);

  return response.data.filter((holiday: { name: string }) =>
    holidays.includes(holiday.name),
  );
};

export const addEventsToUserCalendar = async (
  userId: string,
  countryCode: string,
  year: number,
  holidays: string[],
) => {
  const selectedHolidays = await fetchHolidays(countryCode, year, holidays);
  const holidayNames = selectedHolidays.map((holiday: Holiday) => holiday.name);

  let user = await User.findOne({ userId });

  if (!user) {
    user = new User({ userId, events: [{ countryCode, year, holidayNames }] });
  } else {
    user.events.push({ countryCode, year, holidayNames });
  }

  await user.save();
  return holidayNames;
};
