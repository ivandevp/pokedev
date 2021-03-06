import {
    SET_POKEMONS,
    SET_POKEMONS_ERROR,
} from '../actions/actionTypes';

const initialState = {
    results: {},
    error: null,
};

const pokemons = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state, 
                results: action.payload,
            };
        case SET_POKEMONS_ERROR:
            return {
                ...state, 
                error: action.payload,
            };
        default:
            return state;
    }
};

export default pokemons;