import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import router from './Routes/superheroesRoutes.mjs';
import dns from 'dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);


const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();

app.use('/api', router);

app.use((req, res) => {
    res.status(404).send({mensaje: 'ruta no encontrada'});
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});