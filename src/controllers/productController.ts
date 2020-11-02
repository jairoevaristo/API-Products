import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import Product from '../models/Product';

class ProductController {
  async store(req: Request, res: Response) {
    const { name_product, price, description } = req.body;
    const repository = getRepository(Product);

    const product = await repository.create({ name_product, price, description });
    await repository.save(product);

    return res.status(201).send(product);
  }
}

export default new ProductController();