import { obtenerTodosLosSuperheroes, crearNuevoSuperheroe, actualizarSuperheroe, eliminarSuperheroePorID, eliminarSuperheroePorNombre } from "../services/superHeroServices.mjs";
import { renderizarSuperheroe, renderizarListaSuperheroes } from "../views/responseView.mjs";



export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    }   catch(error) {
        res.status(500).send({mensaje: 'Superheroes no encontrados', error: error.message});
    }
}


export async function crearSuperheroeController(req, res) {
    try {
        const nuevoSuperheroe = await crearNuevoSuperheroe(req.body);

        const superheroeFormateado = renderizarSuperheroe(nuevoSuperheroe);
        res.status(200).json(superheroeFormateado);
    }   catch(error) {
        res.status(500).send({mensaje: 'Superheroe no creado', error: error.message});
    }
}


export async function actualizarSuperheroeController(req, res) {
    try {
        const { id } = req.params;
        const { edad } = req.body;
        const superheroeActualizado = await actualizarSuperheroe(id, edad);
        if(!superheroeActualizado) {
            return res.status(404).json({ mensaje: 'Superheroe no encontrado' });
        }

        const superheroeActualizadoFormateado = renderizarSuperheroe(superheroeActualizado);
        res.status(200).json(superheroeActualizadoFormateado);
    }   catch(error) {
        res.status(500).send({mensaje: 'Superheroe no actualizado', error: error.message})
    }
}


export async function eliminarSuperheroePorIDController(req, res) {
    try {
        const { id } = req.params;
        const superheroeEliminado = await eliminarSuperheroePorID(id);
        if(!superheroeEliminado) {
            return res.status(404).json({ mensaje: 'Superheroe no encontrado' });
        }

        const superheroeEliminadoFormateado = renderizarSuperheroe(superheroeEliminado);
        res.status(200).json(superheroeEliminadoFormateado);
    }   catch(error) {
        res.status(500).send({mensaje: 'Superheroe no eliminado', error: error.message})
    }
}


export async function eliminarSuperheroePorNombreController(req, res) {
    try {
        const { nombreSuperHeroe } = req.params;
        const superheroeEliminado2 = await eliminarSuperheroePorNombre(nombreSuperHeroe);
        if(!superheroeEliminado2) {
            return res.status(404).json({ mensaje: 'Superheroe no encontrado' });
        }

        const superheroeEliminadoFormateado2 = renderizarSuperheroe(superheroeEliminado2);
        res.status(200).json(superheroeEliminadoFormateado2);
    }   catch(error) {
        res.status(500).send({mensaje: 'Superheroe no eliminado', error: error.message})
    }
}