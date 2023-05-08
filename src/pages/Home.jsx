import '../App.css'
import './Home.css'
// importação de hooks
import { useState, useEffect } from 'react'

// importação do react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// importação de componentes
import PokemonCard from '../components/PokemonCard'
import useFetch from '../hooks/useFetch'
import Nav from '../components/Nav'
import Loading from '../components/Loading'
import Search from '../pages/Search'

const url = "https://pokeapi.co/api/v2/pokemon?limit=650&offset=0"

export default function Home() {

    const { pokemon, loading, progress } = useFetch(url);

  return (
     <div className='cards'>
        {!loading && <Loading progress={progress} />}
        {pokemon && pokemon.map((poke, i) => (
          <PokemonCard name={poke.name}
            id={poke.id}
            img={poke.sprites.other.dream_world.front_default}
            types={poke.types} />
        ))}
      </div>
  )
}
