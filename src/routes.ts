import { Router } from 'express';

import ProductController from './controllers/productController';
import UserController from './controllers/userController';
import AuthController from './controllers/authController';

const router = Router();

router.post('/products', ProductController.store);
router.get('/products', ProductController.index);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.remove);

router.post('/user', UserController.store);
router.post('/auth', AuthController.autenticated);

export default router;