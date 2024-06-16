import { NextFunction, Request, Response } from 'express';
import { getItems, addToList } from '../services/items.service';
import { Item } from '../interfaces/Item';

export const items = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const itemsList: Item[] = getItems();
    return res.json(itemsList);
  } catch (err) {
    return next(err);
  }
};

export const addItemToList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { listId } = req.params;
    const { name, category } = req.body;
    const response = addToList(listId, name, category);
    console.log('🚀 ~ addItemToList ~ response:', response);
    return res.status(200).send();
  } catch (err) {
    return next(err);
  }
};
