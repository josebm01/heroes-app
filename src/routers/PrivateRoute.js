import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

//* Pasando los elementos hijos de PrivateRoute, es DashboardRoutes
export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    const { pathname, search } = useLocation();

    //* Grabando la última ruta en la que se navegó (concatenando search para obtener la ruta especifica)
    localStorage.setItem('lastPath', pathname + search)

// Mantiene la ruta login siempre y cuando el usuario no esté logueado
  return user.logged 
    ? children //* Si el usuario está autenticado toma las propiedades del componente hijo
    : <Navigate to="/login" /> //* Si no se mantiene en el login sin importar la ruta que escriba en el URL
}
