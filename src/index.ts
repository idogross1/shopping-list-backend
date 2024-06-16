import express from 'express';
import { addItemToList, items } from './controlles/items.controller';
import { createList, getListsByUserId } from './controlles/lists.controller';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/list', createList);
app.get('/list/:userId', getListsByUserId);
app.post('/list/:listId', addItemToList);

app.get('/items', items);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
