const {Client } = require('pg');

async function getConnection(){


    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'admin123',
        database: 'my_store'
    })

    await client.connect();
    return client;
}

modulle.exports = getConnection;