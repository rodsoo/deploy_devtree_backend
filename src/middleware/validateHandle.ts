
import { param } from 'express-validator'
import { handleInputErrors } from './validation'  

/**
 * Middleware para validar el handle de un usuario
 * Verifica que el handle solo contenga letras, números o guiones
 * Si el handle es inválido, responde con un error 400
 */

export const validateHandle = [
  param('handle')
    .matches(/^[a-zA-Z0-9_-]+$/)
    .withMessage('Handle solo puede contener letras, números, guiones o _'),
  handleInputErrors
]
