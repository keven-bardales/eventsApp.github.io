import { Router } from 'express';
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
} from '../controllers/categories.controller.js';

const router = Router();

router.get('/categories', getCategories);

router.get('/categories/:id', getCategoryById);

router.post('/categories', createCategory);

router.put('/categories/:id', updateCategory);

router.delete('/categories/:id', deleteCategory);

export default router;
