import { pool } from '../dataBase.js';
export const ping = async (req, res) => {
  const [rows] = await pool.query('SELECT 2+2 as Result');
  res.json(rows);
};
