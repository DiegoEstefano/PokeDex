import './App.css'
// importação de hooks
import { useState, useEffect } from 'react'

// importação de componentes
import PokemonCard from './components/PokemonCard'
import useFetch from './hooks/useFetch'
import Nav from './components/Nav'
import Loading from './components/Loading'

const url = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0"

function App() {

  const { pokemon, loading, progress } = useFetch(url);


  return (
    <div className='main'>
      <Nav />
      <div className='cards'>
  
         {!loading && <Loading progress={progress} />}
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

