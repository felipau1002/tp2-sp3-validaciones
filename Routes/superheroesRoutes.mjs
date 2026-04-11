import express from 'express';
import { obtenerTodosLosSuperheroesController, crearSuperheroeController, actualizarSuperheroeController, eliminarSuperheroePorIDController, eliminarSuperheroePorNombreController } from '../controllers/superHeroController.mjs';
import { body, validationResult } from 'express-validator';




const validacionDeNombreSuperheroe = [   // VALIDACION DE NOMBRE DE SUPERHEROE
    body('nombreSuperHeroe')
        .trim()
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 3 }).withMessage('El nombre debe tener 3 caracteres como mínimo')
        .isLength({ min: 60 }).withMessage('El nombre debe tener 60 caracteres como máximo')
];



const validacionDeNombreReal = [   // VALIDACION DE NOMBRE REAL
    body('nombreReal')
        .trim()
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 3 }).withMessage('El nombre debe tener 3 caracteres como mínimo')
        .isLength({ min: 60 }).withMessage('El nombre debe tener 60 caracteres como máximo')
];



const validacionDeEdad = [  // VALIDACION DE EDAD
    body('edad')
        .trim()
        .notEmpty().withMessage('La edad es obligatoria')
        .isNumeric().withMessage('Solo caractere numéricos')
        .isInt({ min: 0 }).withMessage('La edad debe ser un número positivo')
]



const middlewareErrores = (req, res, next) => {   // MIDDLEWARE
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({ error: errores.array() });
    }
    next();
}



const router = express.Router();


router.get('/superheroes', obtenerTodosLosSuperheroesController);



router.post(
    '/superheroes',
    crearSuperheroeController,
    validacionDeNombreSuperheroe,
    validacionDeNombreReal,
    validacionDeEdad,
    middlewareErrores
);



router.put(
    '/superheroes/:id/edadactualizada',
    actualizarSuperheroeController,
    validacionDeEdad,
    middlewareErrores
);



router.delete('/superheroes/:id', eliminarSuperheroePorIDController);
router.delete('/superheroes/nombre/:nombre', eliminarSuperheroePorNombreController);


export default router;