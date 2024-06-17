import express from 'express';
import cors from 'cors';
import { addItemToList, items } from './controlles/items.controller';
import { createList, getListsByUserId } from './controlles/lists.controller';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.post('/list', createList);
app.get('/list/:userId', getListsByUserId);
app.post('/list/:userId/:listId', addItemToList); // TODO:  need to use userId

app.get('/items', items);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
