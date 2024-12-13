const db = require('../database/db');

exports.auth = (req, res) => {
  const { username, token } = req.body;

  if (!username || !token) {
    return res.status(400).json({ error: 'Username y token son requeridos' });
  }

  const queryUser = 'SELECT * FROM users WHERE username = ?';
  const queryToken = 'SELECT * FROM tokens WHERE token = ?';

  db.get(queryUser, [username], (err, userRow) => {
    if (err) {
      return res.status(500).json({ error: 'Error en la consulta de usuario' });
    }

    if (!userRow) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }


    db.get(queryToken, [token], (err, tokenRow) => {
      if (err) {
        return res.status(500).json({ error: 'Error en la consulta de token' });
      }

      if (!tokenRow) {
        return res.status(401).json({ error: 'Token inválido' });
      }

      console.log( 'Usuario,', username, "y token,", token, "validos")

      db.run('UPDATE users SET auth = true WHERE username = ?', [username], (err) => {
        if (err) {
          return res.status(500).json({ error: 'Error al actualizar la tabla de usuarios' });
        }
      });

      return res.status(200).json({ message: 'Usuario y token verificados correctamente' });
    });
  });
}