import React from 'react'
import {Pokemon, pokeApi, Species} from '../apis/pokemon'

interface searchResultsProps {
    pokemon: Pokemon | undefined | null 
}


export default function SearchResults({ pokemon }: searchResultsProps) {
    const [ species, setSpecies ] = React.useState<Species | undefined>(undefined)
    React.useEffect(() =>{
        async function fetchSpecies (){
            if(pokemon){
                const response = await pokeApi.getSpecies(pokemon)
                setSpecies(response.data)
            }
        }
        fetchSpecies()
    },[pokemon])

    if(pokemon === undefined){
        return <></>
    }
    if(pokemon === null){
        return <div>No Pokemon Found</div>
    }
    console.log(pokemon)
    return (
        <div>
            <img src={pokemon.sprites.front_shiny}></img>
            <h2>{pokemon.name}</h2>
            <h3>Pokemon Abilites</h3>
                <p>{species?.flavor_text_entries.filter(e => e.language.name === "en")[0].flavor_text}</p>
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



