import mongoose from "mongoose";


const superheroeSchema = new mongoose.Schema(
    {
        nombreSuperHeroe: {type: String, required: true},
        nombreReal: {type: String, required: true},
        edad: {type: Number, min: 0, required: true},
        planetaOrigen: {type: String, default: "Desconocido"},
        debilidad: [String],
        poderes: [{ type: String, required: true }],
        aliados: [String],
        enemigos: [String],
        creador: [String],
    }
)


const superHero = mongoose.model('superHero', superheroeSchema, 'Grupo-03');

export default superHero;