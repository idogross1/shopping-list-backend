import { List } from '../interfaces/List';

const listsDB: List[] = [
  {
    _id: '1718719756494',
    name: 'shoppingList',
    userId: 'ncsidjnc',
    items: [],
    date: new Date('2024-06-16T08:06:25.369Z'),
  },
  {
    _id: '12ek',
    name: 'shoppingList',
    userId: 'ncsidjnc',
    items: [],
    date: new Date('2024-06-16T08:06:25.369Z'),
  },
];

export const create = (list: Omit<List, 'items' | '_id' | 'date'>): List => {
  const { name, userId } = list;
  return {
    _id: '' + Date.now(),
    name,
    userId,
    items: [],
    date: new Date(),
  };
};

export const getByUserId = (userId: string): List[] => {
  const lists: List[] = getListsByUserId(userId);
  console.log('🚀 ~ getByUserId ~ lists:', lists);
  return lists;
};

export const getByListId = (listId: string): List | undefined => {
  const list: List | undefined = getListByListId(listId);
  return list;
};

export const update = (updatedList: List): List | undefined => {
  let listIndex: number = listsDB.findIndex((l) => l._id === updatedList._id);
  listsDB[listIndex] = { ...listsDB[listIndex], ...updatedList };
  return listsDB[listIndex];
};

// DB functions
const getListsByUserId = (userId: string) => {
  const lists = listsDB.filter((list) => userId === list.userId);
  return lists;
};

const getListByListId = (listId: string) => {
  const lists = listsDB.find((list) => listId === list._id);
  return lists;
};
