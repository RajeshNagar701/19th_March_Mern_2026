const { Pool } = require('pg');
require('dotenv').config();

// Initialize the connection pool using environment variables
const conn = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Export a helpful wrapper function for execution
module.exports = {
  query: (text, params) => conn.query(text, params),
};