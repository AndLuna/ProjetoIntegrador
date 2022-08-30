const fs = require('fs');
const { v4 } = require('uuid');

let db = require('../database/db_user.json');

const writeToDB = () => {
    const json = JSON.stringify(db);
    fs.writeFileSync('database/db_user.json', json);
}


const User = {
    findAll: () => db_user.users,

    create: (user) => {
        db.users.push({ id: v4(), ...user });
        writeToDB();
    },
}

module.exports = User;