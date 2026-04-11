import mongoose from 'mongoose';
import dns from 'dns';

export async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://grupo-03:grupo-03@cluster0.blryo.mongodb.net/NodeMod3Cohorte5');
        console.log('Conexión exitosa');
    }   catch(error) {
        console.log('Error al conectarse', error);
    }
}