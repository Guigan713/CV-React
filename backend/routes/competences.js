const express = require('express');
const router = express.Router();
const pool = require('../db/db');

// GET /api/competences
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM competences ORDER BY category, sort_order');
    
    // Grouper par catégorie
    const grouped = result.rows.reduce((acc, comp) => {
      if (!acc[comp.category]) {
        acc[comp.category] = [];
      }
      acc[comp.category].push(comp);
      return acc;
    }, {});
    
    res.json(grouped);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
