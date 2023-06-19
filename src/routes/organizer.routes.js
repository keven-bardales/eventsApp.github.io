import { Router } from 'express';
import {
  getOrganizers,
  getOrganizerById,
  createOrganizer,
  updateOrganizer,
  deleteOrganizer,
} from '../controllers/organizers.controller.js';

const router = Router();

router.get('/organizers', getOrganizers);

router.get(`/organizers/:id`, getOrganizerById);

router.post(`/organizers`, createOrganizer);

router.put(`/organizers/:id`, updateOrganizer);

router.delete(`/organizers/:id`, deleteOrganizer);

export default router;
