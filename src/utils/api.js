const ROOT_ENDPOINT = process.env.POKE_ENDPOINT || 'https://pokeapi-215911.firebaseapp.com/api/v2/';

const API_ENDPOINTS = {
    pokemons: `${ROOT_ENDPOINT}pokemon/`,
};

export const fetchPokemons = () =>
    fetch(API_ENDPOINTS.pokemons).then(resp => resp.json());

export const fetchPokemon = id =>
    fetch(`${API_ENDPOINTS.pokemons}${id}/`).then(resp => resp.json());