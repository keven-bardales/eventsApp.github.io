import { Router } from 'express';
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/categories.controller.js';

const router = Router();

router.get('users/categories', getCategories);

router.post('users/categories', createCategory);

router.put('users/categories/:id', updateCategory);

router.delete('users/categories/:id', deleteCategory);

export default router;
