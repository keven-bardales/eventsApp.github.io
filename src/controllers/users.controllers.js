import { json } from 'express';
import { pool } from '../dataBase.js';

export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM db_event_agenda.tbl_users');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      'SELECT id, name, email FROM tbl_users WHERE id = ?',
      [id]
    );
    if (!rows[0]) {
      res.status(404).json({
        codigo: 404,
        notification: `The user with id ${id} does not exist`,
      });
      return;
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const [rows] = await pool.query(
      'INSERT INTO db_event_agenda.tbl_users (name, email, password) VALUES (?,?, ?)',
      [name, email, password]
    );
    res.json({
      notification: `Usuario creado con exito Id: ${rows.insertId} Nombre:${name} `,
    });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const [rows] = await pool.query(
      'UPDATE tbl_users SET name = IFNULL(?, name), email = IFNULL(?, email), password = IFNULL(?, password) WHERE id = ?',
      [name, email, password, id]
    );
    if (rows.affectedRows != 0) {
      const [rows] = await pool.query(
        `SELECT name from tbl_users WHERE id = ?`,
        [id]
      );
      res.status(200).json(rows[0]);

      return;
    }
    res.status(404).json({
      codigo: 404,
      notification: `The user with id ${id} does not exist`,
    });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.query(
      'DELETE FROM db_event_agenda.tbl_users WHERE id = ?',
      [id]
    );
    if (rows.affectedRows != 0) {
      res.sendStatus(204);
      return;
    }
    res
      .status(404)
      .json({ code: 404, notification: `User with id ${id} does not exist` });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};
