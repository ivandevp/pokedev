import React from 'react';
import { Link } from '@reach/router';

const Pokemon = ({ id, name }) => (
    <Link to={`pokemon/${id}`}>
        <div className="pokemon">
            <figure>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt={name}
                />
            </figure>
            <h3>{name}</h3>
        </div>
    </Link>
);

export default Pokemon;