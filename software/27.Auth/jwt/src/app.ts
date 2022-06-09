import express, { Application } from 'express';
import routes from './routes/auth'
import router from "./routes/auth";

const app: Application = express();

app.use(express.json())
app.use('/api/auth', routes);

router.get('*', (req: express.Request, res: express.Response) => {
    res.status(404).json({ msg: "Not found" })
})

export default app;
