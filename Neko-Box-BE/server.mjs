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
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
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