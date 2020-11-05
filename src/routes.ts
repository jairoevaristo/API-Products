import { Router } from 'express';

import AuthMidddleware from './middleware/auth';

import ProductController from './controllers/productController';
import UserController from './controllers/userController';
import AuthController from './controllers/authController';

const router = Router();

router.post('/user', UserController.store);
router.post('/auth', AuthController.autenticated);

router.use(AuthMidddleware);

router.post('/products', AuthMidddleware, ProductController.store);
router.get('/products', AuthMidddleware, ProductController.index);
router.put('/products/:id', AuthMidddleware, ProductController.update);
router.delete('/products/:id', AuthMidddleware, ProductController.remove);


export default router;