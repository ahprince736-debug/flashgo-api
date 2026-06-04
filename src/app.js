const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globaux de sécurité et de parsing
app.use(helmet());
app.use(cors());
app.use(express.json());

// Route de test pour vérifier que l'API fonctionne
app.get('/', (req, res) => {
  res.json({ message: "Bienvenue sur l'API FlashGo Bénin ! 🇧🇯" });
});

// Liaison des routes (Pedro et Pytagore coderont l'intérieur plus tard)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/wallet', require('./routes/wallet'));

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});