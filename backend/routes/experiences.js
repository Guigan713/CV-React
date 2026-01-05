const express = require('express');
const router = express.Router();
const pool = require('../db/db');

// GET /api/experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await pool.query('SELECT * FROM experiences ORDER BY id');
    const missions = await pool.query('SELECT * FROM missions ORDER BY experience_id, id');
    
    const result = experiences.rows.map(exp => ({
      ...exp,
      missions: missions.rows.filter(m => m.experience_id === exp.id)
    }));
    
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
