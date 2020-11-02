import { Router } from 'express';

import ProductController from './controllers/productController';

const router = Router();

router.post('/products', ProductController.store);
router.get('/products', ProductController.index);
router.put('/products/:id', ProductController.update);

export default router;