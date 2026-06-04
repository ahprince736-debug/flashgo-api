const express = require('express');
const router = express.Router();

// Route temporaire de test : http://localhost:3000/api/orders/test
router.get('/test', (req, res) => {
  res.json({ message: "Route Orders fonctionnelle" });
});

module.exports = router;