import { NextFunction, Request, Response } from 'express';
import { getItems } from '../models/items.model';
import { Item } from '../interfaces/Item';

export const items = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const itemsList: Item[] = getItems();
    return res.json(itemsList);
  } catch (err) {
    return next(err);
  }
};
