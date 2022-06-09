import mongo from 'mongoose';
import { checkEnvValue } from "./utils/checks";

export function connectDatabase() {
    checkMongoEnv()
    mongo.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`, {
        dbName: process.env.MONGO_DATABASE,
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASSWORD,
        connectTimeoutMS: 100000
    })
        .then(() => console.log('MongoDB connected'))
        .catch(err => {
            console.error(err)
            process.exit(1)
        });
}

function checkMongoEnv() {
    const host: string | undefined = process.env.MONGO_HOST;
    const port: string | undefined = process.env.MONGO_PORT;
    const database: string | undefined = process.env.MONGO_DATABASE;
    const user: string | undefined = process.env.MONGO_USER;
    const password: string | undefined = process.env.MONGO_PASSWORD;

    checkEnvValue("MONGO_HOST", host);
    checkEnvValue("MONGO_PORT", port);
    checkEnvValue("MONGO_DATABASE", database);
    checkEnvValue("MONGO_USER", user);
    checkEnvValue("MONGO_PASSWORD", password);

    const num: number = parseInt(process.env.MONGO_PORT as string);

    if (isNaN(num)) {
        console.error('MONGO_PORT is not a number');
        process.exit(1);
    }
}
