import { pool } from '../dataBase.js';

export const getEvents = async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT
      e.id AS event_id,
      e.name AS event_name,
      e.picture as picture,
      e.description AS event_description,
      e.start_time,
      e.end_time,
      e.cost,
      o.name AS organizer_name,
      c.name AS category_name,
      l.name AS location_name
    FROM
      tbl_events AS e
      INNER JOIN tbl_organizers AS o ON e.id_main_organizer = o.id
      INNER JOIN tbl_categories AS c ON e.id_category = c.id
      INNER JOIN tbl_locations AS l ON e.id_location = l.id;`);
    res.json(rows);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Something went wrong on the server side', err });
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
      picture,
    } = req.body;

    const [rows] = await pool.query(
      'INSERT INTO tbl_events (name, description, start_time, end_time, cost, id_location, id_category,  id_main_organizer, picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)',
      [
        name,
        description,
        start_time,
        end_time,
        cost,
        id_location,
        id_category,
        id_main_organizer,
        picture,
      ]
    );
    res.json(rows);
  } catch (err) {
    console.log(err);
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
      picture,
    } = req.body;

    const rows = await pool.query(
      'UPDATE tbl_events SET name = ?, description = ?, start_time = ?, end_time = ?, cost = ?, id_location = ?, id_category = ?, id_main_organizer = ?, picture = ? WHERE id = ?',
      [
        name,
        description,
        start_time,
        end_time,
        cost,
        id_location,
        id_category,
        id_main_organizer,
        picture,
        id,
      ]
    );
    res.status(200).json(rows[0]);
  } catch (err) {
    console.log(err);
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

export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      `
    SELECT
          e.id AS event_id,
          e.name AS event_name,
          e.picture as picture,
          e.description AS event_description,
          e.start_time,
          e.end_time,
          e.cost,
          o.name AS organizer_name,
          c.name AS category_name,
          l.name AS location_name
        FROM
          tbl_events AS e
          INNER JOIN tbl_organizers AS o ON e.id_main_organizer = o.id
          INNER JOIN tbl_categories AS c ON e.id_category = c.id
          INNER JOIN tbl_locations AS l ON e.id_location = l.id
          where e.id = ?;`,
      [id]
    );
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: `Something went wrong in the server side` });
  }
};
