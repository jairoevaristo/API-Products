import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 

import User from '../models/User';

class AuthController {
 async autenticated(req: Request, res: Response) {
    const { email, password } = req.body;
    const repository = getRepository(User);

    const userExist = await repository.findOne({ email });

    if (!userExist) {
      return res.status(402).send('E-mail invalid');
    }

    const isCorrectPassword = await bcrypt.compare(password, userExist.password);

    if (!isCorrectPassword) {
      return res.status(402).send('Password invalid');
    }

    const token = jwt.sign({ id: userExist.id }, 'secret_key', {
      expiresIn: '1d',
    });

    return res.status(200).json({
      userExist,
      token,
    });
  }
};

export default new AuthController();