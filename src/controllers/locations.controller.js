import { pool } from '../dataBase.js';

export const getLocations = async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT  FROM db_event_agenda.tbl_locations'
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};
