import { pool } from '../dataBase.js';

export const getEventOrganizers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tbl_event_organizers');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const createEventOrganizer = async (req, res) => {
  try {
    const { id_event, id_organizer } = req.body;

    const [rows] = await pool.query(
      'INSERT INTO tbl_event_organizers (id_event, id_organizer) VALUES (?, ?)',
      [id_event, id_organizer]
    );
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const updateEventOrganizer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address } = req.body;

    const [rows] = await pool.query(
      'UPDATE tbl_organizers SET name = ?, address = ? WHERE id = ?',
      [name, address, id]
    );
    res.status(200).json();
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const deleteEventOrganizer = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.query('DELETE FROM tbl_organizers WHERE id = ?', [
      id,
    ]);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};
