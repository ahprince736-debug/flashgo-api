const express = require('express');
const router = express.Router();
const supabase = require('../supabase');

// Route temporaire de test : http://localhost:3000/api/auth/test
router.get('/test', (req, res) => {
  res.json({ message: "Route Auth fonctionnelle" });
});

// ─────────────────────────────────────────────
// POST /api/auth/send-otp
// Body JSON : { "phone": "+2291XXXXXXXX" }
// ─────────────────────────────────────────────
router.post('/send-otp', async (req, res) => {

  // 1. Extraire le numéro du corps de la requête
  const { phone } = req.body;

  // 2. Vérifier que le champ est présent
  if (!phone) {
    return res.status(400).json({
      success: false,
      message: "Le numéro de téléphone est requis."
    });
  }

  // 3. Valider le format Bénin : +2291 suivi de 8 chiffres
  const beninRegex = /^\+2291[0-9]{8}$/;
  if (!beninRegex.test(phone)) {
    return res.status(400).json({
      success: false,
      message: "Format invalide. Exemple correct : +229162805416"
    });
  }

  // 4. Appeler Supabase pour envoyer l'OTP par SMS
  const { data, error } = await supabase.auth.signInWithOtp({
    phone: phone
  });

  // 5. Gérer l'erreur Supabase
  if (error) {
    console.error('[send-otp] Supabase error:', error.message);
    return res.status(500).json({
      success: false,
      message: "Échec de l'envoi de l'OTP.",
      error: error.message
    });
  }

  // 6. Succès
  return res.status(200).json({
    success: true,
    message: `OTP envoyé au ${phone}. Valable 10 minutes.`,
    data
  });
//Fin code Pedro
});

module.exports = router;