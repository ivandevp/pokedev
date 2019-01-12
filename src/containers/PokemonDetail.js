import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { getPokemon } from '../actions/pokemon';

class PokemonDetail extends Component {
    componentDidMount() {
        this.props.getPokemon(this.props.pokemonid);
    }

    render() {
        const { pokemon } = this.props;
        return (
            <div>
                <Link to="/">Home</Link>
                <h3>{pokemon.name}</h3>
                <div className="pokemon-detail">
                    <div className="pokemon-image">
                        <figure>
                            <img
                                src={(pokemon.sprites || {}).front_default}
                                alt={pokemon.name}
                            />
                        </figure>
                    </div>
                    <div className="pokemon-relevant-info">
                        <div className="pokemon-types">
                            {(pokemon.types || [])
                                .sort((pokeType1, pokeType2) => pokeType1.slot > pokeType2.slot)
                                .map(pokeType => (
                                    <strong key={pokeType.type.name}>{pokeType.type.name} </strong>
                                ))}
                        </div>
                        <div className="pokemon-stats">
                            {(pokemon.stats || [])
                                .reverse()
                                .map(pokeStat => (
                                    <div key={pokeStat.stat.name}>
                                        <strong>{pokeStat.stat.name}: </strong>
                                        <span>{pokeStat.base_stat}</span>
                                    </div>
                                ))}
                        </div>
                    </div>                        
                </div>
                <div className="pokemon-profile">
                    <h4>Profile</h4>
                    <p>
                        <strong>Height: </strong>
                        <span>{(pokemon.height / 10)} m</span>
                    </p>
                    <p>
                        <strong>Weight: </strong>
                        <span>{(pokemon.weight / 10)} kg</span>
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ pokemon }) => ({
    pokemon: pokemon.pokemon,
});

const mapDispatchToProps = {
    getPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);