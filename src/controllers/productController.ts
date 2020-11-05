import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import Product from '../models/Product';
import User from '../models/User';

interface UserDetails {
  id: number;
  email: string;
  password: string;
}

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
    const repositoryUser = getRepository(User);

    const products = await repository.find();
    const user = await repositoryUser.findOne(req.userId);

    const { email } = user as UserDetails;

    return res.status(200).json({ data: products, userAcitve: email });
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

  async remove(req: Request, res: Response) {
    const { id } = req.params;
    const repository = getRepository(Product);

    const products = await repository.createQueryBuilder()
    .delete()
    .from(Product)
    .where({ id })
    .execute();

    return res.status(200).send(products);
  }
  
}

export default new ProductController();