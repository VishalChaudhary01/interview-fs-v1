import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());
const PORT = 5000;

app.get('/api/message', (_req, res) => {
  res.send('Welcome to Event Desk');
});

app.post('/api/days', (req: Request, res: Response) => {
  const { from, to } = req.body;

  const differenceInDays =
    (new Date(to).getTime() - new Date(from).getTime()) / (1000 * 60 * 60 * 24);

  res.status(201).json({ days: differenceInDays });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
