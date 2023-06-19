import { createPool } from 'mysql2/promise';
import { DB_USER, DB_HOST, DB_PORT, DB_PASSWORD, DATABASE } from './config.js';

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  port: DB_PORT,
  password: DB_PASSWORD,
  database: DATABASE,
});
