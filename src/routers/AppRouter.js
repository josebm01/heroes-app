import React from 'react';

//* Se instala router-dom  con npm install react-router-dom@6 o yarn add react-router-dom@6
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/login' element={
          <PublicRoute>
              <LoginScreen />
          </PublicRoute>
        }
        />


        {/* componente padre llama otro componente hijo */}
        <Route path='/*' element={ 
          <PrivateRoute>
                <DashboardRoutes/>
            </PrivateRoute> 
          } 
        />

        {/* <Route path="/login" element={<LoginScreen />} /> */}
        
        {/* //* Para otras rutas se llama otro componente */}
        {/* <Route path='/*' element={ <DashboardRoutes />} />  */}
      </Routes>

    </BrowserRouter>
  );
} 
