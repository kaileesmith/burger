// Import the ORM to create functions that will interact with the database
const orm =require('../config/orm');

let burger = {
    all(cb) {
        orm.all('burgers', (res) => cb(res));
        },
        // The variables cols and vals are arrays.
    insertOne(cols, vals, cb) {
        orm.insert('burgers', cols, vals, (res) => cb(res));
    },

    updateOne(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, (res) => cb(res));
    },
}

// Export the database functions for the controller 
module.exports = burger;