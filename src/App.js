import React, { Component } from 'react';
import { Router } from '@reach/router';
import Pokemons from './containers/Pokemons';
import PokemonDetail from './containers/PokemonDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex @ Zipdev</h1>
        <Router>
            <Pokemons path="/" />
            <PokemonDetail path="/pokemon/:pokemonid" />
        </Router>
      </div>
    );
  }
}

export default App;
