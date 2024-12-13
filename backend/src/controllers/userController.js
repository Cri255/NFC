const db = require('../database/db');

exports.getAllUsers = (req, res) => {
    db.all('SELECT id, username, auth FROM users', [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
}
  