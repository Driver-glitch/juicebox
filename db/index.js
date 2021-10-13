// inside db/index.js
const { Client } = require('pg'); // imports the pg module
const password = 'dan'
// supply the db name and location of the database
const client = new Client(`postgres://postgres:${password}@localhost:5433/juicebox-dev`);
// 'postgres://username:password@localhost/database_name`

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT id, username 
    FROM users;
  `);

  return rows;
}


module.exports = {
  client,
  getAllUsers,
}