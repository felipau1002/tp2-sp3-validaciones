import superHero from "../models/superheroe.mjs";
import IRepository from "./IRepository.mjs";


class SuperHeroRepository extends IRepository {

    static async obtenerTodos() {
        return await superHero.find({});
    }

    static async crearSuperheroe(superheroe) {
        const nuevoHeroe = new superHero(superheroe);
        return await nuevoHeroe.save();
    }

    static async actualizarSuperheroe(id, edad) {
        return await superHero.findByIdAndUpdate(id, { edad }, { new: true });
    }

    static async eliminarSuperheroePorID(id) {
        return await superHero.findByIdAndDelete(id);
    }

    static async eliminarSuperheroePorNombre(nombreSuperHeroe) {
        return await superHero.findOneAndDelete({ nombreSuperHeroe });
    }
}


export default SuperHeroRepository;