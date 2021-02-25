require('dotenv').config();
const api = require('./api');
const db = require('./database');

const PORT = process.env.PORT || 9000;

const isDatabaseConnectionOk = async () => {
    console.log(`Checking database connection...`);
    try {
        await db.authenticate();
        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
};

const init = async () => {
    await isDatabaseConnectionOk();

    db.sync()
        .then(() => {
            api.listen(PORT, () =>
                console.log(`Server now listening on port ${PORT}`)
            );
        })
        .catch((error) => console.log(error.message));
};

init();
