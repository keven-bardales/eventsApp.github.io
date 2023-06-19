import app from './app.js';
import { PORT } from './config.js';

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
  console.log(`Server link: http://localhost:${PORT}/api/v1/events`);
});
