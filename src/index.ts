import express, { Request, Response } from 'express';
 
 
const app = express();
const port = 3000;
 
app.get('/', (req: Request, res: Response) => {
    console.log('se hizo una peticion');
    res.send('Hola Mundo');
});
 
app.listen(port, () => {
    console.log(`App escuchando en http://localhost:${port}`);
})