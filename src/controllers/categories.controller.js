import { pool } from '../dataBase.js';

export const getCategories = async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, name, description FROM tbl_categories'
    );
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    await pool.query(
      'INSERT INTO tbl_categories (name, description) VALUES (?, ?)',
      [name, description]
    );

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    await pool.query(
      'UPDATE tbl_categories SET name = IFNULL(?, name), description = IFNULL(?, description) WHERE id = ?',
      [name, description, id]
    );

    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Something went wrong on the server side' });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query('DELETE FROM tbl_categories WHERE id = ?', [id]);

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      `select id,name,description from tbl_categories
    where id = ?;`,
      [id]
    );
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};
