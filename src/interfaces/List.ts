import { Item } from './Item';

export interface List {
  _id: string;
  items: Item[];
  name: string;
  userId: string;
  date: Date;
}
