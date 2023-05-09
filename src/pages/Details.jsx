import './Details.css'
import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from '../components/Loading'
export default function Details() {
  
  const [ids] = useSearchParams()
  const id = ids.get("id")

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    async function getPokemons() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await res.json()
      setPokemon(data)
      console.log(data)
    }
    getPokemons()
  }, [id])


  return (
    <div>
      {!pokemon && <Loading />}
      {
        pokemon &&
        <div>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          <p>{pokemon.abilities[0].ability.name}</p>
          <p>{pokemon.abilities[1].ability.name}</p>
          <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt="" />
        </div>
      }

    </div>
  )
}
