const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  const token = authHeader.replace('Bearer ', '');
  console.log('Received token:', token); // Log the token for debugging

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    console.error('Token verification failed:', ex);
    if (ex.name === 'TokenExpiredError') {
      res.status(401).json({ error: 'Token expired.' });
    } else if (ex.name === 'JsonWebTokenError') {
      res.status(400).json({ error: 'Invalid token.' });
    } else {
      res.status(400).json({ error: 'Token verification failed.' });
    }
  }
};

module.exports = authMiddleware;