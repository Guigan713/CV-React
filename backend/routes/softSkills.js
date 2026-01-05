const express = require('express');
const router = express.Router();
const pool = require('../db/db');

// GET /api/soft-skills
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM soft_skills ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
