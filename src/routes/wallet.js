const express = require('express');
const router = express.Router();

// Route temporaire de test : http://localhost:3000/api/wallet/test
router.get('/test', (req, res) => {
  res.json({ message: "Route Wallet fonctionnelle" });
});

module.exports = router;