const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db',
    });

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'hacktheplanet',
        database: 'todoagain_db',
    });
};

    // Start Connection


    connection.connect((err) => {
        if (err) {
            console.error(`error connecting: ${err.stack}`);
            return;
        }
        console.log(`connected as id ${connection.threadId}`);
    });

    // Exporting Connection

    module.exports = connection;