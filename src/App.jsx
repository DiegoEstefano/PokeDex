import './App.css'
import { useState, useEffect } from 'react'
import PokemonCard from './components/PokemonCard'
import useFetch from './hooks/useFetch'

const url = "https://pokeapi.co/api/v2/pokemon?limit=700&offset=0"

function App() {

  const { pokemon, loading } = useFetch(url);


  return (
    <div className='main'>
      <h1>Pokedex</h1>
      <div className='cards'>
        {!loading && <h1>Carregando...</h1>}
        {pokemon && pokemon.map((poke, i) => (
          <PokemonCard name={poke.name} 
          id={poke.id} 
          img={poke.sprites.other.dream_world.front_default}
           types={poke.types} />
        ))}
      </div>
    </div>
  )
}


export default App

