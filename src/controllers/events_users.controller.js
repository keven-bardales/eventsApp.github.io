import { pool } from '../dataBase.js';

export const getEventUsers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tbl_event_users');
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createEventUser = async (req, res) => {
  try {
    const { id_event, id_user, confirmed } = req.body;
    const [rows] = await pool.query(
      'INSERT INTO tbl_event_users (id_event, id_user, confirmed) VALUES (?,?, ?)',
      [id_event, id_user, confirmed]
    );
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateEventUser = async (req, res) => {
  try {
    const { id_event, id_user } = req.params;
    const { confirmed } = req.body;
    const [rows] = await pool.query(
      'UPDATE tbl_event_users SET confirmed = ? WHERE id_event = ? AND id_user = ?',
      [confirmed, id_event, id_user]
    );
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteEventUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query('DELETE FROM tbl_users WHERE id = ?', [id]);
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
