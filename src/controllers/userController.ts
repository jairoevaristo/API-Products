import { Request, Response } from 'express';
import { getRepository } from 'typeorm'; 

import User from '../models/User';

class UserController {
  async store(req: Request, res: Response) {
    const { email, password } = req.body;
    const repository = getRepository(User);

    const userExit = await repository.findOne({ email })

    if (userExit) {
      return res.status(409).send('E-mail exists');
    }

    const user = await repository.create({ email, password });
    await repository.save(user);

    return res.status(201).send(user);
  }
}

export default new UserController()