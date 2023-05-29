import { pool } from '../dataBase.js';

export const getEvents = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tbl_events');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const createEvent = async (req, res) => {
  try {
    const {
      name,
      description,
      start_time,
      end_time,
      cost,
      id_location,
      id_category,
      id_main_organizer,
    } = req.body;

    const [rows] = await pool.query(
      'INSERT INTO tbl_events (name, description, start_time, end_time, cost, id_location, id_category, id_main_organizer) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [
        name,
        description,
        start_time,
        end_time,
        cost,
        id_location,
        id_category,
        id_main_organizer,
      ]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      start_time,
      end_time,
      cost,
      id_location,
      id_category,
      id_main_organizer,
    } = req.body;

    const rows = await pool.query(
      'UPDATE tbl_events SET name = ?, description = ?, start_time = ?, end_time = ?, cost = ?, id_location = ?, id_category = ?, id_main_organizer = ? WHERE id = ?',
      [
        name,
        description,
        start_time,
        end_time,
        cost,
        id_location,
        id_category,
        id_main_organizer,
        id,
      ]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.query('DELETE FROM tbl_events WHERE id = ?', [
      id,
    ]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};
