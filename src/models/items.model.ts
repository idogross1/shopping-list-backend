import { Item } from '../interfaces/Item';

export const getItems = (): Item[] => {
  return [
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
};
