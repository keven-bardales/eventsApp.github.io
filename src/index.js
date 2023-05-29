import app from './app.js';
import { PORT } from './config.js';

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

/* import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';

import queryErrors from '../queryErrors.js';
import connection from '../dataBase';
import eventsRoutes from '../events';
import organizersRoutes from '../organizers';
import errors from '../errors'; */

// Middlewares
/* app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(queryErrors);
app.use(morgan('combined'));
app.use(helmet()); */

// Logger Middleware
/* app.use((req, res, next) => {
  console.log('logeado');
  console.log(
    `Se ha llamado la ruta ${req.path} - ${new Date().toLocaleTimeString()}`
  );
  next();
});

// Routes
app.use('/api', eventsRoutes);
app.use('/api', organizersRoutes); */
