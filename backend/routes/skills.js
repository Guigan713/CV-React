const express = require('express');
const router = express.Router();
const pool = require('../db/db');

// GET /api/skills
router.get('/', async (req, res) => {
  try {
    const categories = await pool.query('SELECT * FROM skill_categories ORDER BY id');
    const skills = await pool.query('SELECT * FROM skills ORDER BY category_id, id');
    
    const result = categories.rows.map(cat => ({
      ...cat,
      skills: skills.rows.filter(s => s.category_id === cat.id)
    }));
    
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
