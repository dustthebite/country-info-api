import express from 'express';
import dotenv from 'dotenv';
import countryRoutes from './routes/countryRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/countries', countryRoutes);
app.use('/users', userRoutes);

export default app;
