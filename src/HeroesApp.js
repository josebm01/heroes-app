import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/authContext';
import { useEffect, useReducer } from 'react';
import { authReducer } from './auth/authReducer';


export const HeroesApp = () => {

  const init = () => {
    //* Saber si está autenticado a través del localStorage (cache) y si no lo está entonces estará en falso
    //* Dentro de localStorage solo se guardan string, si se quiere guardar un objeto es con JSON.parse(localStorage...)
    return JSON.parse(localStorage.getItem('user')) || { logged: false}; 
    
    // return {
    //   logged: true,
    //   name: 'Jose'
    // }
  }

  
  /*  
      Permite crear instancia del contexto y es lo que se envían como valores al context
      user (state): Información que se obtiene de AuthReducer
      Dispatch: es la función que se utiliza para disparar acciones al reducer
      Tiene un objeto vacío como estado inicial y con init se inicializa el reducer para que se ejecute la primera vez y se mantiene como el estado actual
  */
   const [user, dispatch] = useReducer( authReducer, {}, init );

  //* Grabando la sesión en localStorage (si el usuario no existe entra en el 'o' del estado inicial init y se deja logged en false )
  useEffect(() => {
    
    if(!user) return; //* Si no existe no graba

    localStorage.setItem('user', JSON.stringify(user)); //* Si existe la guarda de manera local
   
  }, [ user ])
  

  return (
    <AuthContext.Provider value={ { user, dispatch } }>
      <AppRouter />
    </AuthContext.Provider>
  )
}
