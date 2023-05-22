const express = require('express');
var mysql = require('mysql');
var cors = require('cors');
const bodyParser = require('body-parser');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'keven_bardales',
  password: 'D@ns3r190s',
});

const app = express();

connection.connect();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

/**CATEGORIES START */

app.get('/api/v1/categories', (req, res) => {
  connection.query(
    'SELECT * FROM db_event_agenda.tbl_categories',
    function (err, rows, fields) {
      if (err) throw err;

      res.status(200).json(rows);
    }
  );
});

app.post('/api/v1/categories', (req, res) => {
  console.log(req.body);
  const { name, description } = req.body;

  connection.query(
    'INSERT INTO db_event_agenda.tbl_categories (name, description) VALUES (?, ?);',
    [name, description],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

app.put('/api/v1/categories/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  connection.query(
    'UPDATE db_event_agenda.tbl_categories SET name = ?, description = ? WHERE id = ?',
    [name, description, id],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

app.delete('/api/v1/categories/:id', (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  connection.query(
    'DELETE FROM db_event_agenda.tbl_categories WHERE id = ?',
    [id],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

/**CATEGORIES ENDS */

/**EVENTS START */

app.get('/api/v1/events', (req, res) => {
  connection.query(
    'SELECT * FROM db_event_agenda.tbl_events',
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

app.post('/api/v1/events', (req, res) => {
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

  connection.query(
    'INSERT INTO db_event_agenda.tbl_events (name, description, start_time, end_time, cost, id_location,id_category, id_main_organizer) VALUES (?,?,?,?,?,?,?,?)',
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
    ],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

app.put('/api/v1/events/:id', (req, res) => {
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

  connection.query(
    'UPDATE db_event_agenda.tbl_events SET name = ?, description = ?, start_time = ?, end_time = ?, cost = ?, id_location = ?, id_category = ?, id_main_organizer = ? WHERE id = ?',
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
    ],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json();
    }
  );
});

app.delete('/api/v1/events/:id', (req, res) => {
  const { id } = req.params;

  connection.query(
    'DELETE FROM db_event_agenda.tbl_events WHERE id = ?',
    [id],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

/**EVENTS ENDS */

/**LOCATION STARTS */
app.get('/api/v1/locations', (req, res) => {
  connection.query(
    'SELECT * FROM db_event_agenda.tbl_locations',
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

/**LOCATION ENDS */

/**ORGANIZERS STARTS */
app.get('/api/v1/organizers', (req, res) => {
  connection.query(
    'SELECT * FROM db_event_agenda.tbl_organizers',
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

app.post('/api/v1/organizers', (req, res) => {
  const { name, address } = req.body;

  connection.query(
    'INSERT INTO db_event_agenda.tbl_organizers (name, address) VALUES (?,?)',
    [name, address],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

app.put('/api/v1/organizers/:id', (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;

  connection.query(
    'UPDATE db_event_agenda.tbl_organizers SET name = ?, address = ? WHERE id = ?',
    [name, address, id],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json();
    }
  );
});

app.delete('/api/v1/organizers/:id', (req, res) => {
  const { id } = req.params;

  connection.query(
    'DELETE FROM db_event_agenda.tbl_organizers WHERE id = ?',
    [id],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

/**ORGANIZERS ENDS */

/**EVENTS ORGANIZERS STARTS */
app.get('/api/v1/event_organizers', (req, res) => {
  connection.query(
    'SELECT * FROM db_event_agenda.tbl_event_organizers',
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

app.post('/api/v1/event_organizers', (req, res) => {
  const { id_event, id_organizer } = req.body;

  connection.query(
    'INSERT INTO db_event_agenda.tbl_event_organizers (id_event, id_organizer) VALUES (?,?)',
    [id_event, id_organizer],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

app.put('/api/v1/event_organizers/:id', (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;

  connection.query(
    'UPDATE db_event_agenda.tbl_organizers SET name = ?, address = ? WHERE id = ?',
    [name, address, id],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json();
    }
  );
});

app.delete('/api/v1/event_organizers/:id', (req, res) => {
  const { id } = req.params;

  connection.query(
    'DELETE FROM db_event_agenda.tbl_organizers WHERE id = ?',
    [id],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

/**EVENTS ORGANIZERS ENDS */

/**USERS STARTS */
app.get('/api/v1/users', (req, res) => {
  connection.query(
    'SELECT * FROM db_event_agenda.tbl_users',
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

app.post('/api/v1/users', (req, res) => {
  const { name, email, password } = req.body;

  connection.query(
    'INSERT INTO db_event_agenda.tbl_users (name, email, password) VALUES (?,?, ?)',
    [name, email, password],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

app.put('/api/v1/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  connection.query(
    'UPDATE db_event_agenda.tbl_users SET name = ?, email = ?, password = ? WHERE id = ?',
    [name, email, password, id],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

app.delete('/api/v1/users/:id', (req, res) => {
  const { id } = req.params;

  connection.query(
    'DELETE FROM db_event_agenda.tbl_users WHERE id = ?',
    [id],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

/**USERS ENDS */

/**EVENTS/USERS STARTS */
app.get('/api/v1/event_users', (req, res) => {
  connection.query(
    'SELECT * FROM db_event_agenda.tbl_event_users',
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

app.post('/api/v1/event_users', (req, res) => {
  const { id_event, id_user, confirmed } = req.body;

  connection.query(
    'INSERT INTO db_event_agenda.tbl_event_users (id_event, id_user, confirmed) VALUES (?,?, ?)',
    [id_event, id_user, confirmed],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

app.put('/api/v1/event_users/:id_event/:id_user', (req, res) => {
  const { id_event, id_user } = req.params;
  const { confirmed } = req.body;

  connection.query(
    'UPDATE db_event_agenda.tbl_event_users SET confirmed = ? WHERE id_event = ? AND id_user = ?',
    [confirmed, id_event, id_user],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

app.delete('/api/v1/event_users/:id', (req, res) => {
  const { id } = req.params;

  connection.query(
    'DELETE FROM db_event_agenda.tbl_users WHERE id = ?',
    [id],
    function (err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows);
    }
  );
});

/**EVENTS/USERS ENDS */

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
