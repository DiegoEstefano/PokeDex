import './Search.css'
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import PokemonCard from "../components/PokemonCard"
const url = "https://pokeapi.co/api/v2/pokemon/"

export default function Search() {

// redirecionamento usando search params
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")

  const [pokemon, setPokemon] = useState(null)

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