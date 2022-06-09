import dotenv  from 'dotenv';
import app from './app';
import { connectDatabase } from "./database";

dotenv.config();
const port = process.env.PORT;

connectDatabase();
app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
});
