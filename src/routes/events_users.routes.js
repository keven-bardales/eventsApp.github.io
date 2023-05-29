import { Router } from 'express';
import {
  getEventUsers,
  createEventUser,
  updateEventUser,
  deleteEventUser,
} from '../controllers/events_users.controller.js';

const router = Router();

router.get('/event_users', getEventUsers);

router.post('/event_users', createEventUser);

router.put('/event_users/:id', updateEventUser);

router.delete('/event_users/:id', deleteEventUser);

export default router;
