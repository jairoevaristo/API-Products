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

  async index(req: Request, res: Response) {
    const repository = getRepository(Product);

    const products = await repository.find();

    return res.status(200).json({ data: products });
  }

  async update(req: Request, res: Response) {
    const { name_product, price, description } = req.body;
    const { id } = req.params;

    const repository = getRepository(Product);

   const products = await repository.createQueryBuilder()
    .update(Product)
    .set({ name_product, price,  description })
    .where({ id })
    .execute();
    
    return res.status(200).send(products);
  }
  
}

export default new ProductController();