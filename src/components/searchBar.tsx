import React from 'react'

interface SearchBarProps{
    onSearch: (pokemon: string) => void
}

export function SearchBar({onSearch}: SearchBarProps){
    const [pokemonName, setPokemonName] = React.useState('')


    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => { 
        setPokemonName(event.target.value)
      };
      const searchName = async (event: React.FormEvent<HTMLFormElement>) => { 
        event.preventDefault()
        onSearch(pokemonName)
      };
    return(
        <div>
            <form onSubmit={searchName}>
                <input value={pokemonName} placeholder="Search for Pokemone" onChange={handleNameChange}></input>
                <button type="submit">Search</button>
            </form>
        </div>   
    )
}
