import {
    SET_POKEMON,
    SET_POKEMON_ERROR,
} from '../actions/actionTypes';

const initialState = {
    pokemon: {},
    error: null,
};

const pokemon = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return {
                ...state, 
                pokemon: action.payload,
            };
        case SET_POKEMON_ERROR:
            return {
                ...state, 
                error: action.payload,
            };
        default:
            return state;
    }
};

export default pokemon;