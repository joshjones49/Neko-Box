// IMPORTS
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';

// CONFIGURATION
dotenv.config();
const PORT = 8008;
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

// ROUTES

// get all
app.get('/', async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM shows");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
});

// get shows by category
app.get('/categories', async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT name, quality_rating FROM shows ORDER BY quality_rating DESC"
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
})



// get shows by name
app.get('/show-details/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pool.query(
            "SELECT * FROM shows WHERE id = $1", [id]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
})

// LISTENER
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});