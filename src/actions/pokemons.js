import { fetchPokemons } from '../utils/api';
import {
    SET_POKEMONS,
    SET_POKEMONS_ERROR,
} from './actionTypes';

const setPokemons = (dispatch, pokemons) => {
    const pokemonsWithId = {
        ...pokemons,
        results: pokemons.results.map(pokemon => ({
            ...pokemon,
            id: pokemon.url.substring(34, pokemon.url.length - 1)
        }))
    };

    dispatch({
        type: SET_POKEMONS,
        payload: pokemonsWithId,
    });
};

const setPokemonsError = (dispatch, error) => {
    dispatch({
        type: SET_POKEMONS_ERROR,
        payload: error,
    });
};


export const getPokemons = () =>
    (dispatch) => {
        const pokemonsList = window.localStorage.getItem('pokemons'); 
        if (pokemonsList) {
            setPokemons(dispatch, JSON.parse(pokemonsList));
        } else {
            fetchPokemons()
                .then((pokemons) => {
                    window.localStorage.setItem('pokemons', JSON.stringify(pokemons));
                    setPokemons(dispatch, pokemons);
                })
                .catch((error) => setPokemonsError(dispatch, error));
        }
    };