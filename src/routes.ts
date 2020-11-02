import { Router } from 'express';

import productController from './controllers/productController';

const router = Router();

router.post('/products', productController.store);

export default router;