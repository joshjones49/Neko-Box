// IMPORTS
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';

// CONFIGURATION
dotenv.config();
const PORT = process.env.PORT || 8008;
const { Pool } = pg;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// INITIALIZE EXPRESS
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());







// LISTENER
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});