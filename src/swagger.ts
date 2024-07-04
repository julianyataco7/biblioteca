import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Proyecto Biblioteca',
      version: '1.0.0',
    },
  },
  apis: [path.join(__dirname, './routes/*')], // Ruta a tus archivos de rutas
};



const swaggerSpec = swaggerJSDoc(options);

console.log('Swagger Spec:', swaggerSpec);

export default swaggerSpec;
