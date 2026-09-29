import express from 'express';
import { healthRouter } from './routes/health';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// Trust the immediate upstream proxy for X-Forwarded-* headers.
app.set('trust proxy', 1);

app.use(express.json());

// Routes
app.use('/health', healthRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
