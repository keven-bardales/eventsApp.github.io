import { pool } from '../dataBase.js';

export const getLocations = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tbl_locations');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong on the server side' });
  }
};

export const getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      `SELECT id, name, address, municipality, department, picture FROM tbl_locations
      WHERE id = ?;`,
      [id]
    );
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ error: `Location with ID ${id} does not exist` });
    }
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong on the server side' });
  }
};

export const createLocation = async (req, res) => {
  try {
    const { name, address, municipality, department, picture } = req.body;
    const [rows] = await pool.query(
      `INSERT INTO tbl_locations (name, address, municipality, department, picture)
    VALUES (?,?,?,?,?);`,
      [name, address, municipality, department, picture]
    );
    console.log(rows);
    res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong on the server side' });
  }
};

export const deleteLocation = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query(`DELETE FROM tbl_locations WHERE id = ?`, [
      id,
    ]);
    if (rows.affectedRows !== 0) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: `Location with ID ${id} does not exist` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong on the server side' });
  }
};

export const updateLocation = async (req, res) => {
  try {
    const { name, address, municipality, department, picture } = req.body;
    const { id } = req.params;
    const [rows] = await pool.query(
      `UPDATE tbl_locations SET name = IFNULL(?, name), address = IFNULL(?, address), municipality = IFNULL(?, municipality), department = IFNULL(?, department), picture = IFNULL(?, picture)
      WHERE id = ?`,
      [name, address, municipality, department, picture, id]
    );
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong on the server side' });
  }
};
