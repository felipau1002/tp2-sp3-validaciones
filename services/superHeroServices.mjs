import SuperHeroRepository from "../Repository/superHeroRepository.mjs";



export async function obtenerTodosLosSuperheroes() {
    return await SuperHeroRepository.obtenerTodos();
}


export async function crearNuevoSuperheroe(datos) {
    return await SuperHeroRepository.crearSuperheroe(datos);
}


export async function actualizarSuperheroe(id, edad) {
    return await SuperHeroRepository.actualizarSuperheroe(id, edad);
}


export async function eliminarSuperheroePorID(id) {
    return await SuperHeroRepository.eliminarSuperheroePorID(id);
}


export async function eliminarSuperheroePorNombre(nombreSuperHeroe) {
    return await SuperHeroRepository.eliminarSuperheroePorNombre(nombreSuperHeroe);
}