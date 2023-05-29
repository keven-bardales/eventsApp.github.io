import { pool } from '../dataBase.js';

export const getOrganizers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM TBL_ORGANIZERS');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};
