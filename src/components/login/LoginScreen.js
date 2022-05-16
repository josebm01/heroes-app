import React, { useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const LoginScreen = () => {

  const { dispatch } = useContext(AuthContext); //* Se desestructura para acceder solo al dispatch para ejecutar el action
  const navigate = useNavigate();

  const handleLogin = () => {

    const action = {
      type: types.login,
      payload: {
          name: 'José',
          email: 'jose@gmail.com'
      }
    }

    //* Ejecuta el dispatch del context
    dispatch(action);

    //* grabando la ultima ruta visitada por el usuario en la ruta privada (PrivateRoute)
    //* si no existe el ultimo path entonces pone marvel por defecto
    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    navigate(lastPath, {
      replace: true //* Reemplaza la ruta anterior con la actual que se está pasando, evitando que no se puede volver a la vista del login
    });
  }



  return (
    // Vista para el usuario que no se encuentra autenticado
    <div className='container mt-5'>
        <h1>LoginScreen</h1>
        <hr/>

        <button
          className='btn btn-primary'
          onClick={ handleLogin }
        >Login</button>
    </div>
  )
}
