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
    }
    getPokemons()
  }, [id])

  return (
    <div>
      {pokemon &&
        <section className={`detailHome ${tipos[0].type.name}`}>
          <NavLink to={"/"}>
            <BsCaretLeft />
          </NavLink>
          <section className='id-section'>
            <p>#{pokemon.id}</p>
            <p>{pokemon.name.toUpperCase()}</p>
          </section>
          <section>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
          </section>
        </section>}

      <section className='about'>
        {
          pokemon &&
          <div className='about'>
            <h1>About</h1>
            <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt="" />
          </div>
        }
      </section>

      <section className='aboutData'>
        {
          pokemon &&
          <div className='aboutData'>
            <div className='aboutContainer'>
              <span>Name:</span> <span>{pokemon.name.toUpperCase()}</span>
            </div>
            <div className='aboutContainer'>
              <span>Weight: </span> <span>{pokemon.weight} kg</span>
            </div>
            <div className='aboutContainer'>
              <span>Height: </span> <span>{pokemon.height} cm</span>
            </div>
            <div >
              <span>Abilities: </span>
              {pokemon.abilities[1] ?
                <div className='abilities-container'>
                  <p className='abilities'>{pokemon.abilities[0].ability.name}</p>
                  <p className='abilities'>{pokemon.abilities[1].ability.name}</p>
                </div>
                :
                <div>
                  <p className='abilities'>{pokemon.abilities[0].ability.name}</p>
                </div>
              }
            </div>
            <div>
              <span>Types: <Types types={tipos} /></span>
            </div>
          </div>
        }
      </section>
    </div >
  )
}
