const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const dbconfig = {
  connectionString: process.env.PG_URI,
  max: 5,
};

console.log(dbconfig);

const db = new pg.Pool(dbconfig);

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return db.query(text, params, callback);
  },
};
