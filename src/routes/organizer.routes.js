import { Router } from 'express';
import {
  getOrganizers,
  getOrganizerById,
  createOrganizer,
  updateOrganizer,
} from '../controllers/organizers.controller.js';

const router = Router();

router.get('/organizers', getOrganizers);

router.get(`/organizers/:id`, getOrganizerById);

router.post(`/organizers`, createOrganizer);

router.put(`/organizers/:id`, updateOrganizer);

export default router;
