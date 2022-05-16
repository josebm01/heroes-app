import { Routes, Route } from 'react-router-dom';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/iu/NavBar';
import { HeroScreen } from '../components/hero/HeroScreen';

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />

        {/* Rutas padre (se ven solo si el usuario está autenticado)*/}
        <div className='container'>
          <Routes>
              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="dc" element={<DcScreen />} />
              
              <Route path='hero/:heroeId' element={<HeroScreen/>} />
              <Route path="search" element={<SearchScreen />} />

              <Route path="/" element={<MarvelScreen />} />
          </Routes>
        </div>
    </>
  )
}
