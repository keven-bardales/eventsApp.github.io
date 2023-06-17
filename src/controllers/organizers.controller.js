import { pool } from '../dataBase.js';

export const getOrganizers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM TBL_ORGANIZERS');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const getOrganizerById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      `select id,name,address, logo from tbl_organizers
    where id = ?;`,
      [id]
    );
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const createOrganizer = async (req, res) => {
  console.log(req.body);
  try {
    const { name, address, logo } = req.body;
    const [rows] = await pool.query(
      `INSERT INTO TBL_ORGANIZERS (name, address, logo) VALUES (?,?,?)`,
      [name, address, logo]
    );
    res.status(200).json(rows.insertId);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const updateOrganizer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, logo } = req.body;
    const [rows] = await pool.query(
      `UPDATE TBL_ORGANIZERS SET name = IFNULL(?, name), address = IFNULL(?, address), logo = IFNULL(?, logo)
      WHERE id = ?`,
      [name, address, logo, id]
    );
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong on the server side' });
  }
};
