const express = require('express');
const auth = require('../middleware/auth');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', auth, (req, res) => {
  res.json({ message: 'Bienvenu!' });
});

router.post('/balance', authMiddleware, (req, res) => {
  const { newBalance } = req.body;
  if (typeof newBalance === 'number') {
    balance = newBalance;
    res.json({ balance });
  } else {
    res.status(400).json({ error: 'Invalid balance value' });
  }
});

module.exports = router;