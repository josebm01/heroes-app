import { useMemo, useState } from 'react';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher';

export const HeroList = ({ publisher }) => {
  
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher]);
 
    return (
    <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__headShake'>

            { heroes.map( hero => (

                <HeroCard key={ hero.id } { ...hero } /> //* Se mandan todas las propiedades con el operador spred (...) al componente
            
            ) ) }

    </div>
  )
}
