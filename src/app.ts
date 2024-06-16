import express, { Application } from 'express';
import libroRoute from './routes/libroRoute';
import ejemplarRoute from './routes/ejemplarRoute'


const app: Application = express();

// Middleware para analizar JSON en las solicitudes POST y PUT
app.use(express.json());

// Rutas
app.use('/api/v1/libros', libroRoute);
app.use('/api/v1/ejemplares',ejemplarRoute)

export default app;
