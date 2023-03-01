const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

/* client.query('SELECT * FROM contacts').then((resolve) => console.log(resolve.rows)); */

exports.query = async (query, values) => {
  const { rows } = client.query(query, values);
  return rows;
};
