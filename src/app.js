import express from 'express';
import indexRoutes from './routes/index.routes.js';
import usersRoutes from './routes/users.routes.js';
import eventsRoutes from './routes/events.routes.js';
import categoriesRoutes from './routes/categories.routes.js';
import eventOrganizersRoutes from './routes/events_organizers.routes.js';
import eventUsersRoutes from './routes/events_users.routes.js';
import locationsRoutes from './routes/locations.routes.js';
import orgarnizerRoutes from './routes/organizer.routes.js';
import cors from 'cors';
import morgan from 'morgan';
const app = express();
const apiVersion = '/api/v1';

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.use(indexRoutes);
app.use(apiVersion, usersRoutes);
app.use(apiVersion, eventsRoutes);
app.use(apiVersion, categoriesRoutes);
app.use(apiVersion, eventOrganizersRoutes);
app.use(apiVersion, eventUsersRoutes);
app.use(apiVersion, locationsRoutes);
app.use(apiVersion, orgarnizerRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found',
  });
});

export default app;
