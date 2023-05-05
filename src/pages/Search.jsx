import './Search.css'
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import PokemonCard from "../components/PokemonCard"
import Loading from '../components/Loading'

const url = "https://pokeapi.co/api/v2/pokemon/"

export default function Search() {
  const [pokemon, setPokemon] = useState()
  const [searchParams] = useSearchParams()
  const query = searchParams.get("query")

  useEffect(() => {
    async function getPokemons() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      const data = await res.json()
      setPokemon(data)
      console.log(data)
    }
    getPokemons()
  }, [query])

  return (
    <>
      <h1>Resultados para: {query.toUpperCase()} </h1>
      <div className='cards'>
        <Loading/>
        {pokemon &&
          <PokemonCard name={pokemon.name}
            id={pokemon.id}
            img={pokemon.sprites.other.dream_world.front_default}
            types={pokemon.types} />

        }
      </div>
    </>
  )
}
