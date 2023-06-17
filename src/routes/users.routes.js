import { Router } from 'express';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  authUser,
} from '../controllers/users.controllers.js';
const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUserById);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

router.post(`/auth`, authUser);

export default router;
