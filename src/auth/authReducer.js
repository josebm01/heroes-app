import { types } from '../types/types';


//* Estructura de la acción
/* const loginAction = {
    type: types.login,
    payload: {
        name: 'José',
        email: 'jose@gmail.com'
    }
} */


export const authReducer = ( state={}, action ) => {

    //* Analizando el tipo de la acción (alguna que se ha definido en types)
    switch( action.type ){
        case types.login: //* Caso de login
            return {
                ...action.payload, //* Envía la acción con toda la información
                logged: true //* Indica que está autenticado
            }

        case types.logout:
            return {
                logged: false
            }

        default:
            return state; //* Regresa el mismo state para que no muestre algún cambio en la vista
    }
}