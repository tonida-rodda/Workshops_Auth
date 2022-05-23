import express, { Application } from 'express';
import routes from './routes/auth'

const app: Application = express();

app.use(express.json())
app.use('/api/auth', routes);

export default app;