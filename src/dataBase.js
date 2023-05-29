import { createPool } from 'mysql2/promise';
import { DB_USER, DB_HOST, DB_PORT, DB_PASSWORD, DATABASE } from './config.js';

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  port: DB_PORT,
  password: DB_PASSWORD,
  database: DATABASE,
});

//const mysql = require('mysql');

/* const dbSettings = {
  host: 'localhost',
  user: 'keven_bardales',
  password: 'D@ns3r190s',
  database: 'db_event_agenda',y

}; */

/* const connection = mysql.createConnection(dbSettings);

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos!');
});

module.exports = connection; */
