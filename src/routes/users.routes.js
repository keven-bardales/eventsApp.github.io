import { Router } from 'express';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} from '../controllers/users.controllers.js';
const router = Router();

router.get('/users', res.send('Hola Mundo'));

router.get('/users/:id', getUserById);

router.post('/users', createUser);

router.patch('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

export default router;
