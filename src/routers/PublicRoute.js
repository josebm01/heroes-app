import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";


//* Componente que verá una persona no autenticada
export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

  return user.logged 
    ? <Navigate to="/marvel" /> //* Si está autenticado saca al usuario de la vista
    : children //* Si no lo está muestra los del componente
} 