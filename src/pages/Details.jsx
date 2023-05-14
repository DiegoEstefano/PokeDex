import './Details.css'
import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from '../components/Loading'
import { BsCaretLeft } from "react-icons/bs";
import Types from '../components/Types'
import { NavLink } from 'react-router-dom';
export default function Details() {

  const [ids] = useSearchParams()
  const id = ids.get("id")

  const [pokemon, setPokemon] = useState(null)
  const [tipos, setTipos] = useState(null)

  useEffect(() => {
    async function getPokemons() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await res.json()
      setPokemon(data)
      setTipos(data.types)
      console.log(data)

    }
    getPokemons()
  }, [id])

  return (
    <div>
      {pokemon && <section className={`detailHome ${tipos[0].type.name}`}>
        <NavLink to={"/"}>
          <BsCaretLeft />
        </NavLink>
        <section>
          <p>{pokemon.name.toUpperCase()}</p>
          <p>#{pokemon.id}</p>
          <Types types={pokemon.types} />
        </section>
        <section>
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
        </section>
      </section>}

      {!pokemon && <Loading />}
      {
        pokemon &&
        <div>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          {pokemon.abilities[0]  ?
            <p>{pokemon.abilities[0].ability.name}</p> :
            <>
              <p>{pokemon.abilities[0].ability.name}</p> <p>{pokemon.abilities[1].ability.name}</p>
            </>
          }

          <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt="" />
        </div>
      }
    </div >
  )
}
