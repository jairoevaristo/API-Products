import { Router } from 'express';

import ProductController from './controllers/productController';

const router = Router();

router.post('/products', ProductController.store);
router.get('/products', ProductController.index);

export default router;