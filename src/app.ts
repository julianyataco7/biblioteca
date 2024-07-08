import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';
import libroRoute from './routes/libroRoute';
import ejemplarRoute from './routes/ejemplarRoute'
import autorRoute from './routes/autorRoute'
import usuarioRoute from './routes/usuarioRoute'
import prestamoRoute from './routes/prestamoRoute'
import tipoInfraccionRoute from './routes/tipoInfraccionRoute'
import infraccionRoute from './routes/infraccionRoute'
import comprobanteRoute from './routes/comprobanteRoute'


const app: Application = express();

// Middleware para analizar JSON en las solicitudes POST y PUT
app.use(express.json());

// Implementacion de swagger
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));



// Rutas
app.use('/api/v1/libros', libroRoute);
app.use('/api/v1/ejemplares',ejemplarRoute);
app.use('/api/v1/autores',autorRoute);
app.use('/api/v1/usuarios',usuarioRoute);
app.use('/api/v1/prestamos',prestamoRoute);
app.use('/api/v1/tipoInfracciones',tipoInfraccionRoute);
app.use('/api/v1/infracciones',infraccionRoute);
app.use('/api/v1/comprobantes',comprobanteRoute);




export default app;
