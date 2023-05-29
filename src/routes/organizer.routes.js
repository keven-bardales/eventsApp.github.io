import { Router } from 'express';
import { getOrganizers } from '../controllers/organizers.controller.js';

const router = Router();

router.get('/organizers', getOrganizers);

export default router;
