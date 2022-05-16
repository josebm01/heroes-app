import { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { getHeroById } from "../../helpers/getHeroById";

// const heroImages = require.context('../../assets/heroes', true);


export const HeroScreen = () => {
  
  //* Obteniendo el id de la ruta del heroe
  const { heroeId } = useParams();
  // console.log(heroeId);
  const navigate = useNavigate();

  //* Memorizando el valor y se memorizará de nuevo si la dependencia (dentro de los corchetes) cambia 
  //* Evitando que se llame la función nuevamente
  const hero = useMemo( () => getHeroById(heroeId), [heroeId]); 

  const handleReturn = () => {
    navigate(-1); //* Indica el -1 de ir a la página anterior
  }

  if (!hero){ //* Si encuentra algo diferente dentro de la ruta al id del heroe entonces se manda a la ruta principal
    return <Navigate to='/' />
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;
  

  const imagePath=`/assets/heroes/${id}.jpg`;


  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="img-thumbnail animate__animated animate__backInDown"
          src={ imagePath } //* desde public/assets
          // src={ heroImages(`./dc-arrow.jpg`).default }
      
          alt = { superhero } 
        />
      </div>

      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b> { alter_ego } </li>
          <li className="list-group-item"><b>Publisher: </b> { publisher } </li>
          <li className="list-group-item"><b>First Appearance: </b> { first_appearance } </li>
        </ul>
        
        <h5 className="mt-3">Characters</h5>
        <p>{ characters }</p>

        <button 
          className="btn btn-outline-info" 
          onClick={ handleReturn }
        > Regresar </button>

     
      </div>

    </div>
  )
}
