import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPokemons } from '../actions/pokemons';
import Pokemon from '../components/Pokemon';

class Pokemons extends Component {
    componentDidMount() {
        this.props.getPokemons();
    }

    render() {
        return (
            <div className="pokemons">
                {(this.props.pokemons.results || []).map((pokemon) => (
                    <Pokemon key={pokemon.name} {...pokemon} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = ({ pokemons }) => ({
    pokemons: pokemons.results,
});

const mapDispatchToProps = {
    getPokemons,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);

