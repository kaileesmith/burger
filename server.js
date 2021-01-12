const express = require("express");
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const path = require('path');

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(express.static(path.join(__dirname, '/')));
app.set('view engine', 'handlebars');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db',
});

connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return; 
}

    console.log(`connected as id ${connection.threadId}`);
    });

    // Import routes and give the server access to them.
const routes = require('./controllers/burgers_controller.js');

app.use(routes);

    
app.listen(PORT, () =>
console.log(`Server listening on: http://localhost:${PORT}`)
);