import { Router } from 'express';
import {
  getLocations,
  getLocationById,
  createLocation,
  deleteLocation,
  updateLocation,
} from '../controllers/locations.controller.js';

const router = Router();

router.get('/locations', getLocations);

router.get(`/locations/:id`, getLocationById);

router.post(`/locations`, createLocation);

router.delete(`/locations/:id`, deleteLocation);

router.put(`/locations/:id`, updateLocation);

export default router;
