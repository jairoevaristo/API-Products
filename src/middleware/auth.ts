import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface Payload {
  id: number;
  iat: number;
  exp: number;
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(402).send('Token not provider');
  }

  const token = authorization.replace('Bearer', '').trim();

  const data = await jwt.verify(token, 'secret_key');
  
  try {
    const { id } = data as Payload;

    req.userId = id;

    return next();
  } catch {
    return res.status(409).send();
  }
}