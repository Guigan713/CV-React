const express = require('express');
const router = express.Router();
const pool = require('../db/db');

// GET /api/stack-tech
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM stack_tech ORDER BY sort_order');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
