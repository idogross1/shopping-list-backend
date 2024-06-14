import express, { NextFunction, Request, Response } from 'express';
import { items } from './controlles/items.controller';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Shopping List App!');
});

app.post('/list', (req: Request, res: Response) => {
  res.send('create list');
});

app.get('/items', items);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
