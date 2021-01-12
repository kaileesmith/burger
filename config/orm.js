const connection = require('./connection.js');

// Helper function for syntax
const printQuestionMarks = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
        return arr.toString();
    };

    // Object for all SQL statement functions
const orm = {
    all(tableInput, cb){
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
},
    insertOne(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table}`;
    
        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
    if (err) {
        throw err;
        }

        cb(result);
    });
    },

    updateOne(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table}`;
    
        queryString += ' SET ';
        queryString += "devoured = true";
        queryString += ' WHERE ';
        queryString += condition;
        queryString += objToSql(objColVals);

        console.log(queryString);
    connection.query(queryString, (err, result) => {
    if (err) {
        throw err;
        }

        cb(result);
        });
    },
};

module.exports = orm;
