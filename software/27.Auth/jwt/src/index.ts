import app from './app'
import './database'

require('dotenv').config()
const port = process.env.PORT;

function main() {
    app.listen(port, () => {
        console.log(`Express is listening at http://localhost:${port}`);
    });
}

main();