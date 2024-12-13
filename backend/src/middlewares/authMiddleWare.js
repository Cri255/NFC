module.exports = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
  
    if (apiKey && apiKey === 'secureapikey') {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: API Key invalida' });
    }
  };
  