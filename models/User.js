const fs = require('fs');
const {v4} = require('uuid');

let db = require('../database/db_user.json');

const writeToDB = () => {
    const json = JSON.stringify(db);
}