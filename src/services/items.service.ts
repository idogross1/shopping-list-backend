import { Item } from '../interfaces/Item';
import { List } from '../interfaces/List';
import { getByListId } from './lists.service';

const itemsDB = [
  {
    _id: '1',
    name: 'milk',
    category: 'dairy',
  },
  {
    _id: '2',
    name: 'apple',
    category: 'fruit',
  },
];

export const getItems = (): Item[] => {
  const items: Item[] = getAllItems();
  return items;
};

export const addToList = (listId: string, name: string, category: string) => {
  const list: List | undefined = getByListId(listId);
  const item = {
    _id: '4',
    name,
    category,
    date: new Date(),
  };
  // TODO: add error handling for if list is not find
  list?.items.push(item);
  // TODO: add status if failed};
};
// DB functions

const getAllItems = () => {
  return itemsDB;
};
