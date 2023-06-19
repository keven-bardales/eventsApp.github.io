import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

//Metada API

const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Events App Api', version: '1.0.0' },
  },
  apis: ['src/routes/events.routes.js'],
};

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API para manejo de restaurantes',
      version: '1.0.0',
      description: 'Aplicación para el manejo de cadenas de restaurantes',
    },
    servers: [
      {
        url: 'http://localhost:3000//api/v1',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api/v1/doc.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log('Version 1 Docs are available at');
};

export default swaggerDocs;
