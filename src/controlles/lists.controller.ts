import { Request, Response } from 'express';
import { create, getByUserId } from '../services/lists.service';
import { List } from '../interfaces/List';

export const createList = (req: Request, res: Response) => {
  const newList: List = create(req.body);
  res.json(newList);
};

export const getListsByUserId = (req: Request, res: Response) => {
  const lists: List[] | undefined = getByUserId(req.params.userId);
  res.json(lists);
};
