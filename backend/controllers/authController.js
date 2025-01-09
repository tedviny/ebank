const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../models/users');

const login = (req, res) => {

  const { clientId, password } = req.body;

  const user = users.find(client => client.clientId === clientId);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials for user' });
  }

  const isMatch = bcrypt.compareSync(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials for password' });
  }


  const token = jwt.sign({ clientId: user.clientId }, 'your_jwt_secret', { expiresIn: '1m' });
  res.json({ token });
};

module.exports = { login };