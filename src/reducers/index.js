import { combineReducers } from 'redux';
import pokemon from './pokemon';
import pokemons from './pokemons';

const rootReducer = combineReducers({
    pokemon,
    pokemons,
});

export default rootReducer;