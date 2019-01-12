import { fetchPokemon } from '../utils/api';
import {
    SET_POKEMON,
    SET_POKEMON_ERROR,
} from './actionTypes';

const setPokemon = (dispatch, pokemon) => {
    dispatch({
        type: SET_POKEMON,
        payload: pokemon,
    });
};

const setPokemonError = (dispatch, error) => {
    dispatch({
        type: SET_POKEMON_ERROR,
        payload: error,
    });
};

export const getPokemon = id =>
    (dispatch) => {
        const savedPokemon = window.localStorage.getItem(`pokemon-${id}`);
        if (savedPokemon) {
            setPokemon(dispatch, JSON.parse(savedPokemon));
        } else {
            fetchPokemon(id)
                .then((pokemon) => {
                    window.localStorage.setItem(`pokemon-${id}`, JSON.stringify(pokemon));
                    setPokemon(dispatch, pokemon);
                })
                .catch(error => setPokemonError(dispatch, error));
        }
    };