const express = require('express');
const router = express.Router();

// Route temporaire de test : http://localhost:3000/api/auth/test
router.get('/test', (req, res) => {
  res.json({ message: "Route Auth fonctionnelle" });
});

module.exports = router;