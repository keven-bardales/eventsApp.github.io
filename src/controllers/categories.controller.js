import { pool } from '../dataBase.js';

export const getCategories = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tbl_categories');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const createCategory = async (req, res) => {
  try {
    console.log(req.body);
    const { name, description } = req.body;

    await connection.query(
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

    await connection.query(
      'UPDATE tbl_categories SET name = ?, description = ? WHERE id = ?',
      [name, description, id]
    );

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    await connection.query('DELETE FROM tbl_categories WHERE id = ?', [id]);

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong in the server side' });
  }
};
