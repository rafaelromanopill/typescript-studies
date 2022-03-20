import { Response, Request, NextFunction } from "express";
import { books } from '../models/books';

export const handler = async (req: Request, res: Response, next: NextFunction) => {
  try {
      res.status(201).json({
        message: "deu boa"
      });
    } catch (error) {
      return res.status(400).json({
				code: 'Error',
				message: 'Something went wrong',
				err: error,
			})
    }
};
