import { pool } from '../dataBase.js';

export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query(`
    select * from tbl_users;`);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      'SELECT id, name, email, avatar, password FROM tbl_users WHERE id = ?',
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
    const { name, email, password, avatar } = req.body;

    const [rows] = await pool.query(
      'INSERT INTO tbl_users (name, email, password, avatar) VALUES (?, ?, SHA2(?, 256), ?)',
      [name, email, password, avatar]
    );

    res.status(200).json({
      notification: `User created Succesfully Id: ${rows.insertId} Nombre:${name} `,
    });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, avatar } = req.body;

    const [rows] = await pool.query(
      'UPDATE tbl_users SET name = IFNULL(?, name), email = IFNULL(?, email), password = IFNULL(SHA2(?, 256), password),  avatar = IFNULL(?, avatar) WHERE id = ?',
      [name, email, password, avatar, id]
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

    const [rows] = await pool.query('DELETE FROM tbl_users WHERE id = ?', [id]);
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

export const authUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const [rows] = await pool.query(`call db_event_agenda.auth_User(?,?);`, [
      email,
      password,
    ]);
    const authorized = rows[0][0].authorized;

    if (authorized) {
      res.status(200).json({ message: 'User has been authenticated' });
    } else {
      res.status(401).json({ message: 'Wrong user or password' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};
