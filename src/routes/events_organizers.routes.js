import { Router } from 'express';
import {
  getEventOrganizers,
  createEventOrganizer,
  updateEventOrganizer,
  deleteEventOrganizer,
} from '../controllers/events_organizers.controller.js';

const router = Router();

router.get('/event_organizers', getEventOrganizers);

router.post('/event_organizers', createEventOrganizer);

router.put('/event_organizers/:id', updateEventOrganizer);

router.delete('/event_organizers/:id', deleteEventOrganizer);

export default router;
