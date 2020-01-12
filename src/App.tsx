import React from 'react';
import './App.css';
import { pokeApi, Pokemon } from './apis/pokemon';
import { SearchBar } from './components/searchBar';
import  SearchResults from './components/searchResults'


const App: React.FC = () => {

  const [pokemon, setPokemon] = React.useState<Pokemon | undefined | null>(undefined)

 
  const searchForPokemon = async (pokemon: string)=>{
    try{
      const response = await pokeApi.getPokemone(pokemon)
      setPokemon(response.data)
    }
    catch{
      setPokemon(null)
    }
   
  }

  return (
    <div className="App">
       <SearchBar  onSearch={searchForPokemon}/>
        <SearchResults pokemon={pokemon}/>
    </div>
  );
}

export default App;
