require('dotenv').config();
const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS, // Ensure it's a valid string
    port: 5432,
});

pool.connect()
    .then(() => console.log("Connected to PostgreSQL successfully!"))
    .catch(err => console.error("Connection error:", err));
