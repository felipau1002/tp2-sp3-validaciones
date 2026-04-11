import { describe } from "node:test";

export function renderizarSuperheroe(superheroe) {
    return {
        nombre: superheroe.nombreSuperHeroe,
        nombreReal: superheroe.nombreReal,
        edad: superheroe.edad,
        PlanetaOrigen: superheroe.PlanetaOrigen,
        debilidad: superheroe.debilidad,
        poderes: superheroe.poderes,
        aliados: superheroe.aliados,
        enemigos: superheroe.enemigos,
    };
}



export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}