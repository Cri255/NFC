const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config();

console.log(`Using database: ${process.env.DATABASE_URL}`);
    const db = new sqlite3.Database(process.env.DATABASE_URL, (err) => {
  if (err) {
    console.error('Error en la base de datos: ', err.message);
  } else {
    console.log('Conectado a la base de datos.');
  }
});

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      auth BOOLEAN DEFAULT FALSE
    )`
  );
  
  db.run(
    `CREATE TABLE IF NOT EXISTS tokens (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      token TEXT NOT NULL UNIQUE)`
  );

});

module.exports = db;
