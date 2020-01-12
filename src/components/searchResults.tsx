import React from 'react'
import {Pokemon} from '../apis/pokemon'

interface searchResultsProps {
    pokemon: Pokemon | undefined | null
}



export default function SearchResults({ pokemon }: searchResultsProps) {
    if(pokemon == undefined){
        return <></>
    }
    if(pokemon == null){
        return <div>No Pokemon Found</div>
    }

    return (
        <div>
            <img src={pokemon.sprites.front_shiny}></img>
            <h2>{pokemon.name}</h2>
            <h3>Pokemon Abilites</h3>
            <div>
                {pokemon.abilities.map((e,i) =>
                    <div key={i}>
                        {e.ability.name}
                    </div>
                    )}
            </div>
        </div>
    )
}



