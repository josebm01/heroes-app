import React, { useMemo } from 'react';

import queryString from 'query-string';

import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../helpers/getHeroByName';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';



export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();  //* Leer la ubicación donde se encuentra 
  const { q = '' } = queryString.parse(location.search); //* Separando los queryString de la ruta, en partes


  //* handleInputChange recibe el evento y extrae el name y el value
  const [ formValues, handleInputChange ] = useForm( { searchText: q } ); //* El initialValue (valor inicial) del formulario no será vacío, sino el query 

  const { searchText } = formValues;


  //* Función para buscar el héroe por el nombre
  //* Cuando cambia el state al escribir una letra en el input se vuelve a llamar
  //* Se agrega el useMemo para memorizar el q (query) actual y que solo cambie cuando se busque otra cosa al pasarlo a la ruta
  const heroesFileted = useMemo(() => getHeroesByName(q), [q]);


  //comentario

  const handleSearch = (e) => {
    e.preventDefault(); //* Evitando que el navegador se refresqué al presionar el botón
    console.log(searchText);

    //* Navegando a través de la ruta (queryParameters)
    navigate(`?q=${ searchText }`);

  }

  return (
    <>
        <h1>Búsqueda</h1>
        <hr/>

        <div className='row'>
          <div className='col-5'>  
            <h4>Buscar</h4>
            <hr/>

            {/* //* Manda implícitamente el evento del clic */}
            <form onSubmit={ handleSearch }> 
              <input 
                type='text'
                placeholder='Buscar un héroe'
                className='form-control'
                name='searchText'
                autoComplete='off'
                value={ searchText }
                onChange={handleInputChange} //* Recibe el evento del clic
               />

               <button 
                type='submit'
                className='btn btn-outline-primary mt-1'
                >Buscar</button>
            </form>

          </div>

          <div className='col-7'>
            <h4>Resultados</h4>
            <hr/>

            {
              (q === '') 
                ? <div className='alert alert-info'>Buscar un héroe</div>
                : ( heroesFileted.length === 0)
                  && <div className='alert alert-danger'> No hay resultados con ese término: { q } </div>
            }

            {
              heroesFileted.map( hero => (
                <HeroCard 
                  key={ hero.id }
                  { ...hero } //* Desestructurando el heroe de heroesFileted para mandarlo al componente
                />
              ))
            }

          </div>


        </div>
    </>
  )
}
