import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());
const PORT = 5000;

app.get('/api/message', (_req, res) => {
  res.send('Welcome to Event Desk');
});

app.post('/api/days', (req: Request, res: Response) => {
  const { from, to } = req.body;

  const remanigTimes = new Date(to).getTime() - new Date(from).getTime();

  res.status(201).json({ days: remanigTimes });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
