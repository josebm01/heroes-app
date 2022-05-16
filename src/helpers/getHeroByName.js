import { heroes } from "../data/heroes";

export const getHeroesByName = (name='') => {

    console.log(name);
    
    // console.log(heroes[0]);
    
    //* Validación cuando no se envía algo que buscar
    if(name.length === 0){
        return [];
    }


    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name));
}