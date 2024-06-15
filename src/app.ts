import express, { Application, Request, Response } from 'express';
import libroRoute from './routes/libroRoute';

const app: Application = express();

// Middleware para analizar JSON en las solicitudes POST y PUT
app.use(express.json());

// Rutas
app.use('/api/v1/libros', libroRoute);

export default app;
