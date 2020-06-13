const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '161.35.119.162',
    user: 'root',
    password: 'Mepicaunateta123',
    database: 'Spotify'
  });
}
