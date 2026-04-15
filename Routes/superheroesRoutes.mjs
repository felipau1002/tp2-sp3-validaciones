import express from 'express';
import { obtenerTodosLosSuperheroesController, crearSuperheroeController, actualizarSuperheroeController, eliminarSuperheroePorIDController, eliminarSuperheroePorNombreController } from '../controllers/superHeroController.mjs';
import { body, validationResult } from 'express-validator';




const validacionDeNombreSuperheroe = [   // VALIDACION DE NOMBRE DE SUPERHEROE
    body('nombreSuperHeroe')
        .trim()
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 3 }).withMessage('El nombre debe tener 3 caracteres como mínimo')
        .isLength({ max: 60 }).withMessage('El nombre debe tener 60 caracteres como máximo')
];



const validacionDeNombreReal = [   // VALIDACION DE NOMBRE REAL
    body('nombreReal')
        .trim()
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 3 }).withMessage('El nombre debe tener 3 caracteres como mínimo')
        .isLength({ max: 60 }).withMessage('El nombre debe tener 60 caracteres como máximo')
];



const validacionDeEdad = [  // VALIDACION DE EDAD
    body('edad')
        .trim()
        .notEmpty().withMessage('La edad es obligatoria')
        .isNumeric().withMessage('Solo caractere numéricos')
        .isInt({ min: 0 }).withMessage('La edad debe ser un número positivo')
];



const validacionDePoderes = [   // VALIDACION DE PODERES
    body('poderes')
        .isArray({ min: 1 }).withMessage('Debe haber al menos un poder'),

    body('poderes.*')
        .trim()
        .notEmpty().withMessage('Los poderes no pueden estar vacios')
        .isLength({ min: 3 }).withMessage('Cada poder debe tener al menos 3 caracteres')
        .isLength({ max: 60 }).withMessage('Cada poder debe tener menos de 60 caracteres')
];



const middlewareErrores = (req, res, next) => {   // MIDDLEWARE
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({ error: errores.array() });
    }
    next();
};



const router = express.Router();


router.get('/superheroes', obtenerTodosLosSuperheroesController);



router.post(
    '/superheroes',
    validacionDeNombreSuperheroe,
    validacionDeNombreReal,
    validacionDeEdad,
    validacionDePoderes,
    middlewareErrores,
    crearSuperheroeController
);



router.put(
    '/superheroes/:id/edadactualizada',
    validacionDeEdad,
    middlewareErrores,
    actualizarSuperheroeController
);



router.delete('/superheroes/:id', eliminarSuperheroePorIDController);
router.delete('/superheroes/nombre/:nombre', eliminarSuperheroePorNombreController);


export default router;