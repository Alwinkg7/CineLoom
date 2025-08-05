const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // You would typically verify the user exists in database here
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Please authenticate' });
  }
};

const requireSubscription = async (req, res, next) => {
  try {
    // Check if user has active subscription
    // This is a placeholder - implement your subscription logic
    const hasSubscription = true; // Replace with actual check
    
    if (!hasSubscription) {
      return res.status(403).json({ error: 'Subscription required' });
    }
    next();
  } catch (err) {
    res.status(500).json({ error: 'Subscription check failed' });
  }
};

module.exports = { auth, requireSubscription };