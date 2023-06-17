import { Router } from 'express';
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventById,
} from '../controllers/events.controller.js';

const router = Router();

router.get('/events', getEvents);

router.post('/events', createEvent);

router.put('/events/:id', updateEvent);

router.delete('/events/:id', deleteEvent);

router.get(`/events/:id`, getEventById);

export default router;
